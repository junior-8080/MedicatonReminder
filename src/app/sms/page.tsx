import "../globals.css";
import type { Metadata } from "next";
import SMSManagement from "@/features/SMSPage/SmsManagement";
import PageLayout from "@/components/core/PageLayout";

export const metadata: Metadata = {
  title: "SMSPage Dashboard",
};

const page = async () => {
  return (
    <PageLayout>
      <SMSManagement />
    </PageLayout>
  );
};

export default page;
