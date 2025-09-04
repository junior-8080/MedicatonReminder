import React, { PropsWithChildren } from "react";
import Sidebar from "@/components/core/Sidebar";

function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <section className="grid grid-cols-12">
          <div className="col-span-2">
              <Sidebar />
          </div>
        <div className="col-span-10">
            {children}
        </div>

      </section>
    </>
  );
}

export default PageLayout;
