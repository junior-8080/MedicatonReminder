import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import ContactManagement from "@/features/ContactPage/ContactManagement";

const page = async () => {
  return (
    <PageLayout>
      <ContactManagement />
    </PageLayout>
  );
};

export default page;
