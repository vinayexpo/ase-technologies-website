import { useEffect, useState } from "react";
import { AppMock } from "@/components/app-mock";
import { EmailCapture } from "@/components/email-capture";
import { RevealWords } from "@/components/reveal-words";
import { cn } from "@/lib/utils";

const ROTATING_WORDS = ["customers", "leads", "audiences", "buyers"];

function Rotator({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % words.length),
      2800,
    );
    return () => window.clearInterval(timer);
  }, [words.length]);

  return (
    <span className="stage-rotator" aria-hidden="true">
      {words.map((word, wordIndex) => (
        <span
          key={word}
          className={cn("stage-rotator-word", wordIndex === index && "is-active")}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

/** Opening panel of the stage: the promise, the capture form, the product. */
export function HeroPanel() {
  return (
    <div className="stage-hero">
      <p className="stage-eyebrow">Marketing and software, one team</p>

      <h1 className="stage-hero-title">
        <RevealWords text="A New Way to" />
        <br />
        <RevealWords text="Grow Your Business." delay={260} />
      </h1>

      <p className="stage-hero-sub">
        A creative team and AI marketing agents that help you find{" "}
        <span className="sr-only">customers</span>
        <Rotator words={ROTATING_WORDS} />
        , manage spend, and get more marketing done.
      </p>

      <EmailCapture className="mt-9 w-full max-w-[34rem]" />

      <div className="stage-hero-mock">
        <AppMock />
      </div>
    </div>
  );
}
