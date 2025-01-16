"use client"

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/fragments/Navbar";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <div className="min-h-screen min-w-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </SessionProvider>
  );
}
