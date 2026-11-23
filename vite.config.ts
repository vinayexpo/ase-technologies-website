import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/ase-technologies-website/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        "digital-marketing": fileURLToPath(
          new URL("./digital-marketing.html", import.meta.url),
        ),
        "search-engine-optimization": fileURLToPath(
          new URL("./search-engine-optimization.html", import.meta.url),
        ),
        "social-media-marketing": fileURLToPath(
          new URL("./social-media-marketing.html", import.meta.url),
        ),
        "website-designing": fileURLToPath(
          new URL("./website-designing.html", import.meta.url),
        ),
        "content-marketing": fileURLToPath(
          new URL("./content-marketing.html", import.meta.url),
        ),
        "graphic-designing": fileURLToPath(
          new URL("./graphic-designing.html", import.meta.url),
        ),
        "saas-products": fileURLToPath(
          new URL("./saas-products.html", import.meta.url),
        ),
        "ase-academy": fileURLToPath(
          new URL("./ase-academy.html", import.meta.url),
        ),
        "gallery": fileURLToPath(
          new URL("./gallery.html", import.meta.url),
        ),
        "portfolio": fileURLToPath(
          new URL("./portfolio.html", import.meta.url),
        ),
        "about": fileURLToPath(
          new URL("./about.html", import.meta.url),
        ),
        "contact": fileURLToPath(
          new URL("./contact.html", import.meta.url),
        ),
        "start-project": fileURLToPath(
          new URL("./start-project.html", import.meta.url),
        ),
        "all-services": fileURLToPath(
          new URL("./all-services.html", import.meta.url),
        ),
      },
    },
  },
});
