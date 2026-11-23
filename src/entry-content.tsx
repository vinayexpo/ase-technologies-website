import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContentMarketingPage } from "@/pages/content-marketing-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <ContentMarketingPage />
  </StrictMode>,
);
