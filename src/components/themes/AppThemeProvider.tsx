"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const AppThemeProvider: React.FC<{ children: any }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};


export default AppThemeProvider;