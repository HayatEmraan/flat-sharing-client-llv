import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProvider from "@/provider/global";
import NProgress from "@/components/shared/progress/nprogress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flat Sharing - (Since 2024)",
  description: "A Flat Sharing Application For Learning Purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NProgress />
        <GlobalProvider>
          <div>{children}</div>
        </GlobalProvider>
      </body>
    </html>
  );
}
