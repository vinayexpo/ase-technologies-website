import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AllServicesPage } from "@/pages/all-services-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <AllServicesPage />
  </StrictMode>,
);
