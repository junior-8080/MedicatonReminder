import "../globals.css";
import type { Metadata } from "next";
import PageLayout from "@/components/core/PageLayout";
import WalletManagement from "@/features/WalletPage/WalletManagement";


export const metadata: Metadata = {
  title: "SMSPage Dashboard",
};

const page = async () => {
  return (
    <PageLayout>
     <WalletManagement />
    </PageLayout>
  );
};

export default page;
