import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const festivalImages = [
  {
    id: "1",
    title: "Diwali Lights 2024",
    category: "Diwali",
    date: "Nov 2024",
    image: "/gallery/diwali-lights.jpg",
    description: "Team lighting diyas across the office floor.",
  },
  {
    id: "2",
    title: "Holi Celebration",
    category: "Holi",
    date: "Mar 2024",
    image: "/gallery/holi-celebration.jpg",
    description: "Colors, sweets and laughter at the Holi fest.",
  },
  {
    id: "3",
    title: "Christmas Party",
    category: "Christmas",
    date: "Dec 2023",
    image: "/gallery/christmas-party.jpg",
    description: "Secret Santa and the decorated office tree.",
  },
  {
    id: "4",
    title: "New Year 2025",
    category: "New Year",
    date: "Jan 2025",
    image: "/gallery/new-year-2025.jpg",
    description: "Welcoming 2025 with the whole team.",
  },
  {
    id: "5",
    title: "Office Anniversary",
    category: "Office Party",
    date: "Aug 2024",
    image: "/gallery/office-anniversary.jpg",
    description: "Celebrating five years of ASE Technologies.",
  },
  {
    id: "6",
    title: "Team Lunch",
    category: "Office Party",
    date: "Jul 2024",
    image: "/gallery/diwali-lights.jpg",
    description: "Friday team lunch on the terrace.",
  },
  {
    id: "7",
    title: "Ganesh Chaturthi",
    category: "Festival",
    date: "Sep 2024",
    image: "/gallery/holi-celebration.jpg",
    description: "Ganpati bappa morya at the office reception.",
  },
  {
    id: "8",
    title: "Republic Day",
    category: "Festival",
    date: "Jan 2024",
    image: "/gallery/christmas-party.jpg",
    description: "Tricolour decorations and team pledge.",
  },
];

