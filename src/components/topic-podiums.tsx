import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  NavArrowRightIcon,
  ThreeStarsIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Glyph = "instagram" | "ads" | "meta" | "search" | "drive";

type Topic = {
  label: string;
  text: string;
  href: string;
  tint: string;
  glyph: Glyph;
};

/** The topics the agents read, one podium each. */
const topics: Topic[] = [
  {
    label: "Search Console",
    text: "Understand search performance.",
    href: "/search-engine-optimization.html",
    tint: "#4285F4",
    glyph: "search",
  },
  {
    label: "Instagram",
    text: "Grow your audience with smart insights.",
    href: "/social-media-marketing.html",
    tint: "#E1306C",
    glyph: "instagram",
  },
  {
    label: "Google Ads",
    text: "Run smarter campaigns with AI recommendations.",
    href: "/digital-marketing.html",
    tint: "#F9AB00",
    glyph: "ads",
  },
  {
    label: "Meta Ads",
    text: "Optimize your advertising spend.",
    href: "/digital-marketing.html",
    tint: "#0081FB",
    glyph: "meta",
  },
  {
    label: "Google Drive",
    text: "Organize and manage your assets.",
    href: "/content-marketing.html",
    tint: "#1EA362",
    glyph: "drive",
  },
];

/** The white tool mark that sits inside each sphere. */
function ToolGlyph({ glyph }: { glyph: Glyph }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-1/2"
      aria-hidden="true"
      focusable="false"
    >
      {glyph === "search" ? (
        <g fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round">
          <circle cx="10.8" cy="10.8" r="4.6" />
          <path d="M14.3 14.3 18.4 18.4" />
        </g>
      ) : null}
      {glyph === "instagram" ? (
        <g fill="none" stroke="#E1306C" strokeWidth="1.8">
          <rect x="5.5" y="5.5" width="13" height="13" rx="4" />
          <circle cx="12" cy="12" r="3.2" />
          <circle cx="16.4" cy="7.6" r="1.1" fill="#E1306C" stroke="none" />
        </g>
      ) : null}
      {glyph === "ads" ? (
        <g fill="#F9AB00">
          <path d="M12 4.4l6.4 12.8h-3.9L12 12.6l-2.5 4.6H5.6z" />
          <circle cx="12" cy="19.4" r="1.9" />
        </g>
      ) : null}
      {glyph === "meta" ? (
        <path
          d="M7.4 16.6c-2.5 0-4.5-2-4.5-4.5S4.9 7.6 7.4 7.6c3.3 0 4.2 3.7 8.4 3.7 2.5 0 4.5-2 4.5-4.5"
          fill="none"
          stroke="#0081FB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : null}
      {glyph === "drive" ? (
        <g fill="#1EA362">
          <path d="M12 5l5.7 10H6.3z" />
          <rect x="9.4" y="17.2" width="5.2" height="2.4" rx="1.2" />
        </g>
      ) : null}
    </svg>
  );
}

/** The gold rings that circle the featured sphere. */
function FeaturedRing() {
  return (
    <svg
      viewBox="0 0 220 130"
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[210%] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="110"
        cy="65"
        rx="102"
        ry="30"
        fill="none"
        stroke="#d9a406"
        strokeWidth="2.5"
        opacity="0.8"
        transform="rotate(-9 110 65)"
      />
      <ellipse
        cx="110"
        cy="65"
        rx="86"
        ry="23"
        fill="none"
        stroke="#f4c531"
        strokeWidth="2"
        opacity="0.55"
        transform="rotate(-4 110 65)"
      />
    </svg>
  );
}

/**
 * The topic podiums: every tool the agents read, on its own pedestal. The
 * featured topic sits centre stage under the gold rings; arrows and dots
 * move through the rest.
 */
export function TopicPodiums({ className }: { className?: string }) {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // The stage turns on its own, unless the visitor is reading or prefers
  // reduced motion.
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % topics.length),
      4500,
    );
    return () => window.clearInterval(timer);
  }, [paused, reduced]);

  // Order the podiums so the active one lands in the middle.
  const order = [-2, -1, 0, 1, 2].map(
    (offset) => topics[(active + offset + topics.length) % topics.length],
  );

  return (
    <section className={cn("podiums-section", className)}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-bright px-4 py-2 text-label-lg text-on-surface shadow-elevation-sm">
              <ThreeStarsIcon className="size-4 text-primary" aria-hidden="true" />
              AI-powered solutions
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-headline-lg text-on-surface md:text-[2.75rem] md:leading-[1.1]">
              Built for{" "}
              <span className="relative inline-block text-primary">
                growth.
                <svg
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/70"
                  viewBox="0 0 160 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M3 9 C 50 3, 110 3, 157 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </Reveal>
        </div>

        <div
          className="relative mt-12 px-12 md:px-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={() =>
              setActive((value) => (value - 1 + topics.length) % topics.length)
            }
            aria-label="Previous topic"
            className="absolute left-0 top-[38%] z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant bg-surface-bright text-on-surface shadow-elevation-sm transition-colors duration-200 hover:bg-surface-container-high"
          >
            <NavArrowRightIcon className="size-5 rotate-180" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setActive((value) => (value + 1) % topics.length)}
            aria-label="Next topic"
            className="absolute right-0 top-[38%] z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant bg-surface-bright text-on-surface shadow-elevation-sm transition-colors duration-200 hover:bg-surface-container-high"
          >
            <NavArrowRightIcon className="size-5" aria-hidden="true" />
          </button>

          <div className="flex items-start justify-center gap-3 sm:gap-5">
            {order.map((topic, slot) => {
              const featured = slot === 2;
              return (
                <div
                  key={`${topic.label}-${active}`}
                  className={cn(
                    "podium-in flex min-w-0 flex-col items-center",
                    featured ? "z-10 mx-2 sm:mx-4" : "mt-6 hidden sm:flex",
                  )}
                >
                  <div
                    className={cn(
                      "podium-float relative",
                      featured && "podium-float-late",
                    )}
                  >
                    {featured ? <FeaturedRing /> : null}
                    <div
                      className={cn(
                        "podium-sphere grid place-items-center",
                        featured ? "size-32 md:size-36" : "size-20 md:size-24",
                      )}
                      style={{ "--tint": topic.tint } as React.CSSProperties}
                    >
                      <div
                        className={cn(
                          "grid place-items-center rounded-full bg-white shadow-elevation-sm",
                          featured ? "size-14 md:size-16" : "size-10 md:size-12",
                        )}
                      >
                        <ToolGlyph glyph={topic.glyph} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "mt-5 rounded-2xl border bg-white text-center shadow-elevation-sm",
                      featured
                        ? "w-56 border-outline px-4 py-5 md:w-64"
                        : "w-40 border-outline-variant px-3 py-3.5 md:w-44",
                    )}
                  >
                    <h3
                      className={cn(
                        "text-on-surface",
                        featured ? "text-title-lg" : "text-title-md",
                      )}
                    >
                      {topic.label}
                    </h3>
                    <p className="mt-1.5 text-body-sm text-on-surface-variant">
                      {topic.text}
                    </p>
                    <a
                      href={topic.href}
                      className={cn(
                        "mt-3 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-label-md font-semibold text-on-surface transition-colors duration-200 hover:bg-surface-container",
                        featured ? "border-outline" : "border-outline-variant",
                      )}
                    >
                      Explore topic
                      <ArrowRightIcon className="size-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-9 flex justify-center gap-2.5">
          {topics.map((topic, index) => (
            <button
              key={topic.label}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${topic.label}`}
              className={cn(
                "size-2.5 rounded-full transition-all duration-300",
                index === active
                  ? "scale-125 bg-primary"
                  : "bg-outline-variant hover:bg-outline",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
