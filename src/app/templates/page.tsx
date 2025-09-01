import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import Templates from "@/features/SettingsPage/components/Templates";

const page = async () => {
  return (
    <PageLayout>
      <Templates />
    </PageLayout>
  );
};

export default page;
