"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
// import AppThemeProvider from "@/components/themes/AppThemeProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AuthProvider } from "@/features/AuthPage/authStore/authProvider";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/*<AppThemeProvider>*/}
          <AntdRegistry>{children}</AntdRegistry>
          <ToastContainer position="top-right" autoClose={3000} />
        {/*</AppThemeProvider>*/}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Providers;
