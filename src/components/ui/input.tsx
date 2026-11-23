import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-full border border-outline-variant bg-surface-bright",
        "px-6 text-body-md text-on-surface placeholder:text-on-surface-variant",
        "transition-[border-color] duration-200",
        "focus:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
