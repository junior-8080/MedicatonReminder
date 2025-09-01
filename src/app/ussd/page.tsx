import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import UssdManagement from "@/features/UssdPage/UssdManagement";

const page = async () => {
  return (
    <PageLayout>
      <UssdManagement />
    </PageLayout>
  );
};

export default page;
