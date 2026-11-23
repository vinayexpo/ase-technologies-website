import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "idle" | "sent";

/**
 * The enquiry form used on every service page. It collects enough to actually
 * answer the enquiry, and confirms in place when it is sent.
 */
export function ServiceLeadForm({
  needs,
  serviceName,
  compact = false,
}: {
  needs: string[];
  serviceName: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const initialEmail =
    typeof window === "undefined"
      ? ""
      : new URLSearchParams(window.location.search).get("email") ?? "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fields = [
      ["Name", formData.get("name")],
      ["Phone", formData.get("phone")],
      ["Email", formData.get("email")],
      ["Company", formData.get("company")],
      ["Service", serviceName],
      ["Requirement", formData.get("need")],
      ["Project details", formData.get("message")],
    ] as const;
    const message = [
      `Hello ASE Technologies, I have an enquiry about ${serviceName}.`,
      ...fields
        .filter(([, value]) => typeof value === "string" && value.trim())
        .map(([label, value]) => `${label}: ${String(value).trim()}`),
    ].join("\n");
    const url = `https://wa.me/918712655512?text=${encodeURIComponent(message)}`;
    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="lead-done" role="status">
        <span className="lead-done-mark">
          <CheckIcon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-title-lg text-on-surface">Continue in WhatsApp</h3>
        <p className="mt-2 max-w-[30rem] text-body-md text-on-surface-variant">
          Your enquiry details are ready. Review the message in WhatsApp and tap
          Send to reach our team.
        </p>
        <a className="lead-done-whatsapp" href={whatsAppUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`lead-form ${compact ? "lead-form-compact" : ""}`}>
      <div className="lead-form-heading">
        <span>Project details</span>
        <span>01 / A quick brief</span>
      </div>
      <div className="lead-field lead-field-name">
        <label htmlFor="lead-name" className="lead-label">
          Your name
        </label>
        <Input
          id="lead-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Alex Morgan"
          className="lead-input"
        />
      </div>

      <div className="lead-field lead-field-email">
        <label htmlFor="lead-email" className="lead-label">
          Work email
        </label>
        <Input
          id="lead-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={initialEmail}
          placeholder="you@company.com"
          className="lead-input"
        />
      </div>

      <div className="lead-field lead-field-company">
        <label htmlFor="lead-company" className="lead-label">
          Company
        </label>
        <Input
          id="lead-company"
          name="company"
          autoComplete="organization"
          placeholder="Company name"
          className="lead-input"
        />
      </div>

      <div className="lead-field lead-field-need">
        <label htmlFor="lead-need" className="lead-label">
          What do you need?
        </label>
        <div className="relative">
          <select
            id="lead-need"
            name="need"
            defaultValue={needs[0]}
            className="lead-input w-full appearance-none pr-10"
          >
            {needs.map((need) => (
              <option key={need} value={need}>
                {need}
              </option>
            ))}
          </select>
          <ArrowRightIcon
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 rotate-90 text-on-surface-variant"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="lead-field lead-field-message">
        <label htmlFor="lead-message" className="lead-label">
          Anything we should know
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={compact ? 2 : 3}
          placeholder="Where you are now, and what you want to be different."
          className="lead-input h-auto w-full resize-y py-3"
        />
      </div>

      <Button type="submit" className={`lead-submit ${compact ? "w-full" : "self-start"}`}>
        Send enquiry
      </Button>
      <p className="lead-note text-label-sm text-on-surface-variant">
        We reply within one business day. No sequences, no sharing.
      </p>
    </form>
  );
}
