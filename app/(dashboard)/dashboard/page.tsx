"use client";

import AnalyticsBox from '@/components/dashboard/analytics-box';
import CreateUrl from '@/components/dashboard/create-url';
import RightDataBar from '@/components/dashboard/right-data-bar';
import { useGetAllUrlCreatedByUser } from '@/hooks/ts-query/links';

const DashboardPage = () => {
  const { data, isPending } = useGetAllUrlCreatedByUser();
  return (
    <div className="grid grid-cols-3 gap-4 h-full p-4">

      <div className="col-span-2 grid grid-rows-2 gap-4">

        <CreateUrl />

        <div className="grid grid-cols-2 gap-4">

          <AnalyticsBox clickCount={data?.analytics?.totalClickCount || 0} linkCount={data?.analytics?.totalLinkCount || 0} />
          <div className="bg-neutral-900 rounded-xl"></div>
        </div>

      </div>
      <RightDataBar data={data?.urls || []} isPending={isPending} />
    </div>
  )
}

export default DashboardPage;