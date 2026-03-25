"use client";

import { useEffect } from "react";
import { initializeGA } from "@/lib/analytics";
import CookieBanner from "./CookieBanner";

export default function Analytics() {
  useEffect(() => {
    initializeGA();
  }, []);

  return <CookieBanner />;
}