const categories = ["All", "Diwali", "Holi", "Christmas", "New Year", "Office Party", "Festival"];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? festivalImages
    : festivalImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-ink">
      <SiteHeader ctaHref="/gallery.html" />
      <main>
        {/* Hero */}
        <section className="gallery-hero relative isolate overflow-hidden py-20 md:py-32">
          <div className="gallery-hero-glow pointer-events-none absolute top-[-8%] left-[-6%] -z-10 size-[600px] rounded-full bg-amber-100/50 blur-[120px]" />
          <Container>
            <Reveal className="gallery-reveal">
              <div className="max-w-3xl">
                <span className="gallery-badge inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-600 shadow-sm">
                  <span className="size-2 rounded-full bg-amber-600" />
                  ASE Office Gallery
                </span>
                <h1 className="mt-6 max-w-[28ch] font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                  Office moments <span className="text-amber-600">captured.</span>
                </h1>
                <p className="mt-6 max-w-[44rem] text-lg leading-8 text-muted">
                  Festivals, milestones and everyday moments from the ASE team.
                  Browse memories from the ASE team celebrations.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => setActiveCategory("All")}
                    className="gallery-btn-secondary inline-flex min-h-[48px] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold transition-colors duration-200"
                  >
                    All moments
                  </button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Category filter */}
        <section className="gallery-filters py-16 border-y border-border">
          <Container>
            <div className="overflow-x-auto pb-4">
              <div className="gallery-filter-track inline-flex gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "gallery-filter-chip whitespace-nowrap rounded-full border border-border px-5 py-2 text-xs font-semibold transition-colors duration-200",
                      activeCategory === cat
                        ? "border-amber-600 bg-amber-600 text-on-primary shadow-sm"
                        : "text-ink-light hover:border-amber-300 hover:bg-amber-50",
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-muted">
              {filtered.length} moment{filtered.length !== 1 ? "s" : ""} shared
            </p>
          </Container>
        </section>

        {/* Image grid - clean simple layout */}
        <section className="gallery-grid-section py-20 md:py-32 bg-white">
          <Container>
            <div className="gallery-grid">
              {filtered.map((img, index) => (
                <Reveal key={img.id} className="gallery-item-wrap" delay={index * 80}>
                  <article
                    className="gallery-card"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="gallery-media-wrap">
                      <img
                        src={img.image}
                        alt={img.title}
                        className="gallery-image"
                        loading="lazy"
                      />
                      <span className="gallery-date">{img.date}</span>
                    </div>
                    <div className="gallery-copy">
                      <p className="gallery-category text-xs font-semibold uppercase tracking-wider text-amber-600">
                        {img.category}
                      </p>
                      <h3 className="gallery-title mt-3 font-display text-lg font-semibold leading-tight">
                        {img.title}
                      </h3>
                      <p className="gallery-desc mt-3 text-sm text-muted leading-relaxed line-clamp-2">
                        {img.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
              {filtered.length === 0 && (
                <div className="gallery-empty col-span-full py-32 text-center">
                  <span className="text-5xl mb-6 block">📷</span>
                  <h3 className="font-display text-2xl font-semibold text-ink">No moments yet</h3>
                  <p className="mt-4 text-sm text-muted">No photos in this category.</p>
                </div>
              )}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />

      <style>{`
        :root {
          --gallery-bg: #ffffff;
          --gallery-ink: #1c1917;
          --gallery-muted: #6b6157;
          --gallery-border: #e8ddc8;
          --gallery-card: #ffffff;
        }
        .bg-white { background-color: #ffffff; }
        .text-ink { color: var(--gallery-ink); }
        .text-muted { color: var(--gallery-muted); }
        .text-border { color: var(--gallery-border); }
        .bg-amber-50 { background-color: #fff7e0; }
        .bg-amber-600 { background-color: #c2410c; }
        .text-amber-600 { color: #c2410c; }
        .text-emerald-600 { color: #047857; }
        .bg-emerald-100 { background-color: #d1fae5; }
        .text-on-primary { color: #ffffff; }
        .text-ink-light { color: #8c8276; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.05); }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
        .border-2 { border-width: 2px; }
        .border-dashed { border-style: dashed; }
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }
        .col-span-full { grid-column: 1 / -1; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

        /* Animations - fade in only */
        @keyframes gallery-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }

        /* Hero */
        .gallery-hero { }
        .gallery-reveal { animation: gallery-fade-up 800ms cubic-bezier(0.16,1,0.3,1) both; }
        .gallery-badge { animation: gallery-fade-up 700ms cubic-bezier(0.16,1,0.3,1) 100ms both; opacity: 0; }
        .gallery-hero h1 { font-size: clamp(2.8rem, 5vw, 5rem); line-height: 1.0; letter-spacing: -0.04em; font-weight: 600; animation: gallery-fade-up 800ms cubic-bezier(0.16,1,0.3,1) 200ms both; opacity: 0; }
        .gallery-hero p { font-size: clamp(1rem, 1.2vw, 1.15rem); line-height: 1.75; animation: gallery-fade-up 800ms cubic-bezier(0.16,1,0.3,1) 300ms both; opacity: 0; }
        .gallery-btn-secondary { background: rgba(255,255,255,0.9); color: var(--gallery-ink); transition: background-color 200ms ease; }

        /* Filters */
        .gallery-filters { }
        .gallery-filter-track { animation: gallery-fade-up 700ms cubic-bezier(0.16,1,0.3,1) both; }
        .gallery-filter-chip { border-color: var(--gallery-border); transition: background-color 200ms ease, border-color 200ms ease; }
        .gallery-filter-chip:hover:not(.border-amber-600) { border-color: #e6c981; }

        /* Simple Grid - no hover effects on cards */
        .gallery-grid-section { }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        .gallery-item-wrap { animation: gallery-fade-up 700ms cubic-bezier(0.16,1,0.3,1) both; }
        .gallery-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--gallery-border);
          border-radius: 16px;
          background: var(--gallery-card);
          overflow: hidden;
        }
        .gallery-media-wrap { position: relative; aspect-ratio: 4/3; overflow: hidden; flex-shrink: 0; }
        .gallery-image { width: 100%; height: 100%; object-fit: cover; display: block; }
        .gallery-date { position: absolute; bottom: 12px; left: 12px; z-index: 2; display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: rgba(0,0,0,0.6); color: #fff; font-size: 11px; font-weight: 700; }
        .gallery-copy { padding: 20px; flex: 1; display: flex; flex-direction: column; }
        .gallery-category { margin: 0; }
        .gallery-title { margin: 0; font-size: clamp(1.05rem, 1.4vw, 1.2rem); line-height: 1.2; letter-spacing: -0.02em; color: var(--gallery-ink); }
        .gallery-desc { margin: 0; min-height: 44px; color: var(--gallery-muted); font-size: 13px; line-height: 1.6; }
        .gallery-empty { animation: gallery-fade-up 700ms ease both; }

        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
          .gallery-copy { padding: 18px; }
          .gallery-hero { padding-top: 16px; padding-bottom: 20px; }
        }
        @media (max-width: 560px) {
          .gallery-grid { grid-template-columns: 1fr; gap: 16px; }
          .gallery-copy { padding: 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gallery-reveal, .gallery-badge, .gallery-hero h1, .gallery-hero p,
          .gallery-item-wrap {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
