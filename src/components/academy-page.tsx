import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const formWebhookUrl =
  "https://script.google.com/macros/s/AKfycbwlzL_yvF995IaFmgUnj76j0GyTSjgdDu3BpMBTPlUtHAvyk1Mgxl1K5t0_64WdgfEL/exec";

const courses = [
  {
    title: "AI Digital Marketing",
    duration: "3 months",
    tagline: "Marketing that thinks.",
    description:
      "Master SEO, paid ads, content and analytics with practical AI workflows.",
    highlights: ["SEO & SEM fundamentals", "AI-assisted content", "Campaign analytics"],
    tint: "#c2410c",
    color: "amber",
  },
  {
    title: "AWS & DevOps",
    duration: "4 months",
    tagline: "Ship code, scale worlds.",
    description:
      "Learn cloud operations from AWS fundamentals through containers and CI/CD.",
    highlights: ["AWS core services", "Linux & networking", "Docker & Kubernetes"],
    tint: "#047857",
    color: "emerald",
  },
  {
    title: "Cybersecurity",
    duration: "4 months",
    tagline: "Defend the digital perimeter.",
    description:
      "Build defensive skills with hands-on security, threat hunting and response labs.",
    highlights: ["Network security", "Ethical hacking labs", "Incident response"],
    tint: "#be123c",
    color: "rose",
  },
];

type FacilityIconName = "building" | "classroom" | "counseling" | "communication" | "computer" | "lounge" | "safety" | "seminar";

const facilities: [string, string, FacilityIconName][] = [
  ["Modern Reception", "A welcoming front desk to guide every visitor and student.", "building"],
  ["Smart Classrooms", "Projectors, whiteboards and high-speed internet in every room.", "classroom"],
  ["Career Counseling", "One-on-one rooms for placement guidance and mentoring.", "counseling"],
  ["English & Soft Skills", "Communication labs to sharpen interviews and presentations.", "communication"],
  ["High-Speed Labs", "Workstations tuned for cloud labs and security practice.", "computer"],
  ["Student Lounge", "A calm space to recharge, collaborate and unwind.", "lounge"],
  ["Safe Campus", "CCTV-monitored premises with on-site staff throughout the day.", "safety"],
  ["Seminar Hall", "A space for guest lectures, hackathons and demo days.", "seminar"],
];

function FacilityIcon({ name }: { name: FacilityIconName }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "building" ? <><path d="M8 40h32M12 40V15l12-7 12 7v25" /><path d="M18 19h2m8 0h2M18 25h2m8 0h2M21 40V31h6v9" /><path d="M6 15h8M34 15h8" /></> : null}
      {name === "classroom" ? <><rect x="7" y="7" width="34" height="22" rx="2" /><path d="M24 29v8m-9 4h18m-20-4h22M12 14h24" /><path d="m18 22 4-4 3 3 5-6" /></> : null}
      {name === "counseling" ? <><circle cx="17" cy="16" r="5" /><circle cx="32" cy="18" r="4" /><path d="M7 39c.6-7 4.4-11 10-11s9.5 4 10 11m0-8c1.3-2 3-3 5.5-3 4.6 0 7.4 3.6 8 9" /><path d="M27 7h13v9h-5l-4 4v-4h-4z" /></> : null}
      {name === "communication" ? <><path d="M7 10a4 4 0 0 1 4-4h17a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H17l-7 5v-5a4 4 0 0 1-3-4z" /><path d="M20 28h13l7 5v-5a4 4 0 0 0 2-4v-5" /><path d="M13 14h13m-13 5h9" /></> : null}
      {name === "computer" ? <><rect x="6" y="7" width="36" height="25" rx="3" /><path d="M18 41h12m-6-9v9m-11-4h22" /><path d="m19 15-4 4 4 4m10-8 4 4-4 4m-3-9-3 10" /></> : null}
      {name === "lounge" ? <><path d="M10 25v-7a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v7" /><path d="M7 24a4 4 0 0 1 4 4v6h26v-6a4 4 0 0 1 4-4v13H7z" /><path d="M11 37v4m26-4v4M15 19h18" /></> : null}
      {name === "safety" ? <><path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11z" /><path d="m17 24 5 5 10-11" /></> : null}
      {name === "seminar" ? <><path d="M7 40h34M11 40V24h15v16m0-16h11v16" /><path d="M15 18h16l-8-11zM23 18v6m9-5v5m-15-5v5" /><circle cx="34" cy="13" r="3" /></> : null}
    </svg>
  );
}

const faqs = [
  [
    "Do I need prior coding experience to join?",
    "Not for AI Digital Marketing. AWS & DevOps and Cybersecurity start with the fundamentals, then build toward industry-level skills.",
  ],
  [
    "Are the classes really 100% offline?",
    "Yes. Every session is in person at our Visakhapatnam campus, with direct mentor access and hands-on practice.",
  ],
  [
    "How does placement assistance work?",
    "Students receive resume reviews, mock interviews, soft-skills preparation and introductions to hiring partners.",
  ],
  [
    "Can I pay the fee in installments?",
    "Flexible installment plans are available. Contact the admissions team for current fees and batch timings.",
  ],
  [
    "Will I get a certificate after completion?",
    "Yes. Graduates receive an ASE Digital Academy certificate and build a practical portfolio of projects.",
  ],
  [
    "What is the typical batch size?",
    "Batches are kept small to ensure every learner gets time with mentors and feedback on their work.",
  ],
];

const benefits = [
  "100% hands-on labs",
  "Industry mentors",
  "Placement assistance",
];

