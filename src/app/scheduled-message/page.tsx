import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import ScheduledSms from "@/features/ScheduledSmsPage/ScheduledSms";



const page = async () => {
  return (
    <PageLayout>
      <ScheduledSms />
    </PageLayout>
  );
};

export default page;
