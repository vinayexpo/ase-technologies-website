import { EmailCapture } from "@/components/email-capture";
import { Reveal } from "@/components/reveal";
import { RevealWords } from "@/components/reveal-words";
import { Container } from "@/components/ui/container";

/** Shared opening block for the service pages. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-hero">
      <Container>
        <p className="section-eyebrow">{eyebrow}</p>
        <Reveal>
          <h1 className="page-title">
            <RevealWords text={title} />
          </h1>
        </Reveal>
        <p className="page-lead">{lead}</p>
        <Reveal delay={160}>
          <EmailCapture className="mt-9 w-full max-w-[34rem]" />
        </Reveal>
      </Container>
    </section>
  );
}
