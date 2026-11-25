import { useEffect } from "react";

const SITE_URL = "https://asetechnologies.in";
const DEFAULT_IMAGE = `${SITE_URL}/ase-technologies-logo.png`;

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ASE Technologies — Digital Marketing and SaaS Applications",
    description:
      "ASE Technologies builds SEO, social media, ads, websites and SaaS applications for growing businesses in Visakhapatnam and across India.",
  },
  "/index.html": {
    title: "ASE Technologies — Digital Marketing and SaaS Applications",
    description:
      "ASE Technologies builds SEO, social media, ads, websites and SaaS applications for growing businesses in Visakhapatnam and across India.",
  },
  "/digital-marketing.html": {
    title: "Digital Marketing — ASE Technologies",
    description:
      "SEO, AEO, GEO, social media and paid media run for you by ASE Technologies.",
  },
  "/search-engine-optimization.html": {
    title: "Search Engine Optimization — ASE Technologies",
    description:
      "Technical SEO, local search and content strategy that improve visibility and qualified organic traffic.",
  },
  "/social-media-marketing.html": {
    title: "Social Media Marketing — ASE Technologies",
    description:
      "Social media content, community management and paid campaigns planned weekly and reported clearly.",
  },
  "/website-designing.html": {
    title: "Website Designing — ASE Technologies",
    description:
      "Fast, accessible and responsive website design and development for growing businesses.",
  },
  "/content-marketing.html": {
    title: "Content Marketing — ASE Technologies",
    description:
      "Editorial strategy, useful long-form writing and content distribution that builds authority.",
  },
  "/graphic-designing.html": {
    title: "Graphic Designing — ASE Technologies",
    description:
      "Brand identity, visual systems and campaign graphics designed for clarity and consistency.",
  },
  "/saas-products.html": {
    title: "SaaS Products — ASE Technologies",
    description:
      "Custom school, clinic, hospital, ecommerce and business software built to simplify operations.",
  },
  "/ase-academy.html": {
    title: "ASE Academy — ASE Technologies",
    description:
      "Practical digital marketing training in SEO, social media, advertising and content.",
  },
  "/gallery.html": {
    title: "ASE Office Gallery — ASE Technologies",
    description:
      "Office celebrations, team moments and memories from ASE Technologies.",
  },
  "/portfolio.html": {
    title: "ASE Technologies — Our Portfolio",
    description:
      "Explore web design and digital marketing projects created by ASE Technologies.",
  },
  "/about.html": {
    title: "About ASE Technologies",
    description:
      "Meet ASE Technologies, a digital marketing and product studio serving businesses across India.",
  },
  "/careers.html": {
    title: "Careers at ASE Technologies",
    description:
      "Build your future with ASE Technologies. Explore sales and business development opportunities in Visakhapatnam for freshers and experienced professionals.",
  },
  "/contact.html": {
    title: "Contact ASE Technologies",
    description:
      "Contact ASE Technologies to discuss website design, digital marketing or custom software.",
  },
  "/start-project.html": {
    title: "Start a Project — ASE Technologies",
    description:
      "Tell ASE Technologies about your project and get a clear scope, timeline and next step.",
  },
  "/all-services.html": {
    title: "All Services — ASE Technologies",
    description:
      "Explore ASE Technologies digital marketing, website, design and SaaS services.",
  },
};

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export function SeoMetadata() {
  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL;
    if (baseUrl !== "/") {
      document.querySelectorAll<HTMLAnchorElement>("a[href^='/']").forEach((element) => {
        const href = element.getAttribute("href");
        if (href) element.href = `${baseUrl}${href.slice(1)}`;
      });
      document.querySelectorAll<HTMLImageElement>("img[src^='/']").forEach((element) => {
        const src = element.getAttribute("src");
        if (src) element.src = `${baseUrl}${src.slice(1)}`;
      });
    }

    const path = window.location.pathname.endsWith("/index.html")
      ? "/index.html"
      : window.location.pathname === "/"
        ? "/"
        : window.location.pathname;
    const metadata = pageMetadata[path] ?? pageMetadata["/"];
    const canonicalUrl = `${SITE_URL}${path === "/" || path === "/index.html" ? "/" : path}`;

    document.documentElement.lang = "en";
    document.title = metadata.title;
    setMeta('meta[name="description"]', "name", "description", metadata.description);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow");
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "ASE Technologies");
    setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
    setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_IMAGE);
    setLink("canonical", canonicalUrl);

    const existing = document.getElementById("seo-organization-schema");
    const schema = existing ?? document.createElement("script");
    schema.id = "seo-organization-schema";
    schema.setAttribute("type", "application/ld+json");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ASE Technologies",
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      email: "info@asetechnologies.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
      areaServed: ["Andhra Pradesh", "India"],
      sameAs: [],
    });
    if (!existing) document.head.appendChild(schema);
  }, []);

  return null;
}
