import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import ApiPage from "@/features/ApiPage/ApiPage";

const page = async () => {
  return <PageLayout>
      <ApiPage />
  </PageLayout>;
};

export default page;
