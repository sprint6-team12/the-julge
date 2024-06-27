// import LinkButton from '@/components/Button/LinkButton';
// import MyPageProfile from './MyPageProfile';
// import EmployeeTable from '@/components/Table/EmployeeTable';

export default function MyPageRegistered() {
  return (
    <div className="px-40px tablet:px-60px pc:px-[245px] py-12px tablet:py-32px pc:py-60px">
      <div className="pc:flex justify-between gap-10px mb-60px">
        <span className="font-[700] text-20px tablet:text-28px pc:text-28px text-nowrap">
          내 프로필
        </span>
        {/* <MyPageProfile ProfileData={} /> */}
      </div>
      <span className="font-[700] text-20px tablet:text-28px pc:text-28px">
        신청 내역
      </span>

      {/* {hasApplications ? (
        <div className="mt-32px w-full">
          <EmployeeTable />
        </div>
      ) : (
        <div className="border rounded-12px w-full h-195px tablet:h-217px pc:h-217px">
          <div className="text-center px-24px py-60px">
            <span className="font-[400] text-14px tablet:text-16px pc:text-16px">
              아직 신청 내역이 없어요.
            </span>
            <div className="flex-center mt-16px tablet:mt-24px pc:mt-24px">
              <LinkButton
                href="/" // 공고리스트페이지로 이동
                className="button_large_active text-nowrap"
              >
                공고 보러가기
              </LinkButton>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
