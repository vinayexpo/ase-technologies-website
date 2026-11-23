import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContactPage } from "@/components/contact-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <ContactPage />
  </StrictMode>,
);