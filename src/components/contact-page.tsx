import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const infoItems = [
  {
    icon: "location",
    title: "Office",
    lines: ["Vizag, Hyderabad, Bengaluru, Vijayawada"],
  },
  {
    icon: "email",
    title: "Email Us",
    lines: ["contact@asetechnologies.in", "info@asetechnologies.in"],
  },
  {
    icon: "phone",
    title: "Call us",
    lines: ["+91 87126 55512"],
  },
];

const services = [
  "Web Designing",
  "Digital Marketing",
  "Content Marketing",
  "SEO",
  "Graphic Designing",
  "Social Media Marketing",
  "Real Estate CRM",
];

const faqs = [
  {
    question: "SEO: How long does it take to rank on the first page?",
    answer: "It typically takes 3–6 months depending on competition, keywords, and current site health.",
  },
  {
    question: "Social Media Marketing: Which platforms are best for my brand?",
    answer: "It depends on your audience — Instagram & Meta for B2C, LinkedIn for B2B, YouTube for video content.",
  },
  {
    question: "Website Designing: Will my site be mobile-responsive?",
    answer: "Yes. Every website we build is fully responsive and mobile-optimized.",
  },
  {
    question: "Content Marketing: Why is high-quality content important?",
    answer: "Quality content builds trust, improves SEO, and converts readers into customers.",
  },
  {
    question: "Email Marketing: Is it still effective today?",
    answer: "Yes. Email remains one of the highest-ROI channels when segmented and personalized.",
  },
  {
    question: "Graphic Designing: Do you provide custom brand identity designs?",
    answer: "Yes. We create logos, brand guidelines, and visual identities tailored to your business.",
  },
  {
    question: "PPC: What is the benefit of using Google Ads?",
    answer: "Instant visibility, measurable ROI, and precise targeting by location and intent.",
  },
  {
    question: "App Development: Do you build for both Android and iOS?",
    answer: "Yes. We build cross-platform apps and native apps for both Android and iOS.",
  },
  {
    question: "E-commerce: Do you set up online stores and payment gateways?",
    answer: "Yes. We build e-commerce sites with secure payment integrations and inventory management.",
  },
  {
    question: "Website Maintenance: How do you handle site updates?",
    answer: "We provide ongoing maintenance including security patches, backups, and content updates.",
  },
];

