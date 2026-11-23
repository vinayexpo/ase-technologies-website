import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { WebsiteDesigningPage } from "@/pages/website-designing-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <WebsiteDesigningPage />
  </StrictMode>,
);
