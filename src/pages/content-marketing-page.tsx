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
import { AgentsSection } from "@/components/agents-section";
import { ContentPageArt } from "@/components/service-art";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";
import { requireService } from "@/content/services";

const serviceShortcuts = [
  { href: "/search-engine-optimization.html", label: "SEO", icon: SearchIcon },
  { href: "/social-media-marketing.html", label: "Social", icon: ThreeStarsIcon },
  { href: "/website-designing.html", label: "Web design", icon: CodeIcon },
  { href: "/content-marketing.html", label: "Content", icon: MegaphoneIcon },
  { href: "/graphic-designing.html", label: "Brand", icon: GlobeIcon },
];

const serviceItems = [
  ["Website designing", "Web experiences that make your useful content easy to find and read.", "/website-designing.html"],
  ["SEO & content writing", "Search strategy and editorial content planned together.", "/search-engine-optimization.html"],
  ["Web & application development", "Digital platforms and publishing systems for growing teams.", "/saas-products.html"],
  ["Social & digital marketing", "Distribution that gives valuable content a longer life.", "/digital-marketing.html"],
  ["Graphic designing", "Visual systems that help your message stand out clearly.", "/graphic-designing.html"],
];

const benefits = [
  "Builds lasting brand awareness",
  "Brings qualified visitors to your website",
  "Generates useful, sales-ready leads",
  "Establishes trust and subject authority",
  "Supports stronger search performance",
  "Creates long-term organic growth",
];

function ContentPlanArt() {
  return (
    <svg className="content-refresh-illustration" viewBox="0 0 400 330" role="img" aria-labelledby="content-art-title">
      <title id="content-art-title">Editorial calendar and published content formats</title>
      <rect x="32" y="38" width="238" height="250" rx="22" fill="#fff" stroke="#e8ddc8" strokeWidth="2" />
      <rect x="32" y="38" width="238" height="54" rx="22" fill="#fff1d5" />
      <path d="M32 72v20h238V72" fill="#fff1d5" />
      <circle cx="61" cy="65" r="8" fill="#f4bd4b" />
      <path d="M82 65h108" stroke="#776b58" strokeWidth="5" strokeLinecap="round" />
      <path d="M60 118h182" stroke="#e8ddc8" strokeWidth="1.5" />
      <g fill="#f8f5ec">
        <rect x="58" y="134" width="42" height="42" rx="9" />
        <rect x="112" y="134" width="42" height="42" rx="9" />
        <rect x="166" y="134" width="42" height="42" rx="9" />
        <rect x="220" y="134" width="30" height="42" rx="9" />
        <rect x="58" y="188" width="42" height="42" rx="9" />
        <rect x="112" y="188" width="42" height="42" rx="9" />
        <rect x="166" y="188" width="42" height="42" rx="9" />
        <rect x="220" y="188" width="30" height="42" rx="9" />
      </g>
      <rect x="112" y="134" width="42" height="42" rx="9" fill="#f4bd4b" />
      <path d="M61 252h136m-136 14h84" stroke="#b8b0a3" strokeWidth="5" strokeLinecap="round" />
      <rect x="234" y="106" width="130" height="72" rx="17" fill="#1c1917" />
      <path d="M256 130h74m-74 14h48" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="m273 178 10 10 18-20" fill="none" stroke="#d89b27" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="278" y="211" width="94" height="70" rx="15" fill="#fffaf1" stroke="#e8ddc8" strokeWidth="2" />
      <path d="M297 231h53m-53 12h43" stroke="#a9a092" strokeWidth="4" strokeLinecap="round" />
      <path d="M297 259h32" stroke="#d89b27" strokeWidth="7" strokeLinecap="round" />
      <circle cx="346" cy="265" r="11" fill="#f4bd4b" />
      <path d="m342 265 3 3 5-6" fill="none" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContentMarketingPage() {
  const [openService, setOpenService] = useState(-1);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="/start-project.html" />
      <main className="content-refresh-page">
        <section className="seo-refresh-hero">
          <Container>
            <div className="seo-refresh-hero-inner">
              <Reveal className="seo-refresh-hero-copy"><div>
                <p className="seo-refresh-eyebrow">Content marketing</p>
                <h1>Content that <span>earns attention.</span></h1>
                <p className="seo-refresh-subtitle">Create useful stories that bring the right people closer to your brand and turn attention into action.</p>
                <a href="/start-project.html" className="seo-refresh-button">Start a project <ArrowRightIcon aria-hidden="true" /></a>
              </div></Reveal>
              <Reveal delay={120} className="seo-refresh-hero-art"><ContentPageArt /></Reveal>
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
                <h2>Make every part of your story work harder.</h2>
                <div className="seo-refresh-accordion">
                  {serviceItems.map(([title, description, href], index) => {
                    const expanded = openService === index;
                    const panelID = `content-service-panel-${index}`;
                    return <article key={href} className={`seo-refresh-service-item${expanded ? " is-open" : ""}`}><h3><button type="button" aria-expanded={expanded} aria-controls={panelID} onClick={() => setOpenService(expanded ? -1 : index)}><span>{title}</span><span className="seo-refresh-plus" aria-hidden="true">{expanded ? "−" : "+"}</span></button></h3>{expanded && <div id={panelID} className="seo-refresh-service-description"><p>{description}</p><a href={href}>Explore service <ArrowRightIcon aria-hidden="true" /></a></div>}</article>;
                  })}
                </div>
              </div>
              <Reveal className="seo-refresh-services-art"><ContentPlanArt /></Reveal>
            </div>

            <div className="seo-refresh-copy-block">
              <Reveal><div>
                <p className="seo-refresh-eyebrow">Content marketing</p>
                <h2>Give your audience something worth coming back for.</h2>
                <p>
                  Content marketing is a strategic approach focused on creating
                  and distributing valuable, relevant and consistent content
                  for a clearly defined audience. Through your website, blog,
                  social channels and newsletters, useful ideas attract and
                  retain customers while supporting long-term business goals.
                </p>
                <p>
                  At ASE Technologies, we build content around what your
                  audience needs to know and what your business can credibly
                  teach. Strong editorial planning, careful writing and
                  thoughtful distribution help establish your brand as a
                  trusted authority.
                </p>
              </div></Reveal>
              <Reveal delay={100} className="seo-refresh-benefits"><div>
                <span className="seo-refresh-benefit-icon"><GraphUpIcon aria-hidden="true" /></span>
                <p className="seo-refresh-eyebrow">Useful work, lasting value</p>
                <h3>Content marketing benefits</h3>
                <p className="seo-refresh-benefits-intro">Create a dependable source of discovery, trust and qualified interest.</p>
                <ul>{benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}</ul>
              </div></Reveal>
            </div>
          </Container>
        </section>

        <AgentsSection
          className="agents-section-soft"
          {...requireService("content-marketing").agents}
          href="/start-project.html"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
