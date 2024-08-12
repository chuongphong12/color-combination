import type { Metadata } from "next";
import "./globals.css";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { roboto } from "@/lib/font";
import AppProvider from "@/lib/provider";
import dynamic from "next/dynamic";

const HeaderBackground = dynamic(() =>
  import("@/app/_elements").then((m) => m.HeaderBackground),
);

export const metadata: Metadata = {
  title: "Pastel Blonde",
  description: "Color combination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-roboto antialiased",
          roboto.variable,
        )}
      >
        <AppProvider>
          <main className="flex min-h-screen flex-col items-center justify-between p-12">
            {children}
            <HeaderBackground />
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
