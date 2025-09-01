import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import OtpManagement from "@/features/OtpPage/OtpManagement";

const page = async () => {
  return (
    <PageLayout>
      <OtpManagement />
    </PageLayout>
  );
};

export default page;
