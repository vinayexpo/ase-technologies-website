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
import { SocialPageArt } from "@/components/service-art";
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
  ["Website designing", "Responsive websites built around the people using them.", "/website-designing.html"],
  ["SEO & content writing", "Search strategy and useful content that compounds over time.", "/search-engine-optimization.html"],
  ["Web & application development", "Custom web and mobile tools shaped around your workflow.", "/saas-products.html"],
  ["Social & digital marketing", "Social, search and paid campaigns planned around business goals.", "/digital-marketing.html"],
  ["Graphic designing", "Brand systems and creative assets made to work everywhere.", "/graphic-designing.html"],
];

const benefits = [
  "Stronger brand visibility and recognition",
  "Reach audiences who are right for your business",
  "Direct feedback from real customers",
  "More engaged, loyal communities",
  "Better-targeted paid campaigns",
  "A consistent voice across channels",
  "More qualified visits to your website",
];

function SocialCampaignArt() {
  return (
    <svg className="smm-refresh-illustration" viewBox="0 0 400 330" role="img" aria-labelledby="smm-art-title">
      <title id="smm-art-title">Social content, audience conversations and campaign results</title>
      <defs>
        <linearGradient id="smm-post-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4bd4b" />
          <stop offset="1" stopColor="#dc7442" />
        </linearGradient>
      </defs>
      <rect x="30" y="40" width="270" height="248" rx="24" fill="#fff" stroke="#e8ddc8" strokeWidth="2" />
      <circle cx="62" cy="75" r="14" fill="#f4bd4b" />
      <path d="M56 76h12M62 70v12" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
      <path d="M88 70h110M88 80h68" stroke="#b5aa99" strokeWidth="5" strokeLinecap="round" />
      <rect x="52" y="105" width="226" height="119" rx="15" fill="url(#smm-post-gradient)" />
      <circle cx="216" cy="146" r="27" fill="#fff3d9" opacity=".9" />
      <path d="M151 200c16-37 31-44 48-24 10 12 17 16 35 9 13-5 27-4 44 5v34H52v-11c36 7 64 3 99-13Z" fill="#bc5f39" opacity=".75" />
      <path d="m64 240 11 11 20-21" stroke="#d98341" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M108 244h83M108 256h52" stroke="#bbb2a4" strokeWidth="5" strokeLinecap="round" />
      <rect x="228" y="232" width="50" height="25" rx="12.5" fill="#fff2d6" />
      <path d="M241 245h24" stroke="#9a6410" strokeWidth="4" strokeLinecap="round" />
      <rect x="235" y="25" width="132" height="72" rx="18" fill="#1c1917" />
      <path d="M259 49h60M259 64h39" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <circle cx="343" cy="50" r="11" fill="#f4bd4b" />
      <path d="m339 50 3 3 6-7" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="250" y="166" width="126" height="105" rx="19" fill="#fffaf1" stroke="#e8ddc8" strokeWidth="2" />
      <path d="M270 239v-17m20 17v-32m20 32v-25m20 25v-45" stroke="#d89b27" strokeWidth="9" strokeLinecap="round" />
      <path d="M270 250h70" stroke="#d6cbb8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="83" cy="29" r="5" fill="#d89b27" />
      <circle cx="97" cy="29" r="5" fill="#1c1917" opacity=".18" />
      <circle cx="111" cy="29" r="5" fill="#1c1917" opacity=".1" />
    </svg>
  );
}

export function SocialMediaPage() {
  const [openService, setOpenService] = useState(-1);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="/start-project.html" />
      <main className="smm-refresh-page">
        <section className="seo-refresh-hero">
          <Container>
            <div className="seo-refresh-hero-inner">
              <Reveal className="seo-refresh-hero-copy">
                <div>
                  <p className="seo-refresh-eyebrow">Social media marketing</p>
                  <h1>Social media, <span>with purpose.</span></h1>
                  <p className="seo-refresh-subtitle">
                    Empower your brand with strategic social media. Build a
                    recognizable voice, useful content and a community that
                    wants to hear from you.
                  </p>
                  <a href="/start-project.html" className="seo-refresh-button">
                    Start a project <ArrowRightIcon aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120} className="seo-refresh-hero-art">
                <SocialPageArt />
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
                <p className="seo-refresh-eyebrow">More from ASE</p>
                <h2>Connected services for a stronger digital presence.</h2>
                <div className="seo-refresh-accordion">
                  {serviceItems.map(([title, description, href], index) => {
                    const expanded = openService === index;
                    const panelID = `smm-service-panel-${index}`;
                    return (
                      <article key={href} className={`seo-refresh-service-item${expanded ? " is-open" : ""}`}>
                        <h3><button type="button" aria-expanded={expanded} aria-controls={panelID} onClick={() => setOpenService(expanded ? -1 : index)}><span>{title}</span><span className="seo-refresh-plus" aria-hidden="true">{expanded ? "−" : "+"}</span></button></h3>
                        {expanded && <div id={panelID} className="seo-refresh-service-description"><p>{description}</p><a href={href}>Explore service <ArrowRightIcon aria-hidden="true" /></a></div>}
                      </article>
                    );
                  })}
                </div>
              </div>
              <Reveal className="seo-refresh-services-art"><SocialCampaignArt /></Reveal>
            </div>

            <div className="smm-refresh-copy-block">
              <Reveal>
                <div>
                  <p className="seo-refresh-eyebrow">Social media marketing</p>
                  <h2>Turn attention into a community that grows with you.</h2>
                  <p>
                    In an era where digital presence shapes brand credibility,
                    <strong> social media marketing</strong> drives community
                    engagement and commercial growth. Across Facebook,
                    Instagram, LinkedIn and other relevant channels, we help
                    your brand show up with a voice that resonates with the
                    people you want to reach.
                  </p>
                  <p>
                    At ASE Technologies, we do more than publish posts. Our
                    approach combines creative storytelling with paid
                    advertising and thoughtful community management. We review
                    performance and audience signals to turn passive followers
                    into active, long-term customers.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100} className="seo-refresh-benefits">
                <div>
                  <span className="seo-refresh-benefit-icon"><GraphUpIcon aria-hidden="true" /></span>
                  <p className="seo-refresh-eyebrow">Built for meaningful growth</p>
                  <h3>Social media benefits</h3>
                  <p className="seo-refresh-benefits-intro">We use social connectivity to support measurable business outcomes.</p>
                  <ul>{benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}</ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <AgentsSection
          className="agents-section-soft"
          {...requireService("social-media-marketing").agents}
          href="/start-project.html"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
