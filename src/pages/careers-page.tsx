import { useState, type FormEvent } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { CareersApplicationIllustration } from "@/components/careers-application-illustration";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";

const careersSheetsEndpoint =
  import.meta.env.VITE_CAREERS_SHEETS_WEB_APP_URL ||
  "https://script.google.com/macros/s/AKfycbzfLsIInadrzwNVLhOfRJ5uwBFX-LthCCKNNwQqmc0FxoFTTaIZJvGYkD_j3o5CEF3EXA/exec";

const culturePillars = [
  {
    number: "01",
    title: "Learn more. Grow faster.",
    description:
      "We believe in learning by doing. Explore new areas, take on responsibilities, develop new skills and gain hands-on experience. Every challenge is an opportunity to learn something new.",
  },
  {
    number: "02",
    title: "Collaborate. Share. Succeed.",
    description:
      "Good ideas can come from anyone. We encourage open conversations, knowledge sharing, constructive feedback and teamwork. We believe in lifting each other up rather than moving ahead alone.",
  },
  {
    number: "03",
    title: "Take ownership. Make an impact.",
    description:
      "We encourage people to take initiative, think independently, embrace challenges and take responsibility for their work. Your ideas matter, your contributions count and your efforts make a difference.",
  },
];

const openings = [
  {
    title: "B2B Sales Manager",
    experience: "3–7 years",
    description:
      "Take ownership of our sales function, build strong client relationships, lead business development efforts and drive revenue growth. If you have experience in B2B IT sales—or are willing to work in IT sales—and can build and lead a team, we’d love to hear from you.",
    details: [],
    location: "On-site · Visakhapatnam",
  },
  {
    title: "Business Development Manager",
    experience: "1–3 years",
    description:
      "Identify business opportunities, generate qualified leads, engage with corporate clients and contribute to revenue growth. If you have a passion for sales, strong communication skills and the confidence to build client relationships, this opportunity is for you.",
    details: [],
    location: "On-site · Visakhapatnam",
  },
  {
    title: "Business Development Associate",
    experience: "Freshers welcome",
    description:
      "Starting your career in business development? Learn, explore and build a strong foundation in B2B sales. Gain hands-on experience in lead generation, client communication, corporate sales, market research and relationship management alongside an experienced team.",
    details: [
      {
        label: "Eligibility",
        text: "Graduates and postgraduates from any discipline. 2025 and 2026 graduates are eligible.",
      },
      {
        label: "What you’ll gain",
        text: "Practical sales experience, professional training, communication skills and opportunities for career progression.",
      },
    ],
    location: "On-site · Visakhapatnam",
  },
];

const faqs = [
  {
    question: "How can candidates apply at ASE?",
    answer:
      "Apply using the form on this page. You can also email your resume and the role you’re interested in to careers@asetechnologies.in.",
  },
  {
    question: "What is our hiring process?",
    answer:
      "Our process includes application screening, a skill assessment, interview rounds and a final selection discussion.",
  },
  {
    question: "Who can apply for jobs with us?",
    answer:
      "Both freshers and experienced professionals can apply for suitable roles based on their skills. The Business Development Associate role is open to graduates and postgraduates from any discipline, including 2025 and 2026 graduates.",
  },
  {
    question: "Do we offer internships?",
    answer:
      "Yes. We provide structured internships with hands-on project experience and team mentorship.",
  },
  {
    question: "How long does hiring take?",
    answer:
      "The hiring process typically takes 1–3 weeks, depending on the role and interview stages.",
  },
];

