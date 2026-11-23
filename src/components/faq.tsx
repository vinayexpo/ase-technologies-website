import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const questions = [
  {
    question: "Which service should we start with?",
    answer:
      "The one your customers already search for. We tell you in the first call.",
  },
  {
    question: "Do you build the product or just advise?",
    answer:
      "We build. Fixed scope, clear milestones, and you own the code and the data.",
  },
  {
    question: "Can you build something custom?",
    answer: "Yes. Web and mobile apps, scoped from your workflow and your data.",
  },
  {
    question: "How long until something is live?",
    answer: "Two weeks to a live plan, and campaigns running the week after.",
  },
  {
    question: "Do you work with small teams?",
    answer: "Yes. Small and medium businesses are who we build for.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const existing = document.getElementById("homepage-faq-schema");
    const schema = existing ?? document.createElement("script");
    schema.id = "homepage-faq-schema";
    schema.setAttribute("type", "application/ld+json");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
    if (!existing) document.head.appendChild(schema);
  }, []);

  return (
    <section id="faq" className="scroll-mt-24 bg-white text-ink py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-208 space-y-8">
          <div className="text-center">
            <h2 className="text-headline-lg font-display font-semibold leading-[1.02] tracking-tight text-ink">
              Common questions
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Clear answers to help you decide.
            </p>
          </div>

          <div className="space-y-3">
            {questions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300",
                    isOpen ? "border-ink-light shadow-lg" : "",
                  )}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium text-ink group-hover:text-ink transition-colors duration-200">
                      {item.question}
                    </span>
                    <div
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full border border-border bg-white text-ink transition-transform duration-300",
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
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-out",
                      isOpen
                        ? "max-h-50 opacity-100 mt-0 border-t border-border px-8 pb-8"
                        : "max-h-0 opacity-0 mt-0 px-8 pb-0",
                    )}
                  >
                    <p className="text-sm text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
