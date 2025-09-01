import React, { PropsWithChildren } from "react";
import AppHeader from "../shared/Header";

function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AppHeader />
      <section className="md:mt-6 mx-[5%]">{children}</section>
    </>
  );
}

export default PageLayout;
