import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";

const platforms = [
  {
    number: "01",
    abbreviation: "EC",
    category: "REAL-ESTATE CRM",
    name: "Eswari Connects",
    description:
      "Keep property enquiries, team assignments, projects and follow-ups together, from first contact through closure.",
    bestFor: "Real-estate sales teams",
    metrics: [
      ["500+", "Active leads"],
      ["50+", "Projects"],
      ["98%", "Satisfaction"],
    ],
    modules: ["Lead capture", "Team assignments", "Project inventory", "Follow-up tracking"],
    workflow: ["Capture", "Assign", "Follow up", "Close"],
    href: "/start-project.html",
    action: "Ask about Eswari Connects",
  },
  {
    number: "02",
    abbreviation: "SE",
    category: "EDUCATION ERP",
    name: "SmartEduConnect",
    description:
      "Coordinate everyday school operations in one workspace, with information flowing between administrators, staff and families.",
    bestFor: "Schools and education teams",
    metrics: [
      ["6", "Core modules"],
      ["24/7", "Parent updates"],
      ["98%", "Collection tracking"],
    ],
    modules: ["Admissions", "Attendance", "Fees and exams", "Staff operations", "Parent updates"],
    workflow: ["Admit", "Manage", "Inform", "Report"],
    href: "/start-project.html",
    action: "Ask about SmartEduConnect",
  },
];

export function SaasProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="/start-project.html" />
      <main className="saas-clean-page">
        <section className="saas-clean-hero">
          <Container>
            <div className="saas-clean-hero-content">
              <p className="saas-clean-eyebrow"><span /> ASE SOFTWARE</p>
              <h1>Useful software for<br /><span>teams with real work to do.</span></h1>
              <p>Two focused platforms help real-estate and education teams organize daily operations, follow-ups and communication.</p>
              <a href="#platforms" className="saas-clean-text-link">Compare the platforms <span aria-hidden="true">↓</span></a>
            </div>
          </Container>
        </section>

        <section className="saas-clean-platforms" id="platforms">
          <Container>
            <div className="saas-clean-section-heading">
              <p className="saas-clean-eyebrow"><span /> CHOOSE YOUR WORKSPACE</p>
              <h2>Two platforms.<br /><span>Clearer day-to-day work.</span></h2>
              <p>Start with the product built around your team’s workflow.</p>
            </div>
            <div className="saas-clean-grid">
              {platforms.map((platform, index) => (
                <Reveal key={platform.name} delay={index * 100}>
                  <article className="saas-clean-card">
                    <header className="saas-clean-card-header">
                      <span className="saas-clean-product-mark">{platform.abbreviation}</span>
                      <div><p>{platform.category}</p><h3>{platform.name}</h3></div>
                    </header>
                    <p className="saas-clean-description">{platform.description}</p>
                    <div className="saas-clean-metrics">{platform.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
                    <div className="saas-clean-detail"><span>BEST FOR</span><p>{platform.bestFor}</p></div>
                    <div className="saas-clean-detail"><span>KEY TOOLS</span><ul>{platform.modules.map((module) => <li key={module}>{module}</li>)}</ul></div>
                    <div className="saas-clean-workflow"><span>Typical workflow</span><ol>{platform.workflow.map((step, stepIndex) => <li key={step}><i>{stepIndex + 1}</i>{step}</li>)}</ol></div>
                    <a href={platform.href} className="saas-clean-card-link">{platform.action}<span aria-hidden="true">→</span></a>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="saas-clean-cta-section">
          <Container>
            <Reveal><div className="saas-clean-cta"><div><p className="saas-clean-eyebrow"><span /> FIND YOUR FIT</p><h2>Not sure which platform<br /><span>fits your team?</span></h2><p>Tell us how your work runs today. We’ll help you identify the right starting point and arrange a walkthrough.</p></div><a href="/start-project.html">Talk with our team <span aria-hidden="true">→</span></a></div></Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
