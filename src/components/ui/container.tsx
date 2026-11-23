import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="w-full max-w-[1240px] px-6">{children}</div>
    </div>
  );
}
