import { Fragment, type CSSProperties } from "react";

/**
 * Splits a headline into words and masks each one, so the words can slide up
 * from behind a clipping edge. The delay is staggered per word.
 */
export function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            className="stage-word"
            style={
              { "--word-delay": `${delay + 120 + index * 70}ms` } as CSSProperties
            }
          >
            <span>{word}</span>
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
