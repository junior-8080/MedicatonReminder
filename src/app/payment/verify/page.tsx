"use client"
import "../../globals.css";
import PageLayout from "@/components/core/PageLayout";
import PaymentConfirmationPage from "@/features/PaymentPage/PaymentConfirmationPage";
import {Suspense} from "react";

const page = async () => {
  return (
      <Suspense>
          <PageLayout>
              <PaymentConfirmationPage />
          </PageLayout>
      </Suspense>

  );
};

export default page;
