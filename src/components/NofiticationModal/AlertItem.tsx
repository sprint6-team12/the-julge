import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import FormatUtils from '@/lib/utils/FormatUtils';
import { getResultInfo } from '@/lib/utils/NotificationModal';
import { userState } from '@/recoil/atoms/AuthAtom';
import { AlertItemProps } from '@/types/NotificationModal';
import alertAPI from '@/utils/api/alertAPI';

export default function AlertItem({ item }: { item: AlertItemProps }) {
  const { notice, result, shop, read } = item;
  const href = item.notice.href;
  const resultInfo = getResultInfo(result);
  const { id } = useRecoilValue(userState);

  if (!resultInfo) {
    return null;
  }

  function removePrefix(url: string): string {
    const prefix = '/api/6-12/the-julge';
    if (url.startsWith(prefix)) {
      return url.slice(prefix.length);
    }
    return url;
  }

  const linkHref = removePrefix(href);

  const { formattedStartDate, formattedStartTime, formattedEndTime } =
    FormatUtils.workSchedule(notice.item.startsAt, notice.item.workhour);
  const formattedDate = FormatUtils.distanceToNow(item.createdAt);

  const handleOnclickAlert = async (alertId: string) => {
    if (id && !read) {
      await alertAPI.putAlerts({ user_id: id, alert_id: alertId });
    }
  };

  return (
    <Link href={linkHref}>
      <div
        onClick={() => handleOnclickAlert(item.id)}
        key={item.id}
        className={`flex flex-col p-4 border rounded gap-8px ${read ? 'bg-gray20' : 'bg-white'} `}
      >
        {resultInfo.icon}
        <p className={`text-14px ${read ? 'text-gray50' : ''}`}>
          {shop.item.name} ({formattedStartDate} {formattedStartTime} ~{' '}
          {formattedEndTime}) 공고 지원이 {resultInfo.text}되었어요
        </p>
        <p className="text-12px text-gray40">{formattedDate}</p>
      </div>
    </Link>
  );
}
