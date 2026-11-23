import { Reveal } from "@/components/reveal";
import { ServiceLeadForm } from "@/components/service-lead-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const promises = [
  "A sitemap and wireframes before a single pixel is drawn",
  "A fixed price, agreed before we start",
  "Performance and accessibility targets in the contract",
];

const projectNeeds = [
  "A new website",
  "A website redesign",
  "Digital marketing",
  "Brand identity and design",
  "Software or SaaS product",
  "Real Estate CRM",
  "Not sure yet",
];

export function StartProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref="#project-enquiry" />
      <main>
        <section className="project-page-hero">
          <div className="project-page-container">
            <div className="project-page-grid">
              <Reveal className="project-page-copy">
                <div>
                  <p className="project-page-eyebrow">Get started</p>
                  <h1>Scope a build</h1>
                  <p className="project-page-lede">
                    Tell us what the site has to achieve. We will send back a
                    page-by-page structure, a timeline and a fixed price.
                  </p>
                  <ul className="project-page-promises">
                    {promises.map((promise) => (
                      <li key={promise}>
                        <span aria-hidden="true" />
                        {promise}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120} className="project-page-form-reveal">
                <div id="project-enquiry" className="svc-lead-card project-page-form-card">
                  <ServiceLeadForm
                    serviceName="project scoping"
                    needs={projectNeeds}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
