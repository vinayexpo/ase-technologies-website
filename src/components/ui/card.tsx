import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg bg-surface-container p-6 shadow-elevation-sm",
        "transition-[background-color,box-shadow] duration-200",
        className,
      )}
      {...props}
    />
  );
}
