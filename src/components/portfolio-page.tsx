import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const clients = [
  { name: "Green School", image: "/images/11563626209.png" },
  { name: "Nextgen CBSE School", image: "/images/11650348439.png" },
  { name: "Akarsh Hospitals", image: "/images/AKARSH-HOSPITALS-final-logo.png" },
  { name: "ASE Infrastructure", image: "/images/ASE-Infra-Logo.png" },
  { name: "Green School", image: "/images/brand-1-12.jpg" },
  { name: "Nextgen", image: "/images/brand-1-16.jpg" },
  { name: "Akarsh Hospitals", image: "/images/brand-1-17.jpg" },
  { name: "ASE Infrastructure", image: "/images/brand-1-18.jpg" },
  { name: "Little Ivy's", image: "/images/brand-1-20.jpg" },
  { name: "GaloX", image: "/images/brand-1-21.jpeg" },
  { name: "Jewel Park", image: "/images/brand-1-23.jpg" },
  { name: "Vasave Agro", image: "/images/brand-1-24.jpeg" },
  { name: "Brand Logo", image: "/images/dance-9-2048x2048.png" },
  { name: "EATERS", image: "/images/Eaters-Stop-New-logo-1-2_page-0001-2048x649.jpg" },
  { name: "EG Logo", image: "/images/EG_Logo-side.png" },
  { name: "Eswari Capital", image: "/images/eg-capital-logo-1.png" },
  { name: "Innovation", image: "/images/images-e1722517219240-1.jpg" },
  { name: "Lions Clubs International", image: "/images/Lions_Clubs_International_logo.svg.png" },
  { name: "Brand Logo", image: "/images/logo.jpg" },
  { name: "Brand Logo", image: "/images/logo.png" },
  { name: "Brand Logo", image: "/images/LOGO-1.jpg" },
  { name: "Eswari Group", image: "/images/logo-2.jpg" },
  { name: "Optical Plaza", image: "/images/logo2.png" },
  { name: "TKC", image: "/images/TKC.jpg" },
  { name: "MaNaS Dental Care", image: "/images/Untitled-1 - 21-11-2026 15-06-41.png" },
  { name: "Pencil in Book", image: "/images/Untitled-design-1.jpg" },
  { name: "Cosmic House", image: "/images/Untitled-design-50.png" },
  { name: "Free Creatives", image: "/images/Untitled-design-53.png" },
  { name: "Pavni Interiors", image: "/images/WhatsApp-Image-2024-09-03-at-10.47.02.jpeg" },
  { name: "Pavni Interiors", image: "/images/WhatsApp-Image-2024-09-16-at-16.47.07.jpeg" },
  { name: "Pavni Interiors", image: "/images/WhatsApp-Image-2024-09-19-at-12.52.01.jpeg" },
  { name: "One Town Medi Zone", image: "/images/WhatsApp-Image-2026-02-11-at-10.54.12-AM.jpeg" },
  { name: "Organic & School", image: "/images/WhatsApp-Image-2026-02-11-at-10.54.12-AM-1.jpeg" },
  { name: "Kongara Conventions", image: "/images/WhatsApp-Image-2026-02-11-at-10.56.47-AM.jpeg" },
  { name: "Hotel Limperia", image: "/images/WhatsApp-Image-2026-02-11-at-10.57.55-AM.jpeg" },
  { name: "Jrati Photography", image: "/images/WhatsApp-Image-2026-02-11-at-12.45.42-PM.jpeg" },
];

const smallerClientLogos = new Set([
  "/images/brand-1-23.jpg",
  "/images/EG_Logo-side.png",
  "/images/logo.jpg",
  "/images/logo.png",
  "/images/logo2.png",
]);

const largerClientLogos = new Set([
  "/images/brand-1-20.jpg",
  "/images/dance-9-2048x2048.png",
  "/images/images-e1722517219240-1.jpg",
  "/images/LOGO-1.jpg",
  "/images/brand-1-21.jpeg",
]);

