import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import SenderId from "@/features/SettingsPage/components/SenderId";

const page = async () => {
  return (
    <PageLayout>
      <SenderId />
    </PageLayout>
  );
};

export default page;
