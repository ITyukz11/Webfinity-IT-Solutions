import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 

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
    <html lang="en">           {/**TO REMOVE NEXTJS WARNING IN CONSOLE ADD suppressHydrationWarning={true} */}
      <body className={`${inter.className} antialiased min-w-screen w-auto `} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
