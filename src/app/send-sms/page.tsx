import "../globals.css";
import type { Metadata } from "next";
import PageLayout from "@/components/core/PageLayout";
// @ts-ignore
import SendSms from "@/features/SendSMSPage/SendSms";

export const metadata: Metadata = {
  title: "SMSPage Dashboard",
};

const page = async () => {
  return (
    <PageLayout>
      <SendSms />
    </PageLayout>
  );
};

export default page;
