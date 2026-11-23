import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";

const goodFit = [
  "You are a small team doing real work.",
  "You want marketing run, not planned.",
  "You need a product, not a template.",
];

const notAFit = [
  "You need enterprise governance.",
  "You want a managed marketing hire.",
];

export function Fit() {
  return (
    <section className="fit-section">
      <Container>
        <Reveal className="fit-heading-reveal">
          <div className="fit-heading">
            <p className="fit-eyebrow">The right partnership</p>
            <h2 className="text-headline-lg text-on-surface">Who this is for</h2>
          </div>
        </Reveal>

        <div className="fit-grid">
          <Reveal delay={100} className="fit-card-reveal">
            <article className="fit-card fit-card--good">
              <div className="fit-card-heading">
                <span className="fit-card-mark fit-card-mark--good" aria-hidden="true">
                  <CheckIcon />
                </span>
                <h3 className="text-title-lg text-on-surface">A good fit if</h3>
              </div>
              <ul className="fit-list">
                {goodFit.map((item) => (
                  <li key={item} className="fit-item">
                    <span className="fit-item-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span className="text-body-md text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={220} className="fit-card-reveal">
            <article className="fit-card fit-card--not">
              <div className="fit-card-heading">
                <span className="fit-card-mark fit-card-mark--not" aria-hidden="true">–</span>
                <h3 className="text-title-lg text-on-surface">Not for you if</h3>
              </div>
              <ul className="fit-list">
                {notAFit.map((item) => (
                  <li key={item} className="fit-item">
                    <span className="fit-item-dot" aria-hidden="true" />
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
