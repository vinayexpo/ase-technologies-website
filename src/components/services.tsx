import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { RevealWords } from "@/components/reveal-words";
import { Container } from "@/components/ui/container";

const services = [
  {
    number: "01",
    title: "Digital marketing",
    line: "Search, ads, social and content, run for you.",
    href: "/digital-marketing.html",
    action: "See the services",
  },
  {
    number: "02",
    title: "SaaS applications",
    line: "Products, portals and tools, built to fit.",
    href: "/saas-products.html",
    action: "See the products",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="section-eyebrow">What we do</p>
            <Reveal>
              <h2 className="mt-5 text-headline-lg text-on-surface">
                <RevealWords text="Grow it, build it" />
              </h2>
            </Reveal>
            <p className="mt-6 max-w-[34rem] text-body-lg text-on-surface-variant">
              Most companies need both halves pulling together — the marketing
              that brings people in, and the software that makes them stay. Take
              one track, or hand us the lot.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="svc-list">
              {services.map((service, index) => (
                <li key={service.title}>
                  <Reveal delay={index * 140}>
                    <a href={service.href} className="svc-row">
                      <span className="svc-number">{service.number}</span>
                      <span className="svc-body">
                        <span className="svc-title">{service.title}</span>
                        <span className="svc-line">{service.line}</span>
                      </span>
                      <span className="svc-action">
                        {service.action}
                        <ArrowRightIcon className="size-4" aria-hidden="true" />
                      </span>
                    </a>
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
