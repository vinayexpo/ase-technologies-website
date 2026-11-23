import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GalleryPage } from "@/components/gallery-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <GalleryPage />
  </StrictMode>,
);
