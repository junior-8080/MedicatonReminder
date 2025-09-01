import "../globals.css";
import type { Metadata } from "next";
import AppHeader from "@/components/shared/Header";
import DashboardPage from "@/features/DashboardPage/DashboardPage";
import PageLayout from "@/components/core/PageLayout";
import RechargeManagement from "@/features/RechargePage/RechargeManagement";

export const metadata: Metadata = {
  title: "SMSPage Dashboard",
};

const page = async () => {
  return (
    <PageLayout>
      <RechargeManagement />
    </PageLayout>
  );
};

export default page;
