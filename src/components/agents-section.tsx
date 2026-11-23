import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Glyph = "instagram" | "ads" | "meta" | "search" | "drive";

type Source = {
  label: string;
  tint: string;
  glyph: Glyph;
};

/** The tools ASE Technologies connects — one per service we run. */
const sources: Source[] = [
  { label: "Search Console", tint: "#1A73E8", glyph: "search" },
  { label: "Instagram", tint: "#E1306C", glyph: "instagram" },
  { label: "Google Ads", tint: "#FBBC04", glyph: "ads" },
  { label: "Meta Ads", tint: "#0668E1", glyph: "meta" },
  { label: "Google Drive", tint: "#0F9D58", glyph: "drive" },
];

const CYCLE_MS = 3600;
const PULSE_MS = 900;

/** The real brand marks people already know. */
function BrandIcon({ glyph }: { glyph: Glyph }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {glyph === "search" ? (
        <>
          <path
            fill="#4285F4"
            d="M21.6 12.2c0-.7-.06-1.36-.17-2H12v3.79h5.36a4.6 4.6 0 0 1-1.99 3.01v2.5h3.22c1.88-1.73 3.01-4.29 3.01-7.3z"
          />
          <path
            fill="#34A853"
            d="M12 22c2.7 0 4.96-.9 6.6-2.44l-3.22-2.5c-.9.6-2.04.96-3.38.96a5.94 5.94 0 0 1-5.58-4.1H3.06v2.6A10 10 0 0 0 12 22z"
          />
          <path
            fill="#FBBC05"
            d="M6.42 13.9a6 6 0 0 1 0-3.84V7.46H3.06a10 10 0 0 0 0 9.04l3.36-2.6z"
          />
          <path
            fill="#EA4335"
            d="M12 5.98c1.47 0 2.79.5 3.83 1.5l2.85-2.85A9.96 9.96 0 0 0 3.06 7.46l3.36 2.6A5.94 5.94 0 0 1 12 5.98z"
          />
        </>
      ) : null}
      {glyph === "instagram" ? (
        <g fill="none" stroke="#E1306C" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5.4" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.3" cy="6.7" r="1.3" fill="#E1306C" stroke="none" />
        </g>
      ) : null}
      {glyph === "ads" ? (
        <g fill="none" strokeLinecap="round" strokeWidth="3.4">
          <path d="M6.2 20.6 11.2 6.2" stroke="#4285F4" />
          <path d="M17.8 20.6 12.8 6.2" stroke="#34A853" />
          <path d="M8.6 16.4l4.1-7.1" stroke="#FBBC04" />
        </g>
      ) : null}
      {glyph === "meta" ? (
        <path
          d="M3 14.5c0-4.3 2.2-7.8 5.1-7.8 4.1 0 5.6 10.6 9 10.6 2.4 0 3.9-2.5 3.9-5.5s-1.5-5.1-3.6-5.1c-3.6 0-5.7 10.6-9.7 10.6-2.7 0-4.7-2.5-4.7-5.5"
          fill="none"
          stroke="#0081FB"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
      {glyph === "drive" ? (
        <>
          <path
            fill="#00832D"
            d="M7.71 3.5 1.15 15 4.58 21 11.13 9.5 7.71 3.5z"
          />
          <path
            fill="#FFBA00"
            d="M8.58 2h6.84l6.86 12h-6.85L8.58 2z"
          />
          <path
            fill="#2684FC"
            d="m9.73 15-3.43 6h13.12l3.43-6H9.73z"
          />
        </>
      ) : null}
    </svg>
  );
}

/** The avatar: a stack of campaign cards, gently riffling. */
function AgentAvatar() {
  return (
    <svg
      viewBox="0 0 44 44"
      className="size-11 shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="44" height="44" rx="12" fill="#f3f1ea" />
      {/* Three stacked cards, floating one after another. */}
      <rect
        className="avatar-card avatar-card-3"
        x="14"
        y="18"
        width="22"
        height="17"
        rx="4"
        fill="#E1306C"
        opacity="0.45"
      />
      <rect
        className="avatar-card avatar-card-2"
        x="11"
        y="14"
        width="22"
        height="17"
        rx="4"
        fill="#1A73E8"
        opacity="0.7"
      />
      <rect
        className="avatar-card avatar-card-1"
        x="8"
        y="10"
        width="22"
        height="17"
        rx="4"
        fill="#fbc91b"
        stroke="#e3b400"
        strokeWidth="1"
      />
      {/* The spark mark on the top card. */}
      <path
        d="M19 14.5 C19.9 18.4 21.4 19.9 25.3 20.8 C21.4 21.7 19.9 23.2 19 27.1 C18.1 23.2 16.6 21.7 12.7 20.8 C16.6 19.9 18.1 18.4 19 14.5 Z"
        fill="#1b2444"
      />
    </svg>
  );
}

/**
 * The live report: a clean card where each connected tool gets a row, the
 * agent scans one at a time, and the finding writes itself in below.
 */
export function AgentsSection({
  eyebrow = "ASE Technologies agents",
  title = "Agents read it all.",
  body = "ASE Technologies connects the tools you already run — search, ads, social and your CRM — into a single source of truth. Agents read it continuously, then surface the decisions buried inside your numbers.",
  label = "ASE Marketing Brain",
  insight = {
    title: "Track website performance.",
    body: "See how your site appears in Google Search, fix issues and improve traffic.",
  },
  insights,
  sourceIndex,
  href = "/digital-marketing.html",
  className,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  label?: string;
  insight?: { title: string; body: string };
  insights?: { title: string; body: string }[];
  sourceIndex?: number;
  href?: string;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [running, setRunning] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedBody, setTypedBody] = useState("");
  const frameRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const typedKey = useRef("");

  const cards = insights && insights.length > 0 ? insights : [insight];
  const card = cards[Math.min(active, cards.length - 1)];
  const source = sources[active];
  const done = typedBody.length > 0 && typedBody === card.body;

  // The report only runs while the card is on screen.
  useEffect(() => {
    const element = frameRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setRunning(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // The scan starts the moment the card is first seen.
  useEffect(() => {
    if (!running || started.current) return;
    started.current = true;
    setActive(sourceIndex ?? 0);
    setCycle((value) => value + 1);
  }, [running, sourceIndex]);

  // The agent moves to the next source every few seconds — one after one,
  // through all five, forever.
  useEffect(() => {
    if (!running || reduced) return;
    const timer = window.setInterval(
      () => {
        setActive((value) => (value + 1) % sources.length);
        setCycle((value) => value + 1);
      },
      CYCLE_MS,
    );
    return () => window.clearInterval(timer);
  }, [running, reduced]);

  // When a scan lands, the finding writes itself out.
  useEffect(() => {
    if (!running) return;

    const key = `${active}:${card.title}:${card.body}`;
    if (typedKey.current === key) return;
    typedKey.current = key;

    const timers: number[] = [];
    const clear = () => timers.forEach((t) => window.clearTimeout(t));

    if (reduced) {
      setTypedTitle(card.title);
      setTypedBody(card.body);
      return clear;
    }

    setTypedTitle("");
    setTypedBody("");

    let delay = PULSE_MS;
    for (let i = 1; i <= card.title.length; i++) {
      const end = i;
      timers.push(
        window.setTimeout(() => setTypedTitle(card.title.slice(0, end)), delay),
      );
      delay += 17;
    }
    delay += 160;
    for (let i = 1; i <= card.body.length; i++) {
      const end = i;
      timers.push(
        window.setTimeout(() => setTypedBody(card.body.slice(0, end)), delay),
      );
      delay += 11;
    }
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, reduced, active, cycle]);

  return (
    <section id="agents" className={cn("agents-section", className)}>
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="mt-5 text-headline-lg text-on-surface">{title}</h2>
            <p className="mt-6 max-w-[34rem] text-body-lg text-on-surface-variant">
              {body}
            </p>
            <a
              href={href}
              className="group mt-8 flex items-center gap-4 rounded-2xl border border-outline-variant bg-surface-bright p-4 pr-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevation-md"
            >
              <AgentAvatar />
              <span className="flex min-w-0 flex-col">
                <span className="text-title-lg text-on-surface">{label}</span>
                <span className="mt-0.5 flex items-center gap-2 text-label-md text-on-surface-variant">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0F9D58] opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#0F9D58]" />
                  </span>
                  Live insights from your connected tools
                </span>
              </span>
              <span className="ml-auto flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon className="size-5" aria-hidden="true" />
              </span>
            </a>
          </div>

          <div ref={frameRef}>
            <Reveal className="agents-frame">
              <div className="feed-card">
                <header className="feed-head">
                  <span
                    className="feed-agent-dot"
                    style={{ background: source.tint }}
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="feed-agent-name">{label}</span>
                    <span className="feed-agent-sub">
                      watching {sources.length} sources · just now
                    </span>
                  </span>
                </header>

                {/* Every source on the board, one lit at a time. */}
                <ul className="feed-rows">
                  {sources.map((item, index) => {
                    const isActive = index === active;
                    return (
                      <li
                        key={item.label}
                        className={cn(
                          "feed-row",
                          isActive && "is-active",
                          isActive && done && "is-done",
                        )}
                        style={
                          {
                            "--tint": item.tint,
                            "--i": index,
                          } as CSSProperties
                        }
                      >
                        <span className="feed-row-bar" aria-hidden="true" />
                        <span className="feed-row-icon" aria-hidden="true">
                          <BrandIcon glyph={item.glyph} />
                        </span>
                        <span className="feed-row-label">{item.label}</span>
                        <span className="feed-row-status">
                          {isActive ? (
                            done ? (
                              <CheckIcon className="feed-check size-4" aria-hidden="true" />
                            ) : (
                              <span className="feed-dots" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                              </span>
                            )
                          ) : (
                            <CheckIcon
                              className="feed-check feed-check-muted size-4"
                              aria-hidden="true"
                            />
                          )}
                          <span>
                            {isActive ? (done ? "flagged" : "scanning") : "connected"}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* The finding, written in as it arrives. */}
                <div
                  key={`callout-${active}-${cycle === 0 ? 0 : 1}`}
                  className="feed-callout"
                  style={{ "--tint": source.tint } as CSSProperties}
                >
                  <span className="feed-callout-badge">
                    <span className="feed-callout-mark" aria-hidden="true">
                      <BrandIcon glyph={source.glyph} />
                    </span>
                    {source.label}
                  </span>
                  <p className="feed-callout-title">
                    {typedTitle}
                    {!done && typedBody.length === 0 ? (
                      <span className="feed-caret" aria-hidden="true" />
                    ) : null}
                  </p>
                  <p className="feed-callout-body">
                    {typedBody}
                    {!done && typedBody.length > 0 ? (
                      <span className="feed-caret" aria-hidden="true" />
                    ) : null}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
