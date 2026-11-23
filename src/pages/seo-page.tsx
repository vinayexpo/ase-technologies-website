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
import { SeoPageArt } from "@/components/service-art";
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
  {
    title: "Search engine optimization",
    description: "Technical SEO, local search and content mapped to real search intent.",
    href: "/search-engine-optimization.html",
  },
  {
    title: "Social media marketing",
    description: "Channel planning, creative production and community management.",
    href: "/social-media-marketing.html",
  },
  {
    title: "Website designing",
    description: "Accessible, responsive sites structured around visitor journeys.",
    href: "/website-designing.html",
  },
  {
    title: "Content marketing",
    description: "Editorial strategy, useful long-form writing and distribution.",
    href: "/content-marketing.html",
  },
  {
    title: "Graphic designing",
    description: "Identity systems and campaign assets built to work together.",
    href: "/graphic-designing.html",
  },
  {
    title: "SaaS products",
    description: "Business software, automation and custom product development.",
    href: "/saas-products.html",
  },
];

const benefits = [
  "Sustainable organic traffic",
  "A clearer, faster user experience",
  "Brand authority and trust",
  "More qualified conversions",
  "A stronger competitive position",
  "Compounding long-term returns",
  "Local and global search reach",
];

function SeoGrowthArt() {
  return (
    <svg className="seo-refresh-growth-art" viewBox="0 0 400 330" role="img" aria-labelledby="seo-growth-title">
      <title id="seo-growth-title">Search results and organic traffic growth</title>
      <rect x="30" y="38" width="300" height="250" rx="24" fill="#fff" stroke="#e8ddc8" strokeWidth="2" />
      <rect x="52" y="62" width="255" height="40" rx="20" fill="#f8f5ec" />
      <circle cx="72" cy="82" r="7" fill="none" stroke="#8a5b0c" strokeWidth="2" />
      <path d="m77 87 6 6" stroke="#8a5b0c" strokeWidth="2" strokeLinecap="round" />
      <path d="M96 82h124" stroke="#c8c0b3" strokeWidth="5" strokeLinecap="round" />
      <rect x="54" y="122" width="5" height="43" rx="2.5" fill="#f4bd4b" />
      <path d="M74 130h155M74 144h205M74 157h130" stroke="#a9a298" strokeWidth="5" strokeLinecap="round" />
      <path d="M54 184h225" stroke="#e8ddc8" strokeWidth="1.5" />
      <path d="M67 250V224M103 250v-40M139 250v-29M175 250v-62M211 250v-47M247 250v-79" stroke="#d9c9a6" strokeWidth="11" strokeLinecap="round" />
      <path d="m65 205 39-15 34 9 39-35 35 13 38-42" fill="none" stroke="#a96812" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="250" cy="135" r="6" fill="#f4bd4b" />
      <rect x="236" y="28" width="132" height="40" rx="20" fill="#1c1917" />
      <circle cx="258" cy="48" r="5" fill="#f4bd4b" />
      <path d="M272 48h73" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <rect x="270" y="270" width="98" height="38" rx="19" fill="#fff0cd" stroke="#ead7a9" />
      <path d="m289 290 8-8 7 5 12-12" fill="none" stroke="#8a5b0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M322 283h28M322 291h20" stroke="#9a8d78" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function SeoPage() {
  const [openService, setOpenService] = useState(-1);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="/start-project.html" />
      <main>
        <section className="seo-refresh-hero">
          <Container>
            <div className="seo-refresh-hero-inner">
              <Reveal className="seo-refresh-hero-copy">
                <div>
                  <p className="seo-refresh-eyebrow">Search engine optimization</p>
                  <h1>Search visibility, built to <span>last.</span></h1>
                  <p className="seo-refresh-subtitle">
                    Driving growth through thoughtful, measurable digital
                    strategy. Get found by the people who need what you do.
                  </p>
                  <a href="/start-project.html" className="seo-refresh-button">
                    Start a project <ArrowRightIcon aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120} className="seo-refresh-hero-art">
                <SeoPageArt />
              </Reveal>
            </div>
          </Container>
        </section>

        <nav className="seo-refresh-shortcuts" aria-label="Explore services">
          {serviceShortcuts.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} className="seo-refresh-shortcut">
              <span><Icon aria-hidden="true" /></span>
              <strong>{label}</strong>
            </a>
          ))}
        </nav>

        <section className="seo-refresh-content">
          <Container>
            <div className="seo-refresh-services">
              <div className="seo-refresh-accordion-column">
                <p className="seo-refresh-eyebrow">Explore ASE services</p>
                <h2>One team for the work that moves you forward.</h2>
                <div className="seo-refresh-accordion">
                  {serviceItems.map((item, index) => {
                    const expanded = openService === index;
                    const panelID = `seo-service-panel-${index}`;
                    return (
                      <article key={item.href} className={`seo-refresh-service-item${expanded ? " is-open" : ""}`}>
                        <h3>
                          <button
                            type="button"
                            aria-expanded={expanded}
                            aria-controls={panelID}
                            onClick={() => setOpenService(expanded ? -1 : index)}
                          >
                            <span>{item.title}</span>
                            <span className="seo-refresh-plus" aria-hidden="true">{expanded ? "−" : "+"}</span>
                          </button>
                        </h3>
                        {expanded && (
                          <div id={panelID} className="seo-refresh-service-description">
                            <p>{item.description}</p>
                            <a href={item.href}>Explore service <ArrowRightIcon aria-hidden="true" /></a>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
              <Reveal className="seo-refresh-services-art"><SeoGrowthArt /></Reveal>
            </div>

            <div className="seo-refresh-copy-block">
              <Reveal>
                <div>
                  <p className="seo-refresh-eyebrow">Search engine optimization</p>
                  <h2>Make your next customer’s search lead to you.</h2>
                  <p>
                    In a digital landscape where millions of searches happen
                    every second, appearing on the first page is more than an
                    advantage. SEO improves your website’s visibility,
                    authority and position in the organic results that matter
                    to your business.
                  </p>
                  <p>
                    At ASE Technologies, we go beyond simple keyword changes.
                    We combine technical precision with useful content and a
                    clear understanding of search intent. By improving your
                    site architecture, earning relevant authority and making
                    each page genuinely helpful, we help your business get
                    found and chosen.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100} className="seo-refresh-benefits">
                <div>
                  <span className="seo-refresh-benefit-icon"><GraphUpIcon aria-hidden="true" /></span>
                  <p className="seo-refresh-eyebrow">What better search makes possible</p>
                  <h3>Our SEO benefits</h3>
                  <p className="seo-refresh-benefits-intro">
                    We look beyond rankings and track the outcomes that matter
                    to your business.
                  </p>
                  <ul>
                    {benefits.map((benefit) => (
                      <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <AgentsSection
          className="agents-section-soft"
          {...requireService("search-engine-optimization").agents}
          href="/start-project.html"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
