import "../globals.css";
import DashboardPage from "@/features/DashboardPage/DashboardPage";
import PageLayout from "@/components/core/PageLayout";

const page = async () => {
  return (
    <PageLayout>
      <DashboardPage />
    </PageLayout>
  );
};

export default page;
