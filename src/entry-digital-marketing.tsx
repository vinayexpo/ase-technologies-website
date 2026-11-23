import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DigitalMarketingPage } from "@/pages/digital-marketing-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <DigitalMarketingPage />
  </StrictMode>,
);
