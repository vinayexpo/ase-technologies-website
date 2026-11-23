import {
  ArrowRightIcon,
  GlobeIcon,
  GraphUpIcon,
  MegaphoneIcon,
  MessageIcon,
  SearchIcon,
  ThreeStarsIcon,
} from "@/components/icons";
import { HowItWorks } from "@/components/how-it-works";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServiceLeadForm } from "@/components/service-lead-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Ticker } from "@/components/ticker";
import { Container } from "@/components/ui/container";

const channels = [
  {
    icon: SearchIcon,
    title: "Search Engine Optimization",
    line: "Technical SEO and content that help customers find you.",
    tag: "Rank higher, get found",
  },
  {
    icon: MessageIcon,
    title: "Answer Engine Optimization",
    line: "Clear answers AI assistants can confidently cite.",
    tag: "Be the answer AI gives",
  },
  {
    icon: GlobeIcon,
    title: "Generative Engine Optimization",
    line: "Structured content that helps generative engines cite you.",
    tag: "Be the source AI cites",
  },
  {
    icon: ThreeStarsIcon,
    title: "Social Media Marketing",
    line: "Useful content that builds community and conversation.",
    tag: "Plan, post and grow",
  },
  {
    icon: MegaphoneIcon,
    title: "Meta Ads",
    line: "Creative-led ads for Facebook and Instagram.",
    tag: "Facebook and Instagram",
  },
  {
    icon: GraphUpIcon,
    title: "Google Ads",
    line: "Search and display managed to your agreed cost per enquiry.",
    tag: "Search and display",
  },
];

const included = [
  {
    title: "Audit",
    line: "Site, tracking and content reviewed before we change a thing. You get the findings whether you hire us or not.",
  },
  {
    title: "Plan",
    line: "A channel plan with budget, owners and the number each channel is expected to move.",
  },
  {
    title: "Creative",
    line: "Copy, design and campaign builds produced in-house, every month, on a schedule you can see.",
  },
  {
    title: "Report",
    line: "One dashboard, plain language, and a call the moment something needs a decision.",
  },
];

const subPages = [
  {
    href: "/search-engine-optimization.html",
    title: "Search engine optimization",
    line: "Technical foundations, content for intent, authority earned slowly.",
  },
  {
    href: "/social-media-marketing.html",
    title: "Social media marketing",
    line: "Content, community and paid social run weekly, in your voice.",
  },
  {
    href: "/content-marketing.html",
    title: "Content marketing",
    line: "An editorial plan built around what only you can say.",
  },
];

export function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="/start-project.html" />
      <main>
        <PageHero
          eyebrow="Digital marketing"
          title="Marketing that finds customers"
          lead="A creative team and AI marketing agents running search, social and paid media for you — planned by people, reported on outcomes, and measured on the only number that matters."
        />

        <div className="pb-8 md:pb-10">
          <Ticker items={channels.map((channel) => channel.title)} />
        </div>

        <section id="channels" className="digital-channels scroll-mt-24">
          <Container>
            <header className="digital-channel-header">
              <div>
                <p className="section-eyebrow">What we run</p>
                <Reveal>
                  <h2>Every channel, one team.</h2>
                </Reveal>
              </div>
              <p className="digital-channel-intro">
                One connected team plans, runs and improves every part of your
                digital marketing.
              </p>
            </header>

            <ul className="digital-channel-grid">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.title}>
                    <Reveal
                      delay={index * 80}
                      className="digital-channel-reveal"
                    >
                      <a href="#lead" className="digital-channel-card">
                        <span className="digital-channel-card-head">
                          <span className="digital-channel-icon">
                            <Icon className="size-5" aria-hidden="true" />
                          </span>
                          <span className="digital-channel-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </span>
                        <span className="digital-channel-copy">
                          <span className="digital-channel-title">
                            {channel.title}
                          </span>
                          <span className="digital-channel-line">
                            {channel.line}
                          </span>
                        </span>
                        <span className="digital-channel-card-footer">
                          <span className="digital-channel-action-label">
                            {channel.tag}
                          </span>
                          <span className="digital-channel-arrow">
                            <ArrowRightIcon aria-hidden="true" />
                          </span>
                        </span>
                      </a>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        <section className="bg-surface-container-low py-16 md:py-24">
          <Container>
            <p className="section-eyebrow">Included</p>
            <Reveal>
              <h2 className="mt-5 max-w-[20ch] text-headline-lg text-on-surface">
                What you actually get
              </h2>
            </Reveal>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {included.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * 100} className="h-full">
                    <div className="tile">
                      <h3 className="tile-title text-title-lg">{item.title}</h3>
                      <p className="tile-line">{item.line}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="svc-block svc-block-soft">
          <Container>
            <p className="section-eyebrow">Go deeper</p>
            <Reveal>
              <h2 className="mt-5 max-w-[20ch] text-headline-lg text-on-surface">
                One service, three pages
              </h2>
            </Reveal>

            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {subPages.map((page) => (
                <li key={page.href}>
                  <Reveal delay={0} className="h-full">
                    <a href={page.href} className="tile h-full">
                      <span className="tile-title text-title-lg">
                        {page.title}
                      </span>
                      <span className="tile-line">{page.line}</span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section id="lead" className="svc-lead">
          <Container>
            <div className="svc-lead-grid">
              <div className="svc-lead-copy">
                <p className="section-eyebrow">Get started</p>
                <Reveal>
                  <h2 className="mt-4 text-headline-lg text-on-surface">
                    Tell us what you need shipped
                  </h2>
                </Reveal>
                <p className="mt-4 max-w-[34rem] text-body-lg text-on-surface-variant">
                  Marketing, software, or both. Tell us the goal and we will
                  come back with the channels, the scope and what it takes.
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {[
                    "A reply within one business day",
                    "An honest view on what will work",
                    "No retainer talk before we have scoped it",
                  ].map((promise) => (
                    <li key={promise} className="flex items-start gap-3">
                      <span className="svc-check-mark" aria-hidden="true" />
                      <span className="text-body-md text-on-surface-variant">
                        {promise}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Reveal delay={120} className="h-full">
                <div className="svc-lead-card">
                  <ServiceLeadForm
                    serviceName="digital marketing"
                    needs={[
                      "SEO",
                      "Social media",
                      "Content marketing",
                      "Paid ads",
                      "All of it",
                      "Not sure yet",
                    ]}
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <HowItWorks />
      </main>
      <SiteFooter />
    </div>
  );
}
