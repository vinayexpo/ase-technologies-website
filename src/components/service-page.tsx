import { AgentsSection } from "@/components/agents-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { RevealWords } from "@/components/reveal-words";
import { ServiceLeadForm } from "@/components/service-lead-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonClasses } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import type { ServicePageData, ServiceSection } from "@/content/services";

function ListSection({ section }: { section: Extract<ServiceSection, { kind: "list" }> }) {
  return (
    <section className="svc-block">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="section-title">{section.title}</h2>
            </Reveal>
            {section.intro ? (
              <p className="section-intro">{section.intro}</p>
            ) : null}
          </div>
          <div className="md:col-span-8">
            <ul className="svc-index">
              {section.items.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * 90}>
                    <div className="svc-index-row">
                      <span className="svc-index-mark">
                        {item.icon ?? (
                          <span className="svc-index-num">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        )}
                      </span>
                      <span className="svc-index-body">
                        <span className="svc-index-title">{item.title}</span>
                        <span className="svc-index-text">{item.text}</span>
                      </span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ChecklistSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "checklist" }>;
}) {
  return (
    <section className="svc-block svc-block-soft">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="section-title">{section.title}</h2>
            </Reveal>
            {section.intro ? (
              <p className="section-intro">{section.intro}</p>
            ) : null}
          </div>
          <div className="md:col-span-8">
            <ul className="svc-checks">
              {section.items.map((item, index) => (
                <li key={item}>
                  <Reveal delay={index * 70}>
                    <span className="svc-check">
                      <span className="svc-check-mark" aria-hidden="true" />
                      {item}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StepsSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "steps" }>;
}) {
  return (
    <section className="svc-block">
      <Container>
        <Reveal>
          <h2 className="section-title">{section.title}</h2>
        </Reveal>
        <ol className="svc-steps">
          {section.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 120} className="h-full">
                <div className="svc-step">
                  <span className="svc-step-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-title-lg text-on-surface">{item.title}</h3>
                  <p className="mt-2 text-body-md text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function MosaicSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "mosaic" }>;
}) {
  return (
    <section className="svc-block">
      <Container>
        <Reveal>
          <h2 className="section-title">{section.title}</h2>
        </Reveal>
        <ul className="svc-mosaic">
          {section.items.map((item, index) => (
            <li key={item.title} className={cn(index % 5 === 0 && "is-wide")}>
              <Reveal delay={(index % 3) * 100} className="h-full">
                <div className="svc-tile">
                  <h3 className="text-title-lg text-on-surface">{item.title}</h3>
                  <p className="mt-2 text-body-md text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function QuoteSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "quote" }>;
}) {
  return (
    <section className="svc-quote">
      <Container>
        <Reveal>
          <blockquote className="svc-quote-text">
            “{section.text}”
            <cite className="svc-quote-source">{section.source}</cite>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}

function SwatchesSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "swatches" }>;
}) {
  return (
    <section className="svc-block">
      <Container>
        <Reveal>
          <h2 className="section-title">{section.title}</h2>
        </Reveal>
        <ul className="svc-swatches">
          {section.items.map((item, index) => (
            <li key={item.name}>
              <Reveal delay={index * 90}>
                <div className="svc-swatch">
                  <span className="svc-swatch-chip" aria-hidden="true" />
                  <span className="svc-swatch-name">{item.name}</span>
                  <span className="svc-swatch-note">{item.value}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function TypeScaleSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "typeScale" }>;
}) {
  return (
    <section className="svc-block svc-block-soft">
      <Container>
        <Reveal>
          <h2 className="section-title">{section.title}</h2>
        </Reveal>
        <ul className="svc-type">
          {section.items.map((item, index) => (
            <li key={item.name} className={cn(`svc-type-row is-${index + 1}`)}>
              <Reveal delay={index * 80}>
                <span className="svc-type-name">{item.name}</span>
                <span className="svc-type-sample">{item.sample}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function CatalogueSection({
  section,
}: {
  section: Extract<ServiceSection, { kind: "catalogue" }>;
}) {
  return (
    <section className="svc-block">
      <Container>
        <Reveal>
          <h2 className="section-title">{section.title}</h2>
        </Reveal>
        <ul className="svc-catalogue">
          {section.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={(index % 3) * 90} className="h-full">
                <div className="tile">
                  {item.icon ? (
                    <span className="tile-icon">{item.icon}</span>
                  ) : null}
                  <h3 className="tile-title text-title-lg">{item.title}</h3>
                  <p className="tile-line">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function SectionView({ section }: { section: ServiceSection }) {
  switch (section.kind) {
    case "list":
      return <ListSection section={section} />;
    case "checklist":
      return <ChecklistSection section={section} />;
    case "steps":
      return <StepsSection section={section} />;
    case "mosaic":
      return <MosaicSection section={section} />;
    case "quote":
      return <QuoteSection section={section} />;
    case "swatches":
      return <SwatchesSection section={section} />;
    case "typeScale":
      return <TypeScaleSection section={section} />;
    case "catalogue":
      return <CatalogueSection section={section} />;
  }
}

/** A service sub-page. The theme decides the composition, the data the copy. */
export function ServicePage({ service }: { service: ServicePageData }) {
  return (
    <div className={cn("min-h-screen bg-background", `page-theme-${service.theme}`)}>
      <SiteHeader ctaHref="/start-project.html" />
      <main>
        <section className="svc-hero">
          <Container>
            <div className="svc-hero-grid">
              <div className="svc-hero-copy">
                <p className="section-eyebrow">{service.eyebrow}</p>
                <Reveal>
                  <h1 className="page-title">
                    <RevealWords text={service.title} />
                  </h1>
                </Reveal>
                <p className="page-lead">{service.lede}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#lead" className={buttonClasses({ size: "lg" })}>
                    {service.formHeading}
                  </a>
                  <a
                    href="#lead"
                    className="inline-flex min-h-14 items-center rounded-full border border-outline-variant px-6 text-body-md text-on-surface transition-colors duration-200 hover:bg-surface-container-high"
                  >
                    Talk to us first
                  </a>
                </div>
              </div>
              <div className="svc-hero-art">{service.visual}</div>
            </div>
          </Container>
        </section>

        {service.sections.map((section) => (
          <SectionView
            key={`${section.kind}-${"title" in section ? section.title : section.kind}`}
            section={section}
          />
        ))}

        <AgentsSection
          className="agents-section-soft"
          title={service.agents.title}
          body={service.agents.body}
          label={service.agents.label}
          insight={service.agents.insight}
          sourceIndex={service.agents.sourceIndex}
          href="#lead"
        />

        <section id="lead" className="svc-lead">
          <Container>
            <div className="svc-lead-grid">
              <div className="svc-lead-copy">
                <p className="section-eyebrow">Get started</p>
                <Reveal>
                  <h2 className="mt-4 text-headline-lg text-on-surface">
                    {service.formHeading}
                  </h2>
                </Reveal>
                <p className="mt-4 max-w-[34rem] text-body-lg text-on-surface-variant">
                  {service.formNote}
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {service.promises.map((promise) => (
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
                    needs={service.formNeeds}
                    serviceName={service.nav}
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
