import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import Support from "@/features/SupportPage/Support";



const page = async () => {
  return (
      <PageLayout>
        <Support />
      </PageLayout>
  );
};

export default page;
