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
import { WebPageArt } from "@/components/service-art";
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
  ["Website designing", "Responsive websites with clear journeys and accessible layouts.", "/website-designing.html"],
  ["SEO & content writing", "Technical foundations and useful content that helps customers find you.", "/search-engine-optimization.html"],
  ["Web & application development", "Custom websites, portals and applications built around your process.", "/saas-products.html"],
  ["Social & digital marketing", "Campaigns that bring the right audience to your new website.", "/digital-marketing.html"],
  ["Graphic designing", "A visual identity and assets that make your new site feel unmistakably yours.", "/graphic-designing.html"],
];

const benefits = [
  "A stronger and more credible online presence",
  "A smoother experience on every screen size",
  "Clearer paths from first visit to enquiry",
  "Accessible pages that welcome more visitors",
  "Fast loading and better search visibility",
  "Flexible content that your team can manage",
  "Higher-quality leads and conversions",
];

function WebsiteSystemArt() {
  return (
    <svg className="website-refresh-illustration" viewBox="0 0 400 330" role="img" aria-labelledby="website-art-title">
      <title id="website-art-title">Responsive website layouts across desktop, tablet and mobile</title>
      <rect x="24" y="52" width="276" height="190" rx="20" fill="#fff" stroke="#e8ddc8" strokeWidth="2" />
      <path d="M24 86h276" stroke="#e8ddc8" strokeWidth="2" />
      <circle cx="48" cy="69" r="5" fill="#f4bd4b" />
      <circle cx="65" cy="69" r="5" fill="#d8c9a9" />
      <circle cx="82" cy="69" r="5" fill="#d8c9a9" />
      <rect x="48" y="109" width="100" height="106" rx="12" fill="#fff1d5" />
      <path d="M62 130h68m-68 14h51" stroke="#a98e59" strokeWidth="5" strokeLinecap="round" />
      <rect x="62" y="164" width="44" height="17" rx="8.5" fill="#f4bd4b" />
      <rect x="165" y="109" width="111" height="12" rx="6" fill="#e8ddc8" />
      <rect x="165" y="132" width="88" height="8" rx="4" fill="#eee8dc" />
      <rect x="165" y="155" width="111" height="52" rx="10" fill="#f8f5ec" />
      <rect x="273" y="163" width="87" height="128" rx="17" fill="#1c1917" />
      <rect x="280" y="173" width="73" height="108" rx="11" fill="#fff" />
      <rect x="290" y="186" width="52" height="30" rx="7" fill="#fff1d5" />
      <path d="M290 229h47m-47 10h38" stroke="#c5baaa" strokeWidth="4" strokeLinecap="round" />
      <rect x="290" y="251" width="37" height="14" rx="7" fill="#f4bd4b" />
      <path d="M133 261h91m-74-19 8 19m48-19-8 19" fill="none" stroke="#c8bca7" strokeWidth="4" strokeLinecap="round" />
      <circle cx="335" cy="57" r="28" fill="#fff1d5" />
      <path d="m322 57 9 9 17-19" fill="none" stroke="#8a5b0c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M300 300h-91" stroke="#d9c9a6" strokeWidth="2" strokeDasharray="5 6" />
    </svg>
  );
}

export function WebsiteDesigningPage() {
  const [openService, setOpenService] = useState(-1);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="/start-project.html" />
      <main className="website-refresh-page">
        <section className="seo-refresh-hero">
          <Container>
            <div className="seo-refresh-hero-inner">
              <Reveal className="seo-refresh-hero-copy"><div>
                <p className="seo-refresh-eyebrow">Website designing</p>
                <h1>Websites made to <span>work beautifully.</span></h1>
                <p className="seo-refresh-subtitle">Build a clear, useful experience that helps visitors understand your offer and take the next step.</p>
                <a href="/start-project.html" className="seo-refresh-button">Start a project <ArrowRightIcon aria-hidden="true" /></a>
              </div></Reveal>
              <Reveal delay={120} className="seo-refresh-hero-art"><WebPageArt /></Reveal>
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
                <h2>Everything your digital presence needs to work together.</h2>
                <div className="seo-refresh-accordion">
                  {serviceItems.map(([title, description, href], index) => {
                    const expanded = openService === index;
                    const panelID = `website-service-panel-${index}`;
                    return <article key={href} className={`seo-refresh-service-item${expanded ? " is-open" : ""}`}><h3><button type="button" aria-expanded={expanded} aria-controls={panelID} onClick={() => setOpenService(expanded ? -1 : index)}><span>{title}</span><span className="seo-refresh-plus" aria-hidden="true">{expanded ? "−" : "+"}</span></button></h3>{expanded && <div id={panelID} className="seo-refresh-service-description"><p>{description}</p><a href={href}>Explore service <ArrowRightIcon aria-hidden="true" /></a></div>}</article>;
                  })}
                </div>
              </div>
              <Reveal className="seo-refresh-services-art"><WebsiteSystemArt /></Reveal>
            </div>

            <div className="seo-refresh-copy-block">
              <Reveal><div>
                <p className="seo-refresh-eyebrow">Website designing</p>
                <h2>Make your website your hardest-working business asset.</h2>
                <p>
                  A website is more than a digital placeholder; it is the
                  virtual front door to your business. At ASE Technologies,
                  design and development bring visual clarity together with
                  technical quality. We prioritize useful user experiences and
                  clear interfaces that turn visits into meaningful action.
                </p>
                <p>
                  From initial wireframes and planning through development,
                  launch and ongoing support, we build websites that are
                  responsive, secure, accessible and easy for your team to
                  maintain.
                </p>
              </div></Reveal>
              <Reveal delay={100} className="seo-refresh-benefits"><div>
                <span className="seo-refresh-benefit-icon"><GraphUpIcon aria-hidden="true" /></span>
                <p className="seo-refresh-eyebrow">Designed around outcomes</p>
                <h3>Website benefits</h3>
                <p className="seo-refresh-benefits-intro">A well-built site combines a strong first impression with dependable performance.</p>
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
