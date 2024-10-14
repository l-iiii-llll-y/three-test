"use client";

import React from "react";
import Intro from "../components/intro/Intro";
import APrismaXPov from "../components/APrismaXPov";
import AConnected from "../components/AConnected";
import AFooter from "../components/AFooter";
import AHeader from "../components/AHeader";

export default function RootLayout() {
  return (
    <>
      <AHeader />
      <Intro />
      <APrismaXPov />
      <AConnected />
      <AFooter />
    </>
  );
}
