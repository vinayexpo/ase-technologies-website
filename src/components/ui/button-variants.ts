import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "default" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-inverse-primary hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:bg-secondary-fixed-dim",
  secondary:
    "border border-outline-variant bg-transparent text-on-surface hover:bg-surface-container-high active:bg-surface-container-highest",
  ghost: "bg-transparent text-on-surface hover:bg-surface-container-high",
  link: "bg-transparent text-on-surface underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  default: "h-12 px-6 text-label-md",
  lg: "h-14 px-8 text-body-md",
};

export function buttonClasses({
  variant = "primary",
  size = "default",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full",
    "transition-[background-color,box-shadow,color] duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}
