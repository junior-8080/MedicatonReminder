import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import SmsCreditPackages from "@/features/PackagesPage/SmsCreditPackages";


const page = async () => {
  return (
    <PageLayout>
      <SmsCreditPackages />
    </PageLayout>
  );
};

export default page;
