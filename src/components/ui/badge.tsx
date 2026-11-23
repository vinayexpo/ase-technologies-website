import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "tertiary" | "danger" | "outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
  danger: "bg-error-container text-on-error-container",
  outline: "border border-outline-variant text-on-surface",
};

export function Badge({
  className,
  variant = "tertiary",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-label-sm",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
