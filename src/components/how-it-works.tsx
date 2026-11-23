import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    number: "01",
    title: "We scope",
    description: "Your goal, your market, the numbers.",
  },
  {
    number: "02",
    title: "We plan",
    description: "Channels, budget, and what ships first.",
  },
  {
    number: "03",
    title: "We run it",
    description: "Work goes live, results get reported.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="process-section scroll-mt-24">
      <Container>
        <Reveal className="process-heading-reveal">
          <div className="process-heading">
            <p className="process-eyebrow"><span aria-hidden="true" /> Our process</p>
            <h2 className="text-headline-lg text-on-surface">How we work</h2>
          </div>
        </Reveal>

        <ol className="process-grid">
          {steps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 120} className="process-card-reveal">
                <article className="process-card">
                  <div className="process-card-meta">
                    <span className="process-number">{step.number}</span>
                    <span className="process-card-label">Step {step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
