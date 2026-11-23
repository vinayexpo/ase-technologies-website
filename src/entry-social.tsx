import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SocialMediaPage } from "@/pages/social-media-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <SocialMediaPage />
  </StrictMode>,
);
