import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SaasProductsPage } from "@/pages/saas-products-page";
import { SeoMetadata } from "@/components/seo-metadata";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoMetadata />
    <SaasProductsPage />
  </StrictMode>,
);
