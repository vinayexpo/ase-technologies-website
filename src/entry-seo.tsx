import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SeoPage } from "@/pages/seo-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <SeoPage />
  </StrictMode>,
);