export function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fields = [
      ["Name", formData.get("name")],
      ["Phone", formData.get("phone")],
      ["Email", formData.get("email")],
      ["Service", formData.get("service")],
      ["Message", formData.get("message")],
    ] as const;
    const message = [
      "Hello ASE Technologies, I have an enquiry.",
      ...fields
        .filter(([, value]) => typeof value === "string" && value.trim())
        .map(([label, value]) => `${label}: ${String(value).trim()}`),
    ].join("\n");
    const url = `https://wa.me/918712655512?text=${encodeURIComponent(message)}`;
    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="contact-page min-h-screen bg-background text-on-surface">
      <SiteHeader ctaHref="/contact.html" />
      <main>
        {/* Hero */}
        <section className="contact-hero relative isolate overflow-hidden bg-background py-20 md:py-28">
          <div className="contact-hero-glow pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" aria-hidden="true" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-fixed-dim to-transparent" />
          <Container>
            <div className="contact-hero-content mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-fixed-dim bg-primary-container px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Contact Us
              </span>
              <h1 className="mb-4 text-4xl font-display font-bold leading-[1.05] tracking-tight text-on-surface md:text-5xl">
                Contact <span className="text-secondary">Us</span>
              </h1>
              <p className="mx-auto mb-8 max-w-[36rem] text-lg leading-7 text-on-surface-variant">
                Reach Out — We’re Ready to Assist!
              </p>
              <a
                href="/start-project.html"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-on-primary shadow-elevation-sm transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-inverse-primary hover:shadow-elevation-md"
              >
                Start a project
              </a>
            </div>
          </Container>
        </section>

        {/* Get in touch */}
        <section className="contact-info bg-surface-container-low py-12 md:py-16">
          <Container>
            <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
              <Reveal className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-outline-variant bg-surface-bright shadow-elevation-sm">
                  <img
                    src="/images/contact-connect.svg"
                    alt="An illustration of a support team member working on a website and messages"
                    className="aspect-[1.55] w-full bg-surface-container-low object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary">
                      Get in touch
                    </p>
                    <h2 className="mb-3 text-2xl font-display font-bold leading-tight tracking-tight text-on-surface sm:text-3xl">
                      Let’s talk about your next idea.
                    </h2>
                    <p className="max-w-xl leading-relaxed text-on-surface-variant">
                      Have a question or a project in mind? Our team is ready to
                      help you find the right digital solution.
                    </p>
                  </div>
                </article>
              </Reveal>
              <Reveal className="h-full" delay={100}>
                <div className="flex h-full flex-col justify-center rounded-3xl border border-outline-variant bg-surface-bright p-6 shadow-elevation-sm sm:p-8 lg:p-10">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                    Contact details
                  </p>
                  <h3 className="mb-6 text-2xl font-display font-semibold leading-tight text-on-surface">
                    We’re here to help
                  </h3>
                  {infoItems.map((item) => (
                    <div key={item.title} className="flex items-center gap-4 border-t border-outline-variant py-4 first:border-t-0 first:pt-0 last:pb-0">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-container text-secondary">
                        {item.icon === "location" ? (
                          <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>
                        ) : item.icon === "email" ? (
                          <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <path d="m3 7 9 6 9-6" />
                          </svg>
                        ) : (
                          <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92Z" />
                          </svg>
                        )}
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="mb-1 text-sm font-semibold text-on-surface">{item.title}</p>
                        {item.lines.map((line, i) => (
                          <p key={i} className="break-words text-sm leading-relaxed text-on-surface-variant">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Contact form */}
        <section className="contact-form relative overflow-hidden border-y border-outline-variant bg-background py-20 md:py-28">
          <div className="pointer-events-none absolute -right-32 top-12 -z-0 size-96 rounded-full bg-primary/10 blur-[90px]" aria-hidden="true" />
          <Container>
            <Reveal className="relative z-10">
              <div className="mx-auto max-w-3xl rounded-3xl border border-outline-variant bg-surface-bright p-6 shadow-elevation-md sm:p-10 md:p-12">
                <div className="mx-auto mb-9 max-w-xl text-center">
                  <span className="mb-4 inline-flex rounded-full bg-primary-container px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
                    Let’s talk
                  </span>
                  <h2 className="mb-3 text-3xl font-display font-bold leading-[1.05] tracking-tight text-on-surface md:text-4xl">
                    Contact Us
                  </h2>
                  <p className="mx-auto max-w-[32rem] text-on-surface-variant">
                    Reach out to us for any queries, support or feedback. We’re here
                    to assist you with prompt and friendly service.
                  </p>
                </div>
                {whatsAppUrl ? (
                  <div className="rounded-2xl border border-outline-variant bg-background p-6 text-center" role="status">
                    <h3 className="text-lg font-semibold text-on-surface">Continue in WhatsApp</h3>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                      Your enquiry is ready. Review the message in WhatsApp and tap Send to reach our team.
                    </p>
                    <a
                      className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-on-primary transition-colors hover:bg-inverse-primary"
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open WhatsApp
                    </a>
                  </div>
                ) : (
                <form className="space-y-5 text-left" onSubmit={handleContactSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        autoComplete="name"
                        className="min-h-12 w-full rounded-full border border-outline-variant bg-background px-5 py-3 text-on-surface outline-none transition-all duration-200 placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        autoComplete="tel"
                        className="min-h-12 w-full rounded-full border border-outline-variant bg-background px-5 py-3 text-on-surface outline-none transition-all duration-200 placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="+91 ___ ___ ____"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      className="min-h-12 w-full rounded-full border border-outline-variant bg-background px-5 py-3 text-on-surface outline-none transition-all duration-200 placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="contact-service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Our Services
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className="min-h-12 w-full appearance-none rounded-full border border-outline-variant bg-background px-5 py-3 text-on-surface outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      id="contact-message"
                      name="message"
                      required
                      className="w-full resize-y rounded-2xl border border-outline-variant bg-background px-5 py-3 text-on-surface outline-none transition-all duration-200 placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-on-primary shadow-elevation-sm transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-inverse-primary hover:shadow-elevation-md sm:w-auto"
                  >
                    Submit
                  </button>
                </form>
                )}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="contact-faq bg-surface-container-low py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-[56rem] space-y-8">
              <Reveal className="text-center">
                <h2 className="text-3xl font-display font-bold leading-[1.05] tracking-tight text-on-surface md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">
                  Comprehensive support and insights into our Digital Marketing
                  ecosystem at ASE Technologies.
                </p>
              </Reveal>
              <div className="space-y-3">
                {faqs.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <Reveal key={item.question} delay={index * 35}>
                      <div
                        className={cn(
                          "group relative overflow-hidden rounded-2xl border border-outline-variant bg-surface-bright shadow-elevation-sm transition-all duration-300",
                          isOpen ? "border-primary/60 shadow-elevation-md" : "",
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-primary-container/50 sm:px-7"
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${index}`}
                        >
                          <span
                            id={`faq-question-${index}`}
                            className="text-base font-medium text-on-surface transition-colors duration-200"
                          >
                            {item.question}
                          </span>
                          <div
                            className={cn(
                              "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-outline-variant bg-background text-on-surface transition-transform duration-300",
                              isOpen ? "rotate-180" : "",
                            )}
                          >
                            <svg
                              className="size-3.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </button>
                        <div
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                          aria-hidden={!isOpen}
                          className={cn(
                            "overflow-hidden transition-all duration-300 ease-out",
                            isOpen
                              ? "max-h-[200px] opacity-100 mt-0 border-t border-outline-variant px-5 pb-6 sm:px-7"
                              : "max-h-0 opacity-0 mt-0 px-5 pb-0 sm:px-7",
                          )}
                        >
                          <p className="pt-4 text-sm leading-relaxed text-on-surface-variant">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Still have questions */}
        <section className="contact-final-cta border-y border-outline-variant bg-background py-20 md:py-28">
          <Container>
            <Reveal>
              <div className="rounded-3xl border border-primary-fixed-dim bg-primary-container p-8 text-center shadow-elevation-sm sm:p-10 md:p-16">
                <h2 className="mb-3 text-2xl font-display font-bold leading-[1.05] tracking-tight text-on-surface md:text-3xl">
                  Still have questions?
                </h2>
                <p className="mx-auto mb-8 max-w-[32rem] text-lg leading-7 text-on-surface-variant">
                  Our expert team is ready to help you navigate the digital landscape.
                </p>
                <a
                  href="/start-project.html"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-on-surface px-9 py-3 text-sm font-bold text-inverse-on-surface transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-secondary"
                >
                  Contact Us Now
                </a>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Office location */}
        <section className="contact-location border-t border-outline-variant bg-surface-container-low py-20 md:py-28">
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              <Reveal className="flex flex-col justify-center">
                <h2 className="mb-3 text-2xl font-display font-bold leading-[1.05] tracking-tight text-on-surface md:text-3xl">
                  Our Office Location
                </h2>
                <p className="mb-6 text-lg leading-7 text-on-surface-variant">
                  Vizag, Hyderabad, Bengaluru, Vijayawada
                </p>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="leading-relaxed text-on-surface-variant">
                    We serve clients across Vizag, Hyderabad, Bengaluru, and
                    Vijayawada — get in touch for local support.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="h-[320px] overflow-hidden rounded-2xl border border-outline-variant shadow-elevation-sm sm:h-[420px]">
                  <iframe
                    title="Google Maps showing Hyderabad, Vijayawada, Visakhapatnam, and Bengaluru"
                    src="https://maps.google.com/maps?saddr=Hyderabad,+Telangana&daddr=Vijayawada,+Andhra+Pradesh+to:Visakhapatnam,+Andhra+Pradesh+to:Bengaluru,+Karnataka&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <style>{`
        .contact-hero-content { animation: contact-fade-up 800ms var(--ease-out-expo) both; }
        .contact-hero-glow { animation: contact-glow 8s ease-in-out infinite alternate; }
        @keyframes contact-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes contact-glow {
          from { opacity: 0.55; transform: translate(-50%, 0) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, 12px) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-hero-content,
          .contact-hero-glow {
            animation: none !important;
          }
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