const projects = [
  {
    id: "1",
    title: "Eaters Stop",
    category: "Web Design",
    image: "/images/frontpage/screencapture-eatersstop-2026-02-12-09_45_15.png",
  },
  {
    id: "2",
    title: "Hotel Imperia",
    category: "Web Design",
    image: "/images/frontpage/screencapture-hotelimperia-in-2026-02-11-10_52_53.png",
  },
  {
    id: "3",
    title: "Kongara Conventions",
    category: "Web Design",
    image: "/images/frontpage/screencapture-hotelimperia-in-convention-hall-2026-02-11-10_53_27.png",
  },
  {
    id: "4",
    title: "Expert in Plastic",
    category: "Web Design",
    image: "/images/frontpage/project-one-img-1_1.jpg",
  },
  {
    id: "5",
    title: "Improve Skills",
    category: "Web Design",
    image: "/images/frontpage/project-one-img-1_11.jpg",
  },
  {
    id: "6",
    title: "Residential Tower",
    category: "Web Design",
    image: "/images/frontpage/project-one-img-3_3.jpg",
  },
  {
    id: "7",
    title: "Stay at Home in Peace",
    category: "Web Design",
    image: "/images/frontpage/project-one-img-4_4.jpg",
  },
  {
    id: "8",
    title: "Parimi's Dental Care",
    category: "Web Design",
    image: "/images/frontpage/project-one-img-5_5.jpg",
  },
  {
    id: "9",
    title: "Little Ivy's World School",
    category: "Web Design",
    image: "/images/frontpage/project-one-img-6_6.jpg",
  },
  {
    id: "10",
    title: "ARNI Photography",
    category: "Web Design",
    image: "/images/frontpage/screencapture-arniphotography-in-index-html-2026-02-11-10_50_21.png",
  },
  {
    id: "11",
    title: "Iconstructions",
    category: "Web Design",
    image: "/images/frontpage/screencapture-iconstructions-net-2026-02-12-09_45_57.png",
  },
  {
    id: "12",
    title: "Joint Development",
    category: "Web Design",
    image: "/images/frontpage/screencapture-jointdevelopmentt-2026-02-11-12_47_51.png",
  },
  {
    id: "13",
    title: "Lions Hospital",
    category: "Web Design",
    image: "/images/frontpage/Screenshot-72-e1730876870829.png",
  },
  {
    id: "14",
    title: "Taste of Indian Spice",
    category: "Web Design",
    image: "/images/frontpage/Screenshot-73-e1730877845760.png",
  },
  {
    id: "15",
    title: "Manas Dental Care",
    category: "Web Design",
    image: "/images/frontpage/Screenshot_2024-07-06-17-06-59-943_com.android.chrome-e1720266148556.jpg",
  },
];

