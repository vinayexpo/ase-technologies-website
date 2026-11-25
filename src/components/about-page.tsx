import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const stats = [
  { value: "5+", label: "Years in business" },
  { value: "50+", label: "Clients served" },
  { value: "100+", label: "Projects delivered" },
  { value: "12", label: "Team members" },
];

const values = [
  {
    title: "Build to last",
    description: "We ship clean, maintainable code that you own outright — no black boxes, no lock-in.",
  },
  {
    title: "Measure first",
    description: "Every decision starts with data and a clear goal, not assumptions.",
  },
  {
    title: "Plain language",
    description: "We explain what we're doing and why, in terms you can actually use.",
  },
  {
    title: "Long-term partners",
    description: "We're here for the next campaign and the one after that, not just the launch.",
  },
];

export function AboutPage() {
  return (
    <div className="about-page min-h-screen bg-background text-on-surface">
      <SiteHeader ctaHref="/about.html" />
      <main>
        {/* Hero */}
        <section className="about-hero relative isolate overflow-hidden py-28 md:py-44 bg-white">
          <div className="absolute inset-0 -z-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-fixed-dim to-transparent" />
          <div className="absolute top-[-15%] left-[-8%] -z-10 size-[700px] rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute bottom-[-15%] right-[-8%] -z-10 size-[800px] rounded-full bg-primary/10 blur-[160px]" />
          <div className="absolute top-1/3 left-1/2 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-8 about-reveal about-delay-1">
                <span className="size-2 rounded-full bg-amber-600" aria-hidden="true" />
                About Us
              </span>
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight text-ink mb-6 about-reveal about-delay-2">
                Simple digital <span className="text-amber-600">work that works.</span>
              </h1>
              <p className="text-base md:text-lg leading-8 text-muted mb-12 max-w-[38rem] mx-auto about-reveal about-delay-3">
                We help local businesses grow online — websites that perform,
                campaigns that convert, and software you fully own.
              </p>
              <div className="flex flex-nowrap items-center justify-center gap-3 about-reveal about-delay-4">
                <a
                  href="/start-project.html"
                  className="inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-amber-600 px-7 py-3 text-sm font-bold text-on-primary transition-colors duration-300 hover:bg-amber-700 hover:scale-[1.02]"
                >
                  Start a project
                </a>
                <a
                  href="/start-project.html"
                  aria-label="Start a project"
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-on-primary transition-colors duration-300 hover:bg-amber-700 hover:scale-[1.02]"
                >
                  <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="gallery-stats py-20 border-y border-border bg-white">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <Reveal key={stat.label} className="gallery-item-wrap">
                  <div className="text-center">
                    <p className="text-headline-lg font-display font-semibold text-ink">{stat.value}</p>
                    <p className="mt-2 text-sm text-muted">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Story */}
        <section className="gallery-grid-section py-20 md:py-32 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal className="gallery-item-wrap">
                <div className="space-y-6">
                  <h2 className="text-headline-lg font-display font-semibold leading-[1.02] tracking-tight text-ink">
                    Our story
                  </h2>
                  <p className="text-lg leading-8 text-muted">
                    ASE Technologies started with a simple idea: digital work should be
                    straightforward, honest, and owned by the people who pay for it.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-muted">
                    We began by helping local businesses get found online. Today we build
                    websites, run marketing campaigns, and ship custom software — always
                    with clear scope, clear pricing, and code you fully own.
                  </p>
                </div>
              </Reveal>
              <Reveal className="gallery-item-wrap">
                <div className="relative h-[400px] rounded-2xl bg-surface-container-low overflow-hidden border border-border">
                  <img
                    src="/images/about-story-team.svg"
                    alt="AI-generated illustration of a creative team working together in a bright office"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="gallery-grid-section py-20 md:py-32 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-headline-lg font-display font-semibold leading-[1.02] tracking-tight text-ink">
                How we work
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                The principles behind every project we take on.
              </p>
            </div>
            <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} className="gallery-item-wrap">
                  <article className="h-full rounded-2xl border border-border bg-surface-bright p-8 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-6">
                      <span className="font-bold">0{index + 1}</span>
                    </div>
                    <h3 className="text-title-lg font-medium text-ink mb-3">{value.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

      </main>
      <SiteFooter />
      <style>{`
        .about-page {
          --gallery-bg: var(--color-background);
          --gallery-ink: var(--color-on-surface);
          --gallery-muted: var(--color-on-surface-variant);
          --gallery-border: var(--color-outline-variant);
          --gallery-card: var(--color-surface-bright);
        }
        .about-page .bg-white { background-color: var(--gallery-bg); }
        .about-page .text-ink { color: var(--gallery-ink); }
        .about-page .text-muted { color: var(--gallery-muted); }
        .about-page .bg-amber-100,
        .about-page .bg-amber-50 { background-color: var(--color-primary-container); }
        .about-page .bg-amber-600 { background-color: var(--color-primary); }
        .about-page .text-amber-600 { color: var(--color-secondary); }
        .about-page .text-on-primary { color: var(--color-on-primary); }
        .about-page .border-amber-200 { border-color: var(--color-primary-fixed-dim); }
        .about-page .hover\\:bg-amber-700:hover { background-color: var(--color-inverse-primary); }
        .about-page .hover\\:text-amber-600:hover { color: var(--color-secondary); }

        /* Hero animations */
        @keyframes about-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .about-reveal {
          opacity: 0;
          animation: about-fade-up 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .about-delay-1 { animation-delay: 100ms; }
        .about-delay-2 { animation-delay: 200ms; }
        .about-delay-3 { animation-delay: 300ms; }
        .about-delay-4 { animation-delay: 400ms; }
        @media (prefers-reduced-motion: reduce) {
          .about-reveal {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
