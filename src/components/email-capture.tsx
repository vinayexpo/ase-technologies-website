import { useState, type FormEvent } from "react";
import { NavArrowRightIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";

/** The email capture that closes every slide of the stage. */
export function EmailCapture({ className }: { className?: string }) {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    window.location.href = `/start-project.html?email=${encodeURIComponent(email.trim())}`;
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="stage-form">
        <Input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your work email"
          aria-label="Work email"
          className="h-10 border-0 bg-transparent px-1 shadow-none focus:border-0"
        />
        <button
          type="submit"
          className="inline-flex h-10 shrink-0 items-center rounded-full bg-primary px-5 text-label-md text-on-primary transition-colors duration-200 hover:bg-inverse-primary"
        >
          Start
        </button>
        <button
          type="submit"
          aria-label="Start"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary transition-colors duration-200 hover:bg-inverse-primary"
        >
          <NavArrowRightIcon className="size-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