export function PortfolioPage() {
  return (
    <div className="portfolio-page min-h-screen bg-background text-on-surface">
      <SiteHeader ctaHref="/portfolio.html" />
      <main>
        {/* Hero */}
        <section className="portfolio-hero relative isolate overflow-hidden py-24 md:py-40 bg-white">
          <div className="absolute inset-0 -z-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-fixed-dim to-transparent" />
          <div className="absolute top-[-15%] left-[-8%] -z-10 size-175 rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute bottom-[-15%] right-[-8%] -z-10 size-200 rounded-full bg-primary/10 blur-[160px]" />

          {/* Floating portfolio elements in background */}
          <div className="portfolio-avatars absolute inset-0 -z-5 pointer-events-none overflow-hidden">
            <div className="absolute portfolio-shape top-1/4 left-1/2 -translate-x-1/2 size-24 bg-primary/10 rounded-full blur-[20px] animate-pulse-slow" aria-hidden="true" />
            <div className="absolute bottom-1/3 left-1/3 size-16 bg-primary/10 rounded-full blur-[20px] animate-pulse-slow" aria-hidden="true" />
            <div className="absolute top-1/3 right-1/4 size-20 bg-primary/10 rounded-full blur-[20px] animate-pulse-slow" aria-hidden="true" />
            <div className="absolute bottom-1/4 right-1/3 size-18 bg-primary/10 rounded-full blur-[20px] animate-pulse-slow" aria-hidden="true" />
            <div className="absolute -bottom-1/4 left-1/4 size-22 bg-primary/10 rounded-full blur-[20px] animate-pulse-slow" aria-hidden="true" />
            <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 size-24 bg-primary/10 rounded-full blur-[20px] animate-pulse-slow" aria-hidden="true" />
          </div>

          <Container>
            <Reveal className="portfolio-reveal">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-8">
                  <span className="size-2 rounded-full bg-amber-600" aria-hidden="true" />
                  Our Portfolio
                </span>
                <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight text-ink mb-6">
                  Our <span className="text-amber-600">Portfolio.</span>
                </h1>
                <p className="text-base md:text-lg leading-8 text-muted mb-12 max-w-152 mx-auto">
                  Transforming ideas into digital success stories. Explore our
                  impactful projects across web design, branding and product.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/start-project.html"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-amber-600 px-9 py-3 text-sm font-bold text-on-primary transition-colors duration-300 hover:bg-amber-700 hover:scale-[1.02]"
                  >
                    Start a project <span className="ml-2" aria-hidden="true">→</span>
                  </a>
                  <a
                    href="/about.html"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-9 py-3 text-sm font-bold text-ink transition-colors duration-300 hover:bg-surface-container-low hover:border-amber-300 hover:scale-[1.02]"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Our Project */}
        <section className="portfolio-feature py-20 md:py-32 bg-white border-y border-border">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal className="portfolio-item-wrap">
                <div className="space-y-6 text-center lg:text-left">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                    Our Project
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold leading-[1.05] tracking-tight text-ink">
                    Transforming Ideas into Digital
                    <br className="hidden md:block" />
                    <span className="text-amber-600">Success Stories.</span>
                  </h2>
                  <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-lg leading-8 text-muted">
                    We drive our innovative digital marketing projects.
                    We drive with targeted ads, SEO, social media strategies,
                    and measurable results that grow your brand.
                  </p>
                </div>
              </Reveal>
              <Reveal className="portfolio-item-wrap">
                <div className="relative h-105 rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img
                    src="/images/portfolio-project-showcase.svg"
                    alt="A web design project preview with website layouts and growth analytics"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-xl shadow-sm">
                    <p className="font-display font-semibold text-ink">Digital Project Showcase</p>
                    <p className="text-sm text-muted">Web design · Strategy · Growth</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Our Clients */}
        <section className="portfolio-clients py-12 md:py-16 bg-white">
          <Container>
            <div className="mb-8 text-center md:mb-10">
              <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider text-amber-600">
                Our Clients
              </span>
              <h2 className="mt-2 text-2xl font-display font-semibold leading-tight tracking-tight text-ink md:text-3xl">
                Trusted by brands worldwide
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-10 md:gap-y-10">
              {clients.map((client) => (
                <div
                  key={client.image}
                  className="flex h-20 items-center justify-center bg-white px-3"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className={`client-logo ${smallerClientLogos.has(client.image) ? "h-13" : largerClientLogos.has(client.image) ? "h-16" : "h-14"} w-full object-contain`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Our Projects Grid */}
        <section className="portfolio-grid-section py-20 md:py-32 bg-white border-y border-border">
          <Container>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                Our Projects
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold leading-[1.05] tracking-tight text-ink">
                Check Our Amazing Work We Have Done
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-lg leading-8 text-muted">
                Explore our curated selection of web design projects — each built
                with clarity, owned by you, and designed to perform.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Reveal key={project.id} className="portfolio-item-wrap">
                  <article className="overflow-hidden rounded-2xl border border-border bg-surface-bright">
                    <div className="aspect-3/4 w-full overflow-hidden bg-white">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <style>{`
        .portfolio-page {
          --gallery-bg: var(--color-background);
          --gallery-ink: var(--color-on-surface);
          --gallery-muted: var(--color-on-surface-variant);
          --gallery-border: var(--color-outline-variant);
          --gallery-card: var(--color-surface-bright);
        }
        .portfolio-clients .client-logo {
          filter: none !important;
          -webkit-filter: none !important;
          opacity: 1 !important;
          mix-blend-mode: normal !important;
        }
        .portfolio-page .bg-white { background-color: var(--gallery-bg); }
        .portfolio-page .portfolio-clients { background-color: #fff; }
        .portfolio-page .portfolio-clients .bg-white { background-color: #fff; }
        .portfolio-page .text-ink { color: var(--gallery-ink); }
        .portfolio-page .text-muted { color: var(--gallery-muted); }
        .portfolio-page .bg-amber-50 { background-color: var(--color-primary-container); }
        .portfolio-page .bg-amber-600 { background-color: var(--color-primary); }
        .portfolio-page .text-amber-600 { color: var(--color-secondary); }
        .portfolio-page .text-on-primary { color: var(--color-on-primary); }
        .portfolio-page .border-amber-200 { border-color: var(--color-primary-fixed-dim); }
        .portfolio-page .hover\\:bg-amber-700:hover { background-color: var(--color-inverse-primary); }
        .portfolio-page .hover\\:border-amber-300:hover { border-color: var(--color-primary); }
        .portfolio-page .hover\\:text-amber-600:hover { color: var(--color-secondary); }

        /* Portfolio animations */
        @keyframes portfolio-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes portfolio-pulse-slow {
          0%, 100% { opacity: 0.08; transform: scale(0.8) translate(0, 0); }
          50% { opacity: 0.14; transform: scale(1.2) translate(8px, -8px); }
        }
        .portfolio-reveal { animation: portfolio-fade-up 800ms cubic-bezier(0.16,1,0.3,1) both; }
        .portfolio-item-wrap { animation: portfolio-fade-up 700ms cubic-bezier(0.16,1,0.3,1) both; opacity: 0; }
        .animate-pulse-slow { animation: portfolio-pulse-slow 8s ease-in-out infinite alternate; }
        .animate-pulse-slow:nth-child(2) { animation-delay: 2s; }
        .animate-pulse-slow:nth-child(3) { animation-delay: 4s; }
        .animate-pulse-slow:nth-child(4) { animation-delay: 6s; }
        .animate-pulse-slow:nth-child(5) { animation-delay: 8s; }
        .animate-pulse-slow:nth-child(6) { animation-delay: 10s; }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-reveal, .portfolio-item-wrap {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
