"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { RecoilRoot } from "recoil";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default AppProvider;
