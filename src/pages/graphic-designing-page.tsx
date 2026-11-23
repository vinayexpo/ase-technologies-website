import { useState } from "react";
import {
  ArrowRightIcon,
  CodeIcon,
  GlobeIcon,
  GraphUpIcon,
  MegaphoneIcon,
  SearchIcon,
  ThreeStarsIcon,
} from "@/components/icons";
import { BrandPageArt } from "@/components/service-art";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";

const serviceShortcuts = [
  { href: "/search-engine-optimization.html", label: "SEO", icon: SearchIcon },
  { href: "/social-media-marketing.html", label: "Social", icon: ThreeStarsIcon },
  { href: "/website-designing.html", label: "Web design", icon: CodeIcon },
  { href: "/content-marketing.html", label: "Content", icon: MegaphoneIcon },
  { href: "/graphic-designing.html", label: "Brand", icon: GlobeIcon },
];

const serviceItems = [
  ["Website designing", "A digital experience that carries your visual identity into every page.", "/website-designing.html"],
  ["SEO & content writing", "Clear messaging and useful content that makes the brand easier to find.", "/search-engine-optimization.html"],
  ["Web & application development", "Digital products designed and built as a coherent experience.", "/saas-products.html"],
  ["Social & digital marketing", "Campaign creative adapted for each channel and audience.", "/digital-marketing.html"],
  ["Content marketing", "Editorial assets and visual storytelling that make complex ideas clear.", "/content-marketing.html"],
];

const benefits = [
  "A memorable and consistent brand identity",
  "Clearer communication of complex ideas",
  "More professional marketing materials",
  "Stronger audience recognition and trust",
  "More engaging digital experiences",
  "A flexible design system for future growth",
  "Consistent creative across print and digital",
];

function GraphicStudioArt() {
  return (
    <svg className="graphic-refresh-illustration" viewBox="0 0 400 330" role="img" aria-labelledby="graphic-art-title">
      <title id="graphic-art-title">A designer's workspace with layout, ruler and pencil</title>
      <rect x="40" y="35" width="250" height="250" rx="22" fill="#fff" stroke="#e8ddc8" strokeWidth="2" />
      <rect x="62" y="58" width="206" height="125" rx="13" fill="#fff1d5" />
      <rect x="78" y="74" width="74" height="92" rx="9" fill="#f4bd4b" />
      <circle cx="115" cy="106" r="21" fill="#1c1917" />
      <path d="M78 151c17-17 31-12 44-3 11 8 18 6 30-3v21H78z" fill="#d47d42" />
      <path d="M171 82h77m-77 15h61m-61 15h69" stroke="#94856f" strokeWidth="5" strokeLinecap="round" />
      <rect x="171" y="133" width="58" height="24" rx="12" fill="#1c1917" />
      <path d="M64 206h177M64 221h114M64 236h151" stroke="#c7bdad" strokeWidth="5" strokeLinecap="round" />
      <rect x="315" y="65" width="34" height="190" rx="12" fill="#1c1917" transform="rotate(28 332 160)" />
      <path d="m363 53 18 25-24-8z" fill="#f4bd4b" />
      <path d="m278 194 51 28-14 26-51-28z" fill="#d8c5a0" />
      <path d="m271 219-11 36 34-18z" fill="#9b7851" />
      <circle cx="328" cy="282" r="17" fill="#fff1d5" stroke="#e8ddc8" strokeWidth="2" />
      <path d="m321 282 5 5 10-11" fill="none" stroke="#8a5b0c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GraphicDesigningPage() {
  const [openService, setOpenService] = useState(-1);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="/start-project.html" />
      <main className="graphic-refresh-page">
        <section className="seo-refresh-hero">
          <Container>
            <div className="seo-refresh-hero-inner">
              <Reveal className="seo-refresh-hero-copy"><div>
                <p className="seo-refresh-eyebrow">Graphic designing</p>
                <h1>Design that makes your <span>brand unmistakable.</span></h1>
                <p className="seo-refresh-subtitle">Bring your brand to life with a thoughtful identity and creative built to work across every touchpoint.</p>
                <a href="/start-project.html" className="seo-refresh-button">Start a project <ArrowRightIcon aria-hidden="true" /></a>
              </div></Reveal>
              <Reveal delay={120} className="seo-refresh-hero-art"><BrandPageArt /></Reveal>
            </div>
          </Container>
        </section>

        <nav className="seo-refresh-shortcuts" aria-label="Explore services">
          {serviceShortcuts.map(({ href, label, icon: Icon }) => <a key={href} href={href} className="seo-refresh-shortcut"><span><Icon aria-hidden="true" /></span><strong>{label}</strong></a>)}
        </nav>

        <section className="seo-refresh-content">
          <Container>
            <div className="seo-refresh-services">
              <div className="seo-refresh-accordion-column">
                <p className="seo-refresh-eyebrow">Explore ASE services</p>
                <h2>Design is one part of a complete brand experience.</h2>
                <div className="seo-refresh-accordion">
                  {serviceItems.map(([title, description, href], index) => {
                    const expanded = openService === index;
                    const panelID = `graphic-service-panel-${index}`;
                    return <article key={href} className={`seo-refresh-service-item${expanded ? " is-open" : ""}`}><h3><button type="button" aria-expanded={expanded} aria-controls={panelID} onClick={() => setOpenService(expanded ? -1 : index)}><span>{title}</span><span className="seo-refresh-plus" aria-hidden="true">{expanded ? "−" : "+"}</span></button></h3>{expanded && <div id={panelID} className="seo-refresh-service-description"><p>{description}</p><a href={href}>Explore service <ArrowRightIcon aria-hidden="true" /></a></div>}</article>;
                  })}
                </div>
              </div>
              <Reveal className="seo-refresh-services-art"><GraphicStudioArt /></Reveal>
            </div>

            <div className="seo-refresh-copy-block">
              <Reveal><div>
                <p className="seo-refresh-eyebrow">Graphic designing</p>
                <h2>Visual storytelling with a job to do.</h2>
                <p>
                  Graphic design brings strategy and creativity together to
                  solve problems and influence how people understand a brand.
                  Through considered typography, color and visual hierarchy,
                  abstract ideas become clear, recognizable assets.
                </p>
                <p>
                  More than decoration, design guides, informs and persuades.
                  We create a consistent visual language that works across
                  digital and physical touchpoints, helping your message stay
                  recognizable wherever people meet your business.
                </p>
              </div></Reveal>
              <Reveal delay={100} className="seo-refresh-benefits"><div>
                <span className="seo-refresh-benefit-icon"><GraphUpIcon aria-hidden="true" /></span>
                <p className="seo-refresh-eyebrow">Design with a purpose</p>
                <h3>Graphic design benefits</h3>
                <p className="seo-refresh-benefits-intro">Strong visual communication makes every brand interaction work harder.</p>
                <ul>{benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}</ul>
              </div></Reveal>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
