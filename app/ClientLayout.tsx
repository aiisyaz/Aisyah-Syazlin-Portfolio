"use client";

import TopNavbarLayout from "./components/topnav";
import AOSInitializer from "./AOSInitializer";
import React from "react";
import Footer from "./components/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInitializer />
      <TopNavbarLayout />
      {children}
      <Footer />
    </>
  );
}