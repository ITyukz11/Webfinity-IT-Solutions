import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webfinity",
  description: "Webfinity IT Solutions Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  

      <body className={`${inter.className} antialiased w-fit`} >{children}</body>

    </html>
  );
}