export function AcademyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      FullName: String(form.get("FullName") ?? ""),
      Email: String(form.get("Email") ?? ""),
      Phone: String(form.get("Phone") ?? ""),
      Course: String(form.get("Course") ?? ""),
      SubmittedAt: new Date().toISOString(),
    };

    try {
      await fetch(formWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
      setSubmitted(true);
    } catch {
      setSubmitError("We couldn’t send your enquiry. Please try again or call +91 87126 55512.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-academy-bg text-ink">
      <SiteHeader ctaHref="#enroll" />
      <main>
        {/* Hero section */}
        <section
          className="academy-hero relative isolate overflow-hidden"
          aria-label="Hero"
        >
          <div className="academy-hero-bg-grid pointer-events-none absolute inset-0 -z-10" />
          <div className="academy-hero-orb-one pointer-events-none absolute top-[-10%] left-[-10%] -z-10 size-[600px] rounded-full bg-amber-300/20 blur-[120px]" />
          <div className="academy-hero-orb-two pointer-events-none absolute bottom-[-10%] right-[-10%] -z-10 size-[700px] rounded-full bg-orange-200/25 blur-[140px]" />
          <Container>
            <div className="academy-hero-grid">
              <div className="academy-hero-copy min-w-0">
                <Reveal className="academy-reveal">
                  <span className="academy-badge inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-ink/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-700 shadow-sm backdrop-blur">
                    <span className="size-2 rounded-full bg-amber-600" />
                    ASE Digital Academy
                  </span>
                  <h1 className="academy-hero-title mt-4 max-w-[34ch] font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                    Learn skills that <span className="text-amber-600">get you hired.</span>
                  </h1>
                  <p className="academy-hero-lead mt-5 max-w-[42rem] text-lg leading-8 text-muted">
                    100% offline, project-driven training in Visakhapatnam. Learn from working practitioners, build a portfolio and get the support to take your next career step.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <a href="#enroll" className="academy-btn-primary inline-flex min-h-[48px] items-center justify-center rounded-full px-8 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      Reserve your seat <span className="ml-2" aria-hidden="true">→</span>
                    </a>
                    <a href="#courses" className="academy-btn-secondary inline-flex min-h-[48px] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold transition-all duration-300 hover:bg-accent-hover">
                      Explore courses
                    </a>
                  </div>
                  <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"><span aria-hidden="true" className="text-amber-600">⌖</span> Visakhapatnam, Andhra Pradesh <span className="mx-1 text-border">·</span> Offline · Instructor-led</p>
                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-light">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2"><span className="text-amber-600">✓</span>{benefit}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="academy-hero-card-reveal min-w-0">
                <Reveal delay={180} className="academy-hero-card-wrap scroll-mt-28">
                  <div id="enroll" className="academy-hero-card">
                    {!submitted ? (
                      <>
                        <div className="academy-card-head">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Start here</p>
                            <h2 className="mt-1 font-display text-xl font-semibold sm:text-2xl">Student registration</h2>
                            <p className="mt-1 text-sm text-muted">Book a free counseling session.</p>
                          </div>
                          <span className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-700">Free session</span>
                        </div>
                        <form onSubmit={handleSubmit} className="academy-form mt-6">
                          <label className="academy-field">Full name<input required autoComplete="name" name="FullName" className="academy-input" /></label>
                          <label className="academy-field">Email address<input required type="email" autoComplete="email" name="Email" className="academy-input" /></label>
                          <label className="academy-field">Mobile number<input required type="tel" autoComplete="tel" name="Phone" className="academy-input" /></label>
                          <label className="academy-field">Choose a course<select name="Course" className="academy-input">{courses.map((course) => <option key={course.title}>{course.title}</option>)}<option>Not sure yet</option></select></label>
                          <button disabled={submitting} type="submit" className="academy-submit">{submitting ? "Submitting…" : "Apply for counseling  →"}</button>
                          {submitError && <p role="alert" className="academy-form-error">{submitError}</p>}
                          <p className="academy-form-note">No spam. We’ll only contact you about admissions.</p>
                        </form>
                      </>
                    ) : (
                      <div role="status" className="py-10 text-center">
                        <span className="mx-auto grid size-14 place-items-center rounded-full bg-amber-50 text-2xl text-amber-600">✓</span>
                        <h2 className="mt-5 font-display text-2xl font-semibold">You’re on the list!</h2>
                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">Our admissions team will reach out within 24 hours to confirm your counseling session.</p>
                        <button type="button" onClick={() => setSubmitted(false)} className="mt-5 text-sm font-semibold text-amber-600 underline underline-offset-4">Submit another enquiry</button>
                      </div>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats section */}
        <section aria-label="Academy highlights" className="academy-stats">
          <Container>
            <div className="academy-stats-grid">
              {[["100%", "Offline training"], ["3", "Career tracks"], ["50+", "Real-world projects"], ["1:1", "Mentor guidance"]].map(([value, label], index) => (
                <Reveal key={label} delay={index * 100} className="academy-stat-wrap"><article className="academy-stat-card"><p className="academy-stat-value">{value}</p><span className="academy-stat-rule" aria-hidden="true" /><p className="academy-stat-label">{label}</p></article></Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Skills ticker */}
        <section aria-label="Skills you can learn" className="academy-skills">
          <div className="academy-skills-head"><span className="academy-skills-dot" />Skills you can build</div>
          <div className="academy-skills-window">
            <div className="academy-skills-track">
              {["SEO", "Google Ads", "Meta Ads", "AWS", "Docker", "Kubernetes", "CI/CD", "Cybersecurity", "Python", "Linux"].map((item, index) => <span key={`${item}-${index}`} className="academy-skill-chip">{item}<span aria-hidden="true">✳</span></span>)}
            </div>
          </div>
        </section>

        {/* Courses section */}
        <section id="courses" className="scroll-mt-24 py-20 md:py-32">
          <Container>
            <div className="max-w-2xl">
              <Reveal className="academy-reveal">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">01 / Our programs</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Three tracks. One outcome: <span className="text-amber-600">a job you love.</span></h2>
                <p className="mt-5 text-base leading-7 text-muted">Learn through real industry workflows. Graduate with a portfolio and practical experience, not just notes.</p>
              </Reveal>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <Reveal key={course.title} delay={index * 120} className="academy-program-wrap"><article className="academy-program-card">
                  <span className="academy-program-glow" aria-hidden="true" />
                  <div className="academy-program-top"><span className="academy-program-index">0{index + 1}<span> / TRACK</span></span><span className="academy-program-duration">{course.duration}</span></div>
                  <p className="academy-program-kicker">{course.tagline}</p>
                  <h3>{course.title}</h3>
                  <p className="academy-program-desc">{course.description}</p>
                  <ul className="academy-program-highlights">{course.highlights.map((highlight) => <li key={highlight}><span aria-hidden="true">✓</span>{highlight}</li>)}</ul>
                  <a href="#enroll" className="academy-program-link">Explore this course <span aria-hidden="true">↗</span></a>
                </article></Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Facilities section */}
        <section className="academy-facilities">
          <Container>
            <div className="max-w-2xl">
              <Reveal className="academy-reveal"><p className="text-xs font-semibold uppercase tracking-wider text-amber-600">02 / The experience</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Built for focused, <span className="text-amber-600">uninterrupted learning.</span></h2><p className="mt-5 text-base leading-7 text-muted">A welcoming campus, practical labs and personal guidance at every step.</p></Reveal>
            </div>
            <div className="academy-facilities-grid">{facilities.map(([title, description, icon], index) => <Reveal key={title} delay={(index % 4) * 80} className="academy-facility-wrap"><article className="academy-facility-card"><div className="academy-facility-meta"><span className="academy-facility-mark"><FacilityIcon name={icon} /></span><span className="academy-facility-number">0{index + 1}</span></div><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div>
          </Container>
        </section>

        {/* Story section */}
        <section className="academy-story">
          <span className="academy-story-watermark" aria-hidden="true">03</span>
          <Container>
            <div className="academy-story-top">
              <Reveal className="academy-reveal"><div>
                <p className="academy-story-eyebrow"><span /> 03 / About the academy</p>
                <h2>Built by practitioners.<br /><span>Made for what’s next.</span></h2>
                <p className="academy-story-desc">ASE Digital Academy is the education arm of ASE Technologies. We started by training our own hires and now bring that same practical, project-driven approach to anyone ready to build a career in tech.</p>
              </div></Reveal>
              <Reveal delay={150} className="academy-reveal"><aside>
                <span className="academy-story-label">OUR POINT OF VIEW</span>
                <p>Real skills come from <strong>doing the work.</strong></p>
                <div><article><span>Mission</span><p>Bridge education and work with practical, mentor-led learning.</p></article><article><span>Promise</span><p>Keep showing up for students, from first lesson through their next step.</p></article></div>
              </aside></Reveal>
            </div>
            <div className="academy-story-principles">{["Learn by building", "Small mentor-led batches", "Portfolio over paper", "Career-focused coaching", "Live project briefs", "Practical industry tools"].map((item, index) => <Reveal key={item} delay={index * 60}><article className="academy-principle"><span>0{index + 1}</span><p>{item}</p></article></Reveal>)}</div>
            <div className="academy-story-journey"><div className="academy-story-journey-heading"><p className="academy-story-eyebrow"><span /> THE PATH SO FAR</p><h3>From a small beginning<br /><span>to a growing community.</span></h3></div><div className="academy-story-timeline">{[["2019", "ASE Technologies founded in cloud and security services."], ["2022", "Internal training began for early-career engineers."], ["2024", "ASE Digital Academy opened in Visakhapatnam."], ["Today", "Three tracks, 50+ projects and a growing hiring network."]].map(([year, text], index) => <Reveal key={year} delay={index * 100} className="academy-story-milestone-wrap"><article className="academy-story-milestone"><span className="academy-story-node" /><strong>{year}</strong><p>{text}</p></article></Reveal>)}</div></div>
          </Container>
        </section>

        {/* FAQ section */}
        <section className="academy-faq">
          <Container>
            <div className="academy-faq-layout">
              <Reveal className="academy-reveal"><div><p className="academy-faq-eyebrow">04 / Questions</p><h2>Clear answers.<br /><span>Confident next steps.</span></h2><p className="academy-faq-copy">A little more detail on classes, courses and what happens after you apply.</p><a href="tel:+918712655512" className="academy-faq-contact"><span>Talk to admissions</span><strong>+91 87126 55512 <span aria-hidden="true">↗</span></strong></a></div></Reveal>
              <div className="academy-faq-grid">{faqs.map(([question, answer], index) => <Reveal key={question} delay={(index % 2) * 80} className="academy-faq-wrap"><article className={`academy-faq-item${openFaq === index ? " is-open" : ""}`}><button type="button" aria-expanded={openFaq === index} aria-controls={`academy-faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)} className="academy-faq-question"><span className="academy-faq-number">0{index + 1}</span><span className="academy-faq-qtext">{question}</span><span className="academy-faq-toggle" aria-hidden="true">+</span></button>{openFaq === index && <p id={`academy-faq-answer-${index}`} className="academy-faq-answer">{answer}</p>}</article></Reveal>)}</div>
            </div>
          </Container>
        </section>

        {/* Contact section */}
        <section className="academy-contact">
          <Container>
            <div className="academy-contact-layout">
              <Reveal className="academy-reveal academy-contact-copy"><div><p className="academy-contact-eyebrow">05 / Get in touch</p><h2>Let’s plan your <span>next step.</span></h2><p className="academy-contact-desc">Walk in for a free career counseling session. We’ll help you choose a track, understand the fees and find the next batch timing.</p></div></Reveal>
              <div className="academy-contact-list">{[["Call admissions", "+91 87126 55512", "tel:+918712655512", "01"], ["Email our team", "info@asetechnologies.in", "mailto:info@asetechnologies.in", "02"], ["Visit the campus", "Visakhapatnam, Andhra Pradesh", "https://maps.google.com/?q=Visakhapatnam%2C%20Andhra%20Pradesh", "03"], ["Campus hours", "Mon–Sat · 9 AM–7 PM", "", "04"]].map(([label, value, href, number], index) => <Reveal key={label} delay={index * 70}><article className="academy-contact-item"><span>{number}</span><div><p>{label}</p>{href ? <a href={href}>{value}</a> : <strong>{value}</strong>}</div><b aria-hidden="true">↗</b></article></Reveal>)}</div>
              <Reveal delay={120} className="academy-reveal academy-map-reveal"><div className="academy-map-card"><div className="academy-map-heading"><div><span>OUR CAMPUS</span><h3>Find us in Visakhapatnam</h3><p>ASE Digital Academy · Andhra Pradesh</p></div><a href="https://www.google.com/maps/search/?api=1&query=Visakhapatnam%2C%20Andhra%20Pradesh" target="_blank" rel="noopener noreferrer">Open map <span aria-hidden="true">↗</span></a></div><div className="academy-map-frame"><iframe title="ASE Digital Academy location in Visakhapatnam" src="https://maps.google.com/maps?q=Visakhapatnam%2C%20Andhra%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></Reveal>
            </div>
            <Reveal delay={120} className="academy-reveal"><div className="academy-final-cta"><div><span>READY WHEN YOU ARE</span><h2>Ready to start building your future?</h2><p>Reserve your place in the next batch. We’ll help you find the right track.</p></div><a href="#enroll">Reserve my seat <span aria-hidden="true">→</span></a></div></Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <style>{`
        :root {
          --academy-bg: #fbfaf6;
          --academy-ink: #1c1917;
          --academy-muted: #6b6157;
          --academy-muted-light: #8c8276;
          --academy-border: #e8ddc8;
          --academy-accent-hover: #fbf3e4;
          --academy-card: #ffffff;
          --academy-card-hover-bg: #fffaf0;
        }
        .bg-academy-bg { background-color: var(--academy-bg); }
        .text-ink { color: var(--academy-ink); }
        .text-muted { color: var(--academy-muted); }
        .text-ink-light { color: var(--academy-muted-light); }
        .text-border { color: var(--academy-border); }
        .bg-white { background-color: #ffffff; }
        .text-amber-700 { color: #9a3412; }

        /* ===== Animations ===== */
        @keyframes academy-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes academy-card-in {
          from { opacity: 0; transform: translateY(14px) scale(0.985); }
          to { opacity: 1; transform: none; }
        }
        @keyframes academy-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes academy-pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        @keyframes academy-dot-bounce {
          0%, 100% { transform: scale(0.75); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes academy-arrow-nudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }

        /* ===== Hero ===== */
        .academy-hero {
          padding: clamp(4rem, 8vw, 7rem) 0 clamp(5rem, 9vw, 8rem);
          background: radial-gradient(ellipse at 15% 18%, rgba(251, 191, 36, 0.10), transparent 38%), radial-gradient(ellipse at 82% 70%, rgba(194, 65, 12, 0.06), transparent 36%);
        }
        .academy-hero-bg-grid {
          background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.4;
        }
        .academy-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(22rem, 0.9fr);
          align-items: center;
          gap: clamp(3rem, 8vw, 8rem);
        }
        .academy-hero-copy {
          animation: academy-fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .academy-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          animation: academy-fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
          opacity: 0;
        }
        .academy-hero-title {
          font-size: clamp(3rem, 5vw, 5.5rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 600;
          animation: academy-fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both;
          opacity: 0;
        }
        .academy-hero-lead {
          font-size: clamp(1rem, 1.2vw, 1.25rem);
          line-height: 1.8;
          animation: academy-fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) 340ms both;
          opacity: 0;
        }
        .academy-btn-primary {
          background: #f4bd4b;
          color: var(--academy-ink);
          box-shadow: 0 10px 24px -12px rgba(128, 74, 0, 0.16);
          animation: academy-fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) 420ms both;
          opacity: 0;
        }
        .academy-btn-primary:hover {
          transform: translateY(-2px);
          background: #f8cc68;
          box-shadow: 0 16px 32px -14px rgba(128, 74, 0, 0.22);
        }
        .academy-btn-secondary {
          background: rgba(255, 255, 255, 0.85);
          color: var(--academy-ink);
          animation: academy-fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) 500ms both;
          opacity: 0;
        }
        .academy-btn-secondary:hover {
          background: #ffffff;
          border-color: #d9c078;
          transform: translateY(-1px);
        }
        .academy-hero-card-wrap {
          animation: academy-card-in 850ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .academy-hero-card {
          position: relative;
          isolation: isolate;
          width: min(100%, 34rem);
          min-height: 420px;
          margin-left: auto;
          overflow: hidden;
          border: 1px solid var(--academy-border);
          border-radius: 28px;
          background: linear-gradient(145deg, #fff 12%, #fffdf8 68%, #fff8e8);
          box-shadow: 0 28px 72px -36px rgba(70, 43, 17, 0.30);
          color: var(--academy-ink);
          transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms, box-shadow 350ms;
        }
        .academy-hero-card:hover {
          transform: translateY(-6px);
          border-color: #e6c981;
          box-shadow: 0 36px 80px -38px rgba(70, 43, 17, 0.36);
        }
        .academy-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 28px 16px;
          background: linear-gradient(135deg, #fff0d6, #fff8ed 62%, #fff);
          border-bottom: 1px solid #f1e5d4;
        }
        .academy-card-head h2 {
          margin: 4px 0 0;
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.25;
          color: var(--academy-ink);
        }
        .academy-form {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 14px 16px;
          padding: 20px 28px 28px;
        }
        .academy-field {
          display: block;
          min-width: 0;
          color: #51483f;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.01em;
        }
        .academy-input {
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 48px;
          margin-top: 7px;
          border: 1px solid #e8ddc8;
          border-radius: 14px;
          background: #fdfcf9;
          padding: 0 16px;
          color: var(--academy-ink);
          font-size: 15px;
          outline: none;
          transition: border-color 200ms, box-shadow 200ms, background-color 200ms, transform 200ms;
        }
        .academy-input:focus {
          transform: translateY(-1px);
          border-color: #c2410c;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(194, 65, 12, 0.12);
        }
        .academy-submit {
          grid-column: 1 / -1;
          display: block;
          width: 100%;
          min-height: 50px;
          margin-top: 6px;
          border: 0;
          border-radius: 14px;
          background: #f4bd4b;
          color: var(--academy-ink);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 200ms, box-shadow 200ms, background-color 200ms;
        }
        .academy-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          background: #f8cc68;
          box-shadow: 0 10px 22px rgba(128, 74, 0, 0.18);
        }
        .academy-submit:disabled {
          cursor: wait;
          opacity: 0.65;
        }
        .academy-form-note {
          grid-column: 1 / -1;
          margin: 0;
          padding-bottom: 4px;
          color: #6b6157;
          font-size: 12px;
          line-height: 1.5;
          text-align: center;
        }
        .academy-form-error {
          grid-column: 1 / -1;
          margin: 0;
          border: 1px solid #efc4b8;
          border-radius: 11px;
          background: #fff5f2;
          padding: 11px 14px;
          color: #9f2f17;
          font-size: 12px;
          line-height: 1.5;
        }

        /* ===== Stats ===== */
        .academy-stats {
          padding: clamp(3rem, 6vw, 4.5rem) 0;
          border-top: 1px solid var(--academy-border);
          border-bottom: 1px solid var(--academy-border);
          background: #fffaf1;
        }
        .academy-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: center;
        }
        .academy-stat-wrap {
          animation: academy-fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .academy-stat-card {
          position: relative;
          display: flex;
          min-height: 130px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px 24px;
          text-align: center;
        }
        .academy-stat-card:after {
          position: absolute;
          top: 16%;
          right: 0;
          bottom: 16%;
          width: 1px;
          background: #e9dece;
          content: "";
        }
        .academy-stat-wrap:last-child .academy-stat-card:after { display: none; }
        .academy-stat-value {
          margin: 0;
          color: #a63b0b;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 3.4rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.04em;
          transition: transform 300ms ease, color 300ms ease;
        }
        .academy-stat-card:hover .academy-stat-value {
          transform: translateY(-3px);
          color: #772c0b;
        }
        .academy-stat-rule {
          width: 28px;
          height: 2px;
          margin-top: 12px;
          background: #e6a52e;
          transform: scaleX(0.35);
          transform-origin: center;
          transition: transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .academy-stat-card:hover .academy-stat-rule {
          transform: scaleX(1);
        }
        .academy-stat-label {
          margin: 10px 0 0;
          color: #6b6157;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.075em;
          text-transform: uppercase;
        }

        /* ===== Skills ===== */
        .academy-skills {
          position: relative;
          display: flex;
          min-height: 80px;
          align-items: center;
          gap: clamp(20px, 4vw, 56px);
          overflow: hidden;
          border-top: 1px solid var(--academy-border);
          border-bottom: 1px solid var(--academy-border);
          background: linear-gradient(90deg, #fff8e8, #fdfcf9 45%, #fff8e8);
          padding: 16px clamp(20px, 4vw, 56px);
        }
        .academy-skills-head {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 10px;
          color: var(--academy-ink);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }
        .academy-skills-dot {
          position: relative;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e6a52e;
          animation: academy-dot-bounce 2s ease-in-out infinite;
        }
        .academy-skills-window {
          position: relative;
          min-width: 0;
          flex: 1;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .academy-skills-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 14px;
          animation: academy-skill-scroll 40s linear infinite;
        }
        .academy-skills-window:hover .academy-skills-track { animation-play-state: paused; }
        .academy-skill-chip {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
          border: 1px solid #eadfce;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.84);
          padding: 10px 16px;
          color: #40392f;
          font-size: 13px;
          font-weight: 600;
          transition: transform 220ms ease, border-color 220ms ease, background-color 220ms ease;
        }
        .academy-skill-chip:hover {
          transform: translateY(-2px);
          border-color: #e5bd69;
          background: #fff;
          color: var(--academy-ink);
        }
        .academy-skill-chip span { color: #d49a24; font-size: 12px; }
        @keyframes academy-skill-scroll { to { transform: translateX(-50%); } }

        /* ===== Programs ===== */
        .academy-program-wrap { animation: academy-fade-up 750ms cubic-bezier(0.16, 1, 0.3, 1) both; }
        .academy-program-card {
          position: relative;
          isolation: isolate;
          display: flex;
          height: 100%;
          min-height: 460px;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--academy-border);
          border-radius: 26px;
          background: linear-gradient(145deg, #fff 14%, #fffdf8 70%, #fff8e8);
          padding: 28px;
          box-shadow: 0 12px 32px -28px rgba(48, 37, 19, 0.30);
          transition: transform 380ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms, box-shadow 380ms;
        }
        .academy-program-card:hover {
          transform: translateY(-8px);
          border-color: #e6c981;
          box-shadow: 0 28px 52px -32px rgba(99, 66, 13, 0.30);
        }
        .academy-program-glow {
          position: absolute;
          z-index: -1;
          top: -60px;
          right: -56px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(244, 189, 75, 0.18), transparent 70%);
          opacity: 0.5;
          transition: transform 550ms, opacity 350ms;
        }
        .academy-program-card:hover .academy-program-glow {
          transform: scale(1.4);
          opacity: 0.95;
        }
        .academy-program-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .academy-program-index {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--academy-ink);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
        .academy-program-index span {
          color: #9a8b73;
          font-size: 10px;
          letter-spacing: 0.12em;
        }
        .academy-program-duration {
          border: 1px solid #eadfce;
          border-radius: 999px;
          background: #fffaf1;
          padding: 8px 12px;
          color: #61574a;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }
        .academy-program-kicker {
          margin: 32px 0 10px;
          color: #9a6410;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .academy-program-card h3 {
          margin: 0;
          color: var(--academy-ink);
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }
        .academy-program-desc {
          margin: 14px 0 0;
          color: #6b6157;
          font-size: 14px;
          line-height: 1.7;
        }
        .academy-program-highlights {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .academy-program-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #6b6157;
          font-size: 13px;
          line-height: 1.6;
        }
        .academy-program-highlights li span {
          color: #c2410c;
          font-size: 14px;
          margin-top: 1px;
        }
        .academy-program-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1c1917;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
          transition: color 200ms, border-color 200ms, gap 200ms;
        }
        .academy-program-link:hover {
          color: #c2410c;
          gap: 14px;
          border-bottom-color: #c2410c;
        }

        /* ===== Facilities ===== */
        .academy-facilities {
          padding: clamp(4rem, 7vw, 6rem) 0;
          border-top: 1px solid var(--academy-border);
          border-bottom: 1px solid var(--academy-border);
          background: linear-gradient(120deg, #fffaf1, #fdfcf9 55%, #fff8e8);
        }
        .academy-facilities-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 40px;
        }
        .academy-facility-wrap { height: 100%; min-width: 0; }
        .academy-facility-card {
          position: relative;
          display: flex;
          height: 100%;
          min-height: 200px;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--academy-border);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.76);
          padding: 22px;
          transition: transform 340ms cubic-bezier(0.16, 1, 0.3, 1), border-color 280ms, box-shadow 340ms, background-color 280ms;
        }
        .academy-facility-card:hover {
          transform: translateY(-6px);
          border-color: #e6c981;
          background: #fff;
          box-shadow: 0 20px 40px -28px rgba(99, 66, 13, 0.32);
        }
        .academy-facility-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .academy-facility-mark {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid #f0dfba;
          border-radius: 12px;
          background: #fff5dd;
          color: #a36c08;
          font-size: 16px;
        }
        .academy-facility-card:hover .academy-facility-mark {
          transform: none;
          background: #fff5dd;
        }
        .academy-facility-number {
          color: #aa9d89;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .academy-facility-card h3 {
          margin: 20px 0 0;
          color: var(--academy-ink);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.3;
        }
        .academy-facility-card p {
          margin: 10px 0 0;
          color: #6b6157;
          font-size: 13px;
          line-height: 1.65;
        }
        @media (max-width: 900px) {
          .academy-facilities-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 520px) {
          .academy-facilities-grid { grid-template-columns: 1fr; gap: 14px; margin-top: 32px; }
          .academy-facility-card { min-height: 170px; padding: 20px; }
        }

        /* ===== Story ===== */
        .academy-story {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: clamp(4.5rem, 8vw, 7rem) 0;
          background: radial-gradient(ellipse at 92% 5%, rgba(244, 189, 75, 0.12), transparent 32%), linear-gradient(115deg, #fffaf1, #fdfcf9 50%, #fff8e8);
          color: var(--academy-ink);
        }
        .academy-story-watermark {
          position: absolute;
          z-index: -1;
          top: -0.15em;
          right: 2vw;
          color: rgba(138, 91, 12, 0.035);
          font-family: var(--font-display);
          font-size: clamp(16rem, 40vw, 40rem);
          font-weight: 700;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .academy-story-top {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
          align-items: center;
          gap: clamp(2.5rem, 7vw, 7rem);
        }
        .academy-story-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          color: #8a5b0c;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .academy-story-eyebrow span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d6a02c;
          box-shadow: 0 0 0 5px rgba(214, 160, 44, 0.14);
        }
        .academy-story h2 {
          max-width: 13ch;
          margin: 22px 0 0;
          color: var(--academy-ink);
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5.5vw, 4.8rem);
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.05em;
        }
        .academy-story h2 span { color: #a8610b; }
        .academy-story-desc {
          max-width: 40rem;
          margin: 22px 0 0;
          color: #6b6157;
          font-size: 15px;
          line-height: 1.85;
        }
        .academy-story aside {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--academy-border);
          border-radius: 26px;
          background: linear-gradient(140deg, #fff, #fffaf1);
          padding: clamp(26px, 4vw, 40px);
          box-shadow: 0 24px 60px -42px rgba(70, 43, 17, 0.28);
          transition: transform 380ms, border-color 380ms;
        }
        .academy-story aside:hover {
          transform: translateY(-6px);
          border-color: #e2bf73;
        }
        .academy-story-label {
          color: #8a5b0c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }
        .academy-story aside > p {
          max-width: 11ch;
          margin: 22px 0 30px;
          color: var(--academy-ink);
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.035em;
        }
        .academy-story aside > div {
          border-top: 1px solid #eee3d3;
          padding-top: 20px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .academy-story aside article span {
          color: #8a5b0c;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.08em;
        }
        .academy-story aside article p {
          margin: 8px 0 0;
          color: #6b6157;
          font-size: 13px;
          line-height: 1.6;
        }
        .academy-story-principles {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0 28px;
          margin-top: clamp(3rem, 6vw, 4.5rem);
        }
        .academy-principle {
          position: relative;
          display: flex;
          min-height: 68px;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
          border-bottom: 1px solid var(--academy-border);
          padding: 14px 6px;
          transition: color 200ms;
        }
        .academy-principle span {
          color: #9a6410;
          font-size: 13px;
          font-weight: 700;
        }
        .academy-principle p {
          color: #6b6157;
          font-size: 13px;
          font-weight: 600;
        }
        .academy-story-journey {
          margin-top: 4rem;
          padding-top: 26px;
          border-top: 1px solid #eee3d3;
        }
        .academy-story-journey-heading h3 {
          color: var(--academy-ink);
          font-size: clamp(1.7rem, 3vw, 2.5rem);
        }
        .academy-story-journey-heading h3 span { color: #a8610b; }
        .academy-story-timeline {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 34px;
        }
        .academy-story-timeline:before {
          position: absolute;
          top: 6px;
          left: 8px;
          bottom: 6px;
          width: 1px;
          background: var(--academy-border);
          content: "";
        }
        .academy-story-milestone {
          position: relative;
          padding-left: 36px;
        }
        .academy-story-node {
          position: absolute;
          left: 0;
          top: 2px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d6a02c;
          box-shadow: 0 0 0 4px rgba(214, 160, 44, 0.18);
        }
        .academy-story-milestone strong {
          color: var(--academy-ink);
          font-size: 15px;
          font-weight: 600;
        }
        .academy-story-milestone p {
          margin-top: 3px;
          color: #6b6157;
          font-size: 13px;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .academy-story-top { grid-template-columns: 1fr; gap: 40px; }
          .academy-story-principles { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 20px; }
          .academy-story-timeline:before { top: 0; right: auto; bottom: 0; left: 8px; width: 1px; height: auto; }
        }

        /* ===== FAQ ===== */
        .academy-faq {
          padding: clamp(4rem, 7vw, 6rem) 0;
          border-top: 1px solid #eee3d3;
          border-bottom: 1px solid #eee3d3;
          background: linear-gradient(115deg, #fffaf1, #fdfcf9 50%, #fff8e8);
        }
        .academy-faq-layout {
          display: grid;
          grid-template-columns: minmax(16rem, 0.72fr) minmax(0, 1.28fr);
          align-items: start;
          gap: clamp(2.5rem, 6vw, 6rem);
        }
        .academy-faq-intro { position: sticky; top: 110px; }
        .academy-faq-eyebrow {
          margin: 0;
          color: #8a5b0c;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .academy-faq-intro h2 {
          margin: 17px 0 0;
          color: var(--academy-ink);
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 600;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }
        .academy-faq-intro h2 span { color: #a8610b; }
        .academy-faq-copy {
          max-width: 22rem;
          margin: 16px 0 0;
          color: #6b6157;
          font-size: 14px;
          line-height: 1.7;
        }
        .academy-faq-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          margin-top: 30px;
          border-left: 2px solid #e6ad37;
          padding: 4px 0 4px 14px;
          color: #6b6157;
          text-decoration: none;
        }
        .academy-faq-contact > span {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .academy-faq-contact strong {
          color: var(--academy-ink);
          font-size: 15px;
          font-weight: 700;
        }
        .academy-faq-contact strong span {
          display: inline-block;
          color: #9a6410;
          transition: transform 200ms;
        }
        .academy-faq-contact:hover strong span { transform: translate(4px, -3px); }
        .academy-faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          align-items: start;
          grid-auto-rows: max-content;
        }
        .academy-faq-wrap { min-width: 0; }
        .academy-faq-item {
          height: auto;
          overflow: hidden;
          border: 1px solid #e9dece;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.86);
          transition: transform 280ms, border-color 280ms, box-shadow 280ms;
        }
        .academy-faq-item:hover, .academy-faq-item.is-open {
          border-color: #e2bf73;
          box-shadow: 0 16px 32px -28px rgba(99, 66, 13, 0.32);
        }
        .academy-faq-item:hover { transform: translateY(-2px); }
        .academy-faq-question {
          display: grid;
          width: 100%;
          min-height: 100px;
          grid-template-columns: 32px minmax(0, 1fr) 32px;
          align-items: center;
          gap: 12px;
          border: 0;
          background: transparent;
          padding: 16px 20px;
          text-align: left;
          cursor: pointer;
          transition: color 200ms;
        }
        .academy-faq-number {
          color: #a36c08;
          font-size: 13px;
          font-weight: 800;
        }
        .academy-faq-qtext {
          color: var(--academy-ink);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
        }
        .academy-faq-toggle {
          color: #c2410c;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
          transition: transform 250ms ease;
        }
        .academy-faq-item.is-open .academy-faq-toggle { transform: rotate(45deg); }
        .academy-faq-answer {
          margin: 0;
          padding: 0 20px 20px;
          color: #6b6157;
          font-size: 14px;
          line-height: 1.7;
          animation: academy-fade-up 350ms ease both;
        }
        @media (max-width: 900px) {
          .academy-faq-layout { grid-template-columns: 1fr; gap: 40px; }
          .academy-faq-intro { position: static; }
          .academy-faq-grid { grid-template-columns: 1fr; }
        }

        /* ===== Contact ===== */
        .academy-contact {
          padding: clamp(4rem, 7vw, 6rem) 0 4rem;
          background: linear-gradient(135deg, #fdfcf9, #fffaf1 58%, #f8f4ec);
        }
        .academy-contact-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          grid-template-rows: auto auto;
          gap: 24px 40px;
          align-items: start;
        }
        .academy-contact-copy { grid-column: 1; grid-row: 1; }
        .academy-contact-eyebrow {
          margin: 0;
          color: #8a5b0c;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .academy-contact-copy h2 {
          max-width: 11ch;
          margin: 16px 0 0;
          color: var(--academy-ink);
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 600;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }
        .academy-contact-copy h2 span { color: #9a6410; }
        .academy-contact-desc {
          max-width: 28rem;
          margin: 16px 0 0;
          color: #6b6157;
          font-size: 14px;
          line-height: 1.75;
        }
        .academy-contact-list { grid-column: 1; grid-row: 2; display: grid; gap: 10px; }
        .academy-contact-item {
          display: flex;
          min-height: 72px;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid var(--academy-border);
          padding: 12px 10px;
          transition: background-color 240ms, padding 240ms;
        }
        .academy-contact-item:hover {
          padding-right: 16px;
          padding-left: 16px;
          background: rgba(255, 255, 255, 0.68);
        }
        .academy-contact-item > span {
          display: grid;
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          place-items: center;
          border: 1px solid #ecd8ad;
          border-radius: 12px;
          background: #fff4db;
          color: #8a5b0c;
          font-size: 11px;
          font-weight: 800;
        }
        .academy-contact-item div { min-width: 0; flex: 1; }
        .academy-contact-item div p {
          margin: 0;
          color: #837766;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .academy-contact-item div a,
        .academy-contact-item div strong {
          display: block;
          margin-top: 5px;
          overflow-wrap: anywhere;
          color: #24211c;
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
        }
        .academy-contact-item div a:hover { color: #8a5b0c; }
        .academy-contact-item > b {
          color: #b09d7e;
          font-size: 14px;
          transition: transform 200ms, color 200ms;
        }
        .academy-contact-item:hover > b { transform: translate(4px, -4px); color: #8a5b0c; }
        .academy-map-reveal {
          grid-column: 2;
          grid-row: 1 / span 2;
          align-self: center;
          width: 100%;
        }
        .academy-map-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--academy-border);
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 24px 60px -38px rgba(70, 43, 17, 0.28);
        }
        .academy-map-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 28px 0;
        }
        .academy-map-heading div span {
          color: #8a5b0c;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .academy-map-heading div h3 {
          margin: 8px 0 0;
          color: var(--academy-ink);
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 600;
          line-height: 1.15;
        }
        .academy-map-heading div p {
          margin: 5px 0 0;
          color: #6b6157;
          font-size: 12px;
          line-height: 1.5;
        }
        .academy-map-heading a {
          align-self: flex-start;
          margin-top: 6px;
          color: #c2410c;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: color 200ms;
        }
        .academy-map-heading a:hover { color: #9a3412; }
        .academy-map-frame {
          height: 320px;
          border-top: 1px solid var(--academy-border);
        }
        .academy-map-frame iframe { width: 100%; height: 100%; border: 0; }
        @media (max-width: 900px) {
          .academy-contact-layout {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            gap: 32px 0;
          }
          .academy-map-reveal { grid-column: 1; grid-row: 3; }
        }
        .academy-final-cta {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--academy-border);
          border-radius: 28px;
          background: linear-gradient(115deg, #fffaf1, #fff 58%, #fff8e8);
          padding: clamp(30px, 5vw, 48px);
          color: var(--academy-ink);
          box-shadow: 0 20px 50px -38px rgba(70, 43, 17, 0.28);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }
        .academy-final-cta div span {
          color: #8a5b0c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .academy-final-cta div h2 {
          margin: 10px 0 0;
          color: var(--academy-ink);
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 3.5vw, 2.8rem);
          font-weight: 600;
          line-height: 1.03;
          letter-spacing: -0.04em;
        }
        .academy-final-cta div p {
          max-width: 34rem;
          margin: 10px 0 0;
          color: #6b6157;
          font-size: 11px;
          line-height: 1.6;
        }
        .academy-final-cta a {
          position: relative;
          z-index: 1;
          display: inline-flex;
          min-height: 46px;
          flex: 0 0 auto;
          align-items: center;
          gap: 12px;
          border-radius: 999px;
          background: #f4bd4b;
          padding: 0 18px;
          color: var(--academy-ink);
          font-size: 11px;
          font-weight: 750;
          text-decoration: none;
          transition: transform 200ms, background-color 200ms;
        }
        .academy-final-cta a:hover {
          transform: translateY(-2px);
          background: #f8cc68;
        }
        @media (max-width: 700px) {
          .academy-final-cta { align-items: flex-start; flex-direction: column; text-align: center; gap: 20px; }
        }

        /* ===== Reveal overrides ===== */
        .academy-reveal { animation: none; }
        .academy-reveal.is-visible { animation: academy-fade-up 800ms cubic-bezier(0.16, 1, 0.3, 1) both; }

        @media (prefers-reduced-motion: reduce) {
          .academy-hero-copy, .academy-badge, .academy-hero-title, .academy-hero-lead,
          .academy-btn-primary, .academy-btn-secondary, .academy-hero-card-wrap,
          .academy-stat-wrap, .academy-program-wrap, .academy-facility-wrap,
          .academy-story-milestone-wrap, .academy-faq-wrap, .academy-faq-answer,
          .academy-final-cta, .academy-skill-chip, .academy-skill-track {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .academy-skills-track { animation: none; }
          .academy-skills-dot { animation: none; }
        }
      `}</style>
    </div>
  );
}
