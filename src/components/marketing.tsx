import {
  GlobeIcon,
  GraphUpIcon,
  MegaphoneIcon,
  MessageIcon,
  SearchIcon,
  ThreeStarsIcon,
} from "@/components/icons";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { RevealWords } from "@/components/reveal-words";
import { Ticker } from "@/components/ticker";
import { Container } from "@/components/ui/container";

const services = [
  {
    icon: SearchIcon,
    title: "Search Engine Optimization",
    line: "Be found on the searches that matter.",
    href: "/search-engine-optimization.html",
  },
  {
    icon: MessageIcon,
    title: "Answer Engine Optimization",
    line: "Win the spot AI reads first.",
    href: "/digital-marketing.html",
  },
  {
    icon: GlobeIcon,
    title: "Generative Engine Optimization",
    line: "Get cited where AI writes.",
    href: "/digital-marketing.html",
  },
  {
    icon: ThreeStarsIcon,
    title: "Social Media Marketing",
    line: "Build a channel that talks back.",
    href: "/social-media-marketing.html",
  },
  {
    icon: MegaphoneIcon,
    title: "Meta Ads",
    line: "Facebook and Instagram, well aimed.",
    href: "/digital-marketing.html",
  },
  {
    icon: GraphUpIcon,
    title: "Google Ads",
    line: "Show up while intent is live.",
    href: "/digital-marketing.html",
  },
];

export function Marketing() {
  return (
    <section id="marketing" className="scroll-mt-24 overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="section-eyebrow">How we market for you</p>
            <Reveal>
              <h2 className="mt-5 text-headline-lg text-on-surface">
                <RevealWords text="Six channels, one scorecard" />
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:self-end">
            <p className="max-w-[30rem] text-body-lg text-on-surface-variant">
              We run the whole mix for you, then hold every part of it to the
              same measure: customers you can name, not impressions you can
              quote.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <Ticker items={services.map((service) => service.title)} />
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li key={service.title}>
                <Reveal delay={(index % 3) * 110} className="h-full">
                  <a href={service.href} className="tile">
                    <span className="tile-icon">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="tile-title">{service.title}</h3>
                    <p className="tile-line">{service.line}</p>
                    <span className="tile-arrow" aria-hidden="true">
                      <ArrowRightIcon className="size-4" />
                    </span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
