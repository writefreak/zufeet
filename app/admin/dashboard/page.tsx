"use client";

import { CategoryOrdersChart } from "@/components/admin/cat-orders-chart";
import { DashboardStats } from "@/components/admin/dashboard-stats";
import { MonthlyOrdersChart } from "@/components/admin/monthly-orders-chart";
import { PageHeader } from "@/components/admin/page-header";
import { RecentOrdersTable } from "@/components/admin/recent-orders-table";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 ">
      <PageHeader
        title="Hello, Welcome Back👋"
        description="Here's what's happening with Zufeet today."
      />

      <DashboardStats />

      <div className="grid gap-6 lg:grid-cols-5">
        <MonthlyOrdersChart />
        <CategoryOrdersChart />
      </div>

      <RecentOrdersTable />
    </div>
  );
}
