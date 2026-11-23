import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { StartProjectPage } from "@/pages/start-project-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <StartProjectPage />
  </StrictMode>,
);
