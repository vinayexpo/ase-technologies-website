import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CareersPage } from "@/pages/careers-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <CareersPage />
  </StrictMode>,
);
