"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  // THIS IS THE MAIN COMPONENT THAT WRAPPERS ALL
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Hello from layout");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
