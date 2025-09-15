import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syslence- Custom Web Applications",
  description:
    "Custom web application systems for small and medium-sized businesses for Global & Indian Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1 bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-blue-800">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
         {/* ✅ Vercel Analytics */}
        <Analytics />

        {/* ✅ Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
