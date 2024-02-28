import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import DetailedFooter from "./Components/Footer/DetailedFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My E-Commerce",
  description: "An E-Commerce website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <DetailedFooter />
        </body>
    </html>
  );
}
