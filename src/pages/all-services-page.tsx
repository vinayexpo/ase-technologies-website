import type { ComponentType, SVGProps } from "react";
import {
  CartIcon,
  CodeIcon,
  EditPencilIcon,
  GlobeIcon,
  HealthcareIcon,
  MailIcon,
  SearchIcon,
  ThreeStarsIcon,
  WhatsappIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";

type ServiceIcon = ComponentType<SVGProps<SVGSVGElement>>;
type ServiceItem = { title: string; description: string; href: string; icon: ServiceIcon };
type ServiceGroup = { id: string; label: string; eyebrow: string; items: ServiceItem[] };

const serviceGroups: ServiceGroup[] = [
  {
    id: "digital-services",
    label: "Digital",
    eyebrow: "Digital services",
    items: [
      { title: "Search Engine Optimization", description: "Improve search visibility with technical SEO, useful content and strategies built around customer intent.", href: "/search-engine-optimization.html", icon: SearchIcon },
      { title: "Application Maintenance", description: "Keep business applications reliable, secure and up to date as your needs evolve.", href: "/saas-products.html", icon: CodeIcon },
      { title: "Marketplace Management", description: "Organize product listings, store operations and customer experience across online marketplaces.", href: "/saas-products.html", icon: CartIcon },
      { title: "Social Media Management", description: "Plan channels, publish consistently and respond to your community with a clear brand voice.", href: "/social-media-marketing.html", icon: ThreeStarsIcon },
    ],
  },
  {
    id: "marketing-services",
    label: "Marketing",
    eyebrow: "Marketing services",
    items: [
      { title: "Social Media Marketing", description: "Build an engaged audience with channel strategy, creative and ongoing community care.", href: "/social-media-marketing.html", icon: ThreeStarsIcon },
      { title: "Search Engine Marketing", description: "Reach high-intent customers through carefully managed paid search campaigns.", href: "/digital-marketing.html", icon: SearchIcon },
      { title: "Reputation Marketing", description: "Strengthen trust by monitoring feedback and supporting a consistent customer experience.", href: "/digital-marketing.html", icon: GlobeIcon },
      { title: "Ecommerce Marketing", description: "Connect product discovery, campaigns and conversion into a measurable growth plan.", href: "/digital-marketing.html", icon: CartIcon },
      { title: "WhatsApp Marketing", description: "Use helpful, permission-based conversations for updates, enquiries and customer support.", href: "/saas-products.html", icon: WhatsappIcon },
      { title: "Real Estate Marketing", description: "Attract prospective buyers and keep property enquiries moving toward a site visit.", href: "/saas-products.html", icon: HealthcareIcon },
      { title: "LinkedIn Marketing", description: "Build professional visibility and reach decision-makers with relevant content.", href: "/digital-marketing.html", icon: GlobeIcon },
      { title: "Email Marketing", description: "Send useful, well-targeted messages that nurture leads and support retention.", href: "/digital-marketing.html", icon: MailIcon },
      { title: "Local Business Marketing", description: "Help nearby customers find, trust and choose your business.", href: "/digital-marketing.html", icon: GlobeIcon },
      { title: "Content Marketing", description: "Create valuable articles, stories and resources that build authority over time.", href: "/content-marketing.html", icon: EditPencilIcon },
    ],
  },
  {
    id: "design-services",
    label: "Design",
    eyebrow: "Design services",
    items: [
      { title: "Packaging Design", description: "Make products stand out with packaging that balances clarity, identity and function.", href: "/graphic-designing.html", icon: CartIcon },
      { title: "Website Design & Development", description: "Create responsive, accessible websites shaped around your customers and business goals.", href: "/website-designing.html", icon: CodeIcon },
      { title: "Graphic Designing", description: "Build a consistent visual identity across brand, campaign and everyday business assets.", href: "/graphic-designing.html", icon: EditPencilIcon },
      { title: "Video Editing", description: "Turn raw footage into clear, polished stories for campaigns and social channels.", href: "/graphic-designing.html", icon: ThreeStarsIcon },
    ],
  },
  {
    id: "branding-services",
    label: "Branding",
    eyebrow: "Branding services",
    items: [
      { title: "Branding", description: "Define a distinctive position, voice and visual system your team can use consistently.", href: "/graphic-designing.html", icon: GlobeIcon },
    ],
  },
];

function ServicesHeroArt() {
  return (
    <svg className="all-services-hero-art" viewBox="0 0 360 240" role="img" aria-labelledby="all-services-art-title">
      <title id="all-services-art-title">Connected digital, marketing and design services</title>
      <path d="M48 170c-18-13-18-40 1-52 6-26 37-35 57-18 19-21 54-12 60 15 29-8 53 14 47 39 21 18 8 44-18 44H64c-7 0-12-8-16-28Z" fill="#fff2d2" />
      <path d="M54 166c31-13 49-4 70 3 20 7 39 4 73-12" fill="none" stroke="#e6ad37" strokeWidth="3" strokeLinecap="round" />
      <rect x="74" y="59" width="102" height="77" rx="17" fill="#fff" stroke="#e7dccb" strokeWidth="2" />
      <circle cx="99" cy="84" r="10" fill="#f4bd4b" />
      <path d="M119 82h37M119 95h27" stroke="#a79b88" strokeWidth="4" strokeLinecap="round" />
      <rect x="192" y="45" width="91" height="68" rx="16" fill="#1c1917" />
      <path d="M214 69h47M214 83h32" stroke="#fffaf1" strokeWidth="4" strokeLinecap="round" />
      <circle cx="250" cy="148" r="31" fill="#f4bd4b" />
      <path d="m236 149 9 9 19-21" fill="none" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="110" y="153" width="92" height="58" rx="14" fill="#fff" stroke="#e7dccb" strokeWidth="2" />
      <path d="M128 174h54M128 187h35" stroke="#b9ae9c" strokeWidth="4" strokeLinecap="round" />
      <circle cx="293" cy="189" r="7" fill="#dca72e" />
      <circle cx="311" cy="189" r="4" fill="#d8c9a9" />
    </svg>
  );
}

export function AllServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="/start-project.html" />
      <main className="all-services-page">
        <section className="all-services-hero">
          <Container>
            <div className="all-services-hero-grid">
              <Reveal><div>
                <p className="all-services-eyebrow">ASE Technologies / Services</p>
                <h1>Our <span>services.</span></h1>
                <p>One team to help you grow online, build useful digital products and make your brand easier to recognize.</p>
                <a href="/start-project.html" className="all-services-cta">Start a project <span aria-hidden="true">→</span></a>
              </div></Reveal>
              <Reveal delay={120}><ServicesHeroArt /></Reveal>
            </div>
          </Container>
        </section>

        <div className="all-services-directory">
          <Container>
            <div className="all-services-directory-grid">
              <nav className="all-services-category-nav" aria-label="Browse service categories">
                <p>Browse categories</p>
                {serviceGroups.map((group, index) => <a key={group.id} href={`#${group.id}`}><span>0{index + 1}</span>{group.label}<b>{String(group.items.length).padStart(2, "0")}</b></a>)}
                <a className="all-services-nav-cta" href="/start-project.html">Need help choosing? <span aria-hidden="true">↗</span></a>
              </nav>
              <div className="all-services-category-content">
                {serviceGroups.map((group, groupIndex) => (
                  <section className="all-services-group" id={group.id} key={group.id}>
                    <div className="all-services-group-heading"><div><p><span>0{groupIndex + 1}</span> / {group.eyebrow}</p><h2>{group.label} for every stage of growth</h2></div><span>{String(group.items.length).padStart(2, "0")} SERVICES</span></div>
                    <div className="all-services-card-grid">
                      {group.items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <Reveal key={item.title} delay={(index % 2) * 65} className="all-services-card-reveal">
                            <a className="all-services-card" href={item.href}>
                              <div className="all-services-card-top"><span className="all-services-card-icon"><Icon aria-hidden="true" /></span><span className="all-services-card-number">{String(index + 1).padStart(2, "0")}</span></div>
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <span className="all-services-card-link">Explore service <span aria-hidden="true">↗</span></span>
                            </a>
                          </Reveal>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
