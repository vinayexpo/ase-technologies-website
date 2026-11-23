import { cn } from "@/lib/utils";

/**
 * A continuous ticker. The item list is rendered twice so the loop is
 * seamless, and it pauses on hover.
 */
export function Ticker({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const run = items.concat(items);

  return (
    <div className={cn("ticker", className)}>
      <div className="ticker-track">
        {run.map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            {item}
            <span className="ticker-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
