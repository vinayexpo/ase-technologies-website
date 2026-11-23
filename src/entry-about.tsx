import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AboutPage } from "@/components/about-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <AboutPage />
  </StrictMode>,
);