export function CareersPage() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [selectedRole, setSelectedRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSent, setApplicationSent] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleApplicationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = new FormData(event.currentTarget);
    const resume = form.get("resumeFile");
    if (!(resume instanceof File) || resume.size === 0) {
      setSubmitError("Please attach your resume.");
      return;
    }
    if (resume.size > 5 * 1024 * 1024) {
      setSubmitError("Your resume must be 5 MB or smaller.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setApplicationSent(false);

    try {
      const resumeDataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result !== "string") {
            reject(new Error("Could not read the selected resume."));
            return;
          }
          resolve(reader.result.split(",")[1] ?? "");
        };
        reader.onerror = () => reject(reader.error ?? new Error("Could not read the selected resume."));
        reader.readAsDataURL(resume);
      });

      await fetch(careersSheetsEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          fullName: form.get("fullName"),
          email: form.get("email"),
          phone: form.get("phone"),
          position: form.get("role"),
          portfolio: form.get("portfolio"),
          message: form.get("message"),
          resume: {
            name: resume.name,
            mimeType: resume.type,
            base64: resumeDataUrl,
          },
        }),
        mode: "no-cors",
      });
      setApplicationSent(true);
    } catch {
      setSubmitError("We couldn’t send your application. Please try again or email your resume to careers@asetechnologies.in.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="#open-positions" />
      <main>
        <section className="pb-14 pt-20 sm:pb-20 sm:pt-24 lg:pt-28">
          <Container>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-8 lg:gap-12">
              <Reveal className="mx-auto w-full min-w-0 max-w-3xl lg:mx-0">
                <h1 className="max-w-[13ch] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-on-surface sm:text-5xl lg:text-6xl">
                  Build your future <span className="text-secondary">with ASE.</span>
                </h1>
                <p className="mt-5 max-w-xl text-body-md text-on-surface-variant sm:mt-6 sm:text-body-lg">
                  Great work begins with great people. Bring your curiosity,
                  your ideas and your ambition—and make a meaningful
                  difference with a team that moves forward together.
                </p>
                <a
                  href="#open-positions"
                  className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 py-3 text-label-md text-on-primary shadow-elevation-sm transition-colors hover:bg-inverse-primary sm:mt-8"
                >
                  Explore open positions
                  <ArrowRightIcon className="size-5" aria-hidden="true" />
                </a>
                <p className="mt-4 text-sm text-on-surface-variant">
                  Fresh ideas welcome. Freshers welcome. Good people always.
                </p>
              </Reveal>

              <Reveal delay={120} className="mx-auto w-full min-w-0 max-w-3xl lg:mx-0">
                <div className="rounded-3xl bg-surface-container-low p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-label-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                      What brings us together
                    </p>
                    <span className="rounded-full bg-primary-container px-3 py-1 text-label-sm text-on-primary-container">
                      ASE culture
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-on-surface sm:text-4xl">
                    Better work, <span className="text-secondary">together.</span>
                  </h2>
                  <div className="mt-6 divide-y divide-outline-variant">
                    {[
                      ["01", "Different minds", "Fresh perspectives make room for better ideas."],
                      ["02", "Shared ideas", "We learn from one another and solve things together."],
                      ["03", "One team", "We support each other and celebrate progress together."],
                    ].map(([number, title, description]) => (
                      <div key={number} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4">
                        <span className="pt-0.5 text-label-sm font-semibold text-secondary">{number}</span>
                        <div>
                          <h3 className="text-title-lg">{title}</h3>
                          <p className="mt-1 text-sm leading-6 text-on-surface-variant">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 border-t border-outline-variant pt-4 text-sm font-medium text-on-surface-variant">
                    People first, always.
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-20">
              <Reveal className="md:pr-4">
                <p className="text-label-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                  More than a job
                </p>
                <h2 className="mt-4 max-w-md text-headline-lg">
                  Work that feels better, together.
                </h2>
                <p className="mt-6 max-w-md border-l-2 border-primary pl-5 text-title-lg leading-relaxed text-on-surface-variant">
                  We don’t just build careers. We build people, possibilities
                  and a culture where everyone moves forward together.
                </p>
              </Reveal>
              <Reveal delay={100} className="space-y-5 text-body-md text-on-surface-variant sm:text-body-lg">
                <p className="max-w-xl rounded-2xl border border-outline-variant bg-surface-bright px-6 py-6 leading-relaxed sm:px-8 sm:py-7">
                  At ASE, we welcome passionate, curious and career-driven
                  people who are ready to challenge themselves, explore new
                  possibilities and make a meaningful difference through their
                  work.
                </p>
                <p>
                  Whether you bring fresh ideas, love solving problems, enjoy
                  learning new things or are ready to take on a new challenge,
                  there’s room for you to make an impact here.
                </p>
                <p>
                  We collaborate, brainstorm, experiment and find better ways
                  to get things done. We share what we know, learn from what
                  we don’t and celebrate the little wins along the way.
                </p>
                <p>
                  We take our work seriously, but make room for conversations,
                  laughter, creativity and meaningful connections. The best
                  work happens when people enjoy doing it together.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-surface-container-low py-16 sm:py-24">
          <Container>
            <div className="mb-8 grid gap-4 sm:mb-10 md:mb-12 md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] md:items-end md:gap-8">
              <Reveal>
                <p className="text-label-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                  A culture that helps you grow
                </p>
                <h2 className="mt-4 max-w-[18ch] text-headline-lg">
                  Good work. Good people. Real growth.
                </h2>
              </Reveal>
              <p className="max-w-md text-body-md text-on-surface-variant md:justify-self-end">
                We grow people, not just businesses. Your growth is part of our
                success.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {culturePillars.map((pillar, index) => (
                <Reveal key={pillar.number} delay={index * 90}>
                  <article className="flex h-full flex-col rounded-3xl border border-outline-variant/70 bg-surface-bright p-6 sm:p-7 lg:p-8">
                    <span className="flex size-12 items-center justify-center rounded-full bg-primary-container font-display text-title-lg text-on-primary-container">
                      {pillar.number}
                    </span>
                    <h3 className="mt-8 text-title-lg">{pillar.title}</h3>
                    <p className="mt-4 flex-1 text-body-md text-on-surface-variant">
                      {pillar.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-5">
              <div className="grid gap-4 rounded-2xl border border-outline-variant bg-surface-bright p-6 sm:p-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-8">
                <div className="flex items-start gap-4 md:pr-4">
                  <span aria-hidden="true" className="mt-1 size-3 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="text-label-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                      Our belief
                    </p>
                    <p className="mt-2 text-body-md text-on-surface-variant">
                      People make the difference.
                    </p>
                  </div>
                </div>
                <p className="font-display text-xl font-semibold leading-snug text-on-surface sm:text-2xl md:border-l md:border-outline-variant md:pl-8">
                  We learn as individuals, succeed as a team and{" "}
                  <span className="text-secondary">move forward together.</span>
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="open-positions" className="scroll-mt-24 py-16 sm:py-24">
          <Container>
            <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
              <Reveal>
                <p className="text-label-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                  Find your next step
                </p>
                <h2 className="mt-4 text-headline-lg">Open positions</h2>
              </Reveal>
              <p className="max-w-md text-body-md text-on-surface-variant">
                Explore an opportunity that fits your experience—or start your
                career with us.
              </p>
            </div>
            <div className="space-y-4">
              {openings.map((opening, index) => (
                <Reveal key={opening.title} delay={index * 70}>
                  <article className="grid gap-6 rounded-3xl border border-outline-variant/80 bg-surface-bright p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-title-lg sm:text-2xl">{opening.title}</h3>
                        <span className="rounded-full bg-primary-container px-3 py-1 text-label-sm text-on-primary-container">
                          {opening.experience}
                        </span>
                      </div>
                      <p className="mt-4 max-w-3xl text-body-md text-on-surface-variant">
                        {opening.description}
                      </p>
                      {opening.details.length > 0 && (
                        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                          {opening.details.map((detail) => (
                            <div key={detail.label} className="rounded-2xl bg-surface-container-low p-4">
                              <dt className="text-label-md text-on-surface">{detail.label}</dt>
                              <dd className="mt-1 text-sm leading-6 text-on-surface-variant">{detail.text}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <p className="mt-4 text-sm font-medium text-on-surface-variant">
                        {opening.location}
                      </p>
                    </div>
                    <a
                      href="#application-form"
                      onClick={() => setSelectedRole(opening.title)}
                      className="inline-flex h-12 items-center justify-center gap-2 self-start rounded-full border border-outline-variant px-5 text-label-md text-on-surface transition-colors hover:border-primary hover:bg-primary-container lg:self-center"
                    >
                      Apply for this role
                      <ArrowRightIcon className="size-5" aria-hidden="true" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-surface-container-low py-16 sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <Reveal>
                <p className="text-label-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                  A few helpful details
                </p>
                <h2 className="mt-4 text-headline-lg">Questions? We’ve got you.</h2>
                <p className="mt-5 max-w-sm text-body-md text-on-surface-variant">
                  Here’s what to expect when you take the next step with ASE.
                </p>
              </Reveal>
              <div className="divide-y divide-outline-variant border-y border-outline-variant">
                {faqs.map((faq, index) => {
                  const expanded = openFaq === index;
                  const panelId = `careers-faq-${index}`;
                  return (
                    <article key={faq.question} className="py-1">
                      <h3>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={panelId}
                          onClick={() => setOpenFaq(expanded ? -1 : index)}
                          className="flex w-full items-center justify-between gap-5 py-5 text-left text-title-lg"
                        >
                          <span>{faq.question}</span>
                          <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-bright text-xl">
                            {expanded ? "−" : "+"}
                          </span>
                        </button>
                      </h3>
                      <div
                        id={panelId}
                        hidden={!expanded}
                        className="max-w-2xl pb-5 pr-12 text-body-md text-on-surface-variant"
                      >
                        {faq.answer}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <section id="application-form" className="scroll-mt-24 py-16 sm:py-24">
          <Container>
            <Reveal>
              <div className="grid gap-8 rounded-3xl border border-outline-variant bg-surface-bright p-6 sm:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 lg:p-12">
                <div>
                  <p className="text-label-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                    Your next chapter
                  </p>
                  <h2 className="mt-4 text-headline-lg">
                    Apply to ASE.
                  </h2>
                  <p className="mt-4 text-body-md text-on-surface-variant">
                    Apply for an open role using the form. You can also email
                    your resume to{" "}
                      <a
                        href="mailto:careers@asetechnologies.in"
                        className="font-semibold text-on-surface underline underline-offset-4"
                      >
                        careers@asetechnologies.in
                    </a>
                    .
                  </p>
                  <CareersApplicationIllustration />
                </div>
                <form
                  onSubmit={handleApplicationSubmit}
                  onChange={() => setApplicationSent(false)}
                  className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2"
                >
                  {applicationSent && (
                    <p
                      role="status"
                      className="col-span-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm leading-6 text-on-surface-variant"
                    >
                      Your application request was sent. If you need help, email{" "}
                      <a href="mailto:careers@asetechnologies.in" className="font-semibold text-on-surface underline underline-offset-4">
                        careers@asetechnologies.in
                      </a>
                      .
                    </p>
                  )}
                  {submitError && (
                    <p role="alert" className="col-span-full rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm leading-6 text-red-900">
                      {submitError}
                    </p>
                  )}
                  <div>
                    <label htmlFor="career-name" className="mb-2 block text-label-md text-on-surface">
                      Full name
                    </label>
                    <input
                      id="career-name"
                      name="fullName"
                      autoComplete="name"
                      maxLength={120}
                      required
                      className="h-12 w-full rounded-xl border border-outline-variant bg-background px-4 text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-email" className="mb-2 block text-label-md text-on-surface">
                      Email address
                    </label>
                    <input
                      id="career-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      required
                      className="h-12 w-full rounded-xl border border-outline-variant bg-background px-4 text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-phone" className="mb-2 block text-label-md text-on-surface">
                      Phone number
                    </label>
                    <input
                      id="career-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      className="h-12 w-full rounded-xl border border-outline-variant bg-background px-4 text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-primary"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-role" className="mb-2 block text-label-md text-on-surface">
                      Position
                    </label>
                    <select
                      id="career-role"
                      name="role"
                      required
                      value={selectedRole}
                      onChange={(event) => setSelectedRole(event.target.value)}
                      className="h-12 w-full rounded-xl border border-outline-variant bg-background px-4 text-body-md text-on-surface focus:border-primary"
                    >
                      <option value="" disabled>Select a position</option>
                      {openings.map((opening) => (
                        <option key={opening.title} value={opening.title}>
                          {opening.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="career-resume" className="mb-2 block text-label-md text-on-surface">
                      Upload resume <span className="font-normal text-on-surface-variant">(PDF, DOC, or DOCX · max 5 MB)</span>
                    </label>
                    <input
                      id="career-resume"
                      name="resumeFile"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      required
                      className="min-h-12 w-full rounded-xl border border-outline-variant bg-background text-sm text-on-surface file:mr-4 file:h-12 file:border-0 file:bg-primary-container file:px-4 file:font-semibold file:text-on-primary-container focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-portfolio" className="mb-2 block text-label-md text-on-surface">
                      Portfolio link <span className="font-normal text-on-surface-variant">(optional)</span>
                    </label>
                    <input
                      id="career-portfolio"
                      name="portfolio"
                      type="url"
                      maxLength={2048}
                      className="h-12 w-full rounded-xl border border-outline-variant bg-background px-4 text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-primary"
                      placeholder="https://..."
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="career-message" className="mb-2 block text-label-md text-on-surface">
                      A note for our team <span className="font-normal text-on-surface-variant">(optional)</span>
                    </label>
                    <textarea
                      id="career-message"
                      name="message"
                      rows={4}
                      maxLength={2000}
                      className="w-full resize-y rounded-xl border border-outline-variant bg-background px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-primary"
                      placeholder="Tell us what makes this role interesting to you."
                    />
                  </div>
                  <div className="col-span-full grid gap-3 border-t border-outline-variant pt-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:gap-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-label-md text-on-primary transition-colors hover:bg-inverse-primary disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                    >
                      {isSubmitting ? "Submitting…" : applicationSent ? "Application sent" : "Submit application"}
                      <ArrowRightIcon className="size-5" aria-hidden="true" />
                    </button>
                    <p className="max-w-md text-sm leading-6 text-on-surface-variant sm:justify-self-end">
                      Resume files are limited to 5 MB. Please email careers@asetechnologies.in if you have trouble submitting.
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
