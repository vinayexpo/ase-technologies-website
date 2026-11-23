import type { ButtonHTMLAttributes } from "react";
import { buttonClasses } from "@/components/ui/button-variants";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "default" | "lg";

export function Button({
  className,
  variant = "primary",
  size = "default",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}
