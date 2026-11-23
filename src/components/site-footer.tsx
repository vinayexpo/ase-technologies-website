import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/digital-marketing.html", label: "Digital marketing" },
  { href: "/search-engine-optimization.html", label: "Search engine optimization" },
  { href: "/social-media-marketing.html", label: "Social media marketing" },
  { href: "/content-marketing.html", label: "Content marketing" },
  { href: "/website-designing.html", label: "Website designing" },
  { href: "/graphic-designing.html", label: "Graphic designing" },
  { href: "/saas-products.html", label: "SaaS products" },
];

const companyLinks = [
  { href: "/all-services.html", label: "All services" },
  { href: "/#how-it-works", label: "How we work" },
  { href: "/#faq", label: "FAQ" },
  { href: "/digital-marketing.html", label: "Start a campaign" },
];

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-low">
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a href="/" className="inline-flex min-h-11 items-center">
              <img
                src="/ase-technologies-logo.png"
                alt="ASE Technologies"
                className="h-14 w-auto"
                width={270}
                height={149}
              />
            </a>
            <p className="mt-6 max-w-[26rem] text-body-lg text-on-surface-variant">
              Digital marketing and SaaS applications for growing businesses —
              one team for the work that needs doing and the software that runs
              it.
            </p>

            <div id="contact" className="mt-8 flex flex-col items-start gap-4">
              <p className="text-body-md text-on-surface-variant">
                Vizag, Hyderabad,
                <br />
                Bengaluru, Vijayawada
              </p>
              <a
                href="mailto:info@asetechnologies.in"
                className="text-body-md text-on-surface underline-offset-4 hover:underline"
              >
                info@asetechnologies.in
              </a>
              <a
                href="tel:+918712655512"
                className="text-body-md text-on-surface underline-offset-4 hover:underline"
              >
                +91 87126 55512
              </a>
              <div className="flex items-center gap-3" role="group" aria-label="Social media">
                <a href="https://www.facebook.com/asetechnologiesofficial/" target="_blank" rel="noopener noreferrer" aria-label="ASE Technologies on Facebook" title="Facebook" className="flex size-9 items-center justify-center rounded-full bg-[#4267B2] transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                  <svg viewBox="0 0 24 24" className="size-[18px] fill-white" aria-hidden="true">
                    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3v3.2h2.8V21h3.4Z" />
                  </svg>
                </a>
                <a href="https://x.com/AseTechnologies" target="_blank" rel="noopener noreferrer" aria-label="ASE Technologies on X" title="X" className="flex size-9 items-center justify-center rounded-full bg-black transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                  <svg viewBox="0 0 24 24" className="size-[17px] fill-white" aria-hidden="true">
                    <path d="M18.9 2.5h3.1l-6.8 7.8 8 11.2H17l-4.9-6.9-6 6.9H3l7.3-8.4L2.6 2.5H10l4.4 6.3 4.5-6.3Zm-1.1 17h1.7L8.1 4.4H6.3l11.5 15.1Z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/ase-technologie-official" target="_blank" rel="noopener noreferrer" aria-label="ASE Technologies on LinkedIn" title="LinkedIn" className="flex size-9 items-center justify-center rounded-full bg-[#0A66C2] transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                  <svg viewBox="0 0 24 24" className="size-[20px] fill-white" aria-hidden="true">
                    <path d="M5.2 8h3.2v10.5H5.2V8Zm1.6-4.8a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM10.5 8h3.1v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2.1 3.7 4.8v6h-3.2v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v5.4h-3.2V8Z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/ase_technologies/" target="_blank" rel="noopener noreferrer" aria-label="ASE Technologies on Instagram" title="Instagram" className="flex size-9 items-center justify-center transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                  <svg viewBox="0 0 24 24" className="size-full" aria-hidden="true">
                    <defs>
                      <linearGradient id="footer-instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FEDA75" />
                        <stop offset="30%" stopColor="#FA7E1E" />
                        <stop offset="60%" stopColor="#D62976" />
                        <stop offset="80%" stopColor="#962FBF" />
                        <stop offset="100%" stopColor="#4F5BD5" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="12" fill="url(#footer-instagram-gradient)" />
                    <rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="white" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="3.1" fill="none" stroke="white" strokeWidth="1.8" />
                    <circle cx="16.5" cy="7.7" r="1" fill="white" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@asetechnologies6748" target="_blank" rel="noopener noreferrer" aria-label="ASE Technologies on YouTube" title="YouTube" className="flex size-9 items-center justify-center rounded-full bg-[#E62117] transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                  <svg viewBox="0 0 24 24" className="size-[20px] fill-white" aria-hidden="true">
                    <path d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9A3 3 0 0 0 3.1 19c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.8 15.2V8.8l5.5 3.2-5.5 3.2Z" />
                  </svg>
                </a>
                <a href="https://wa.me/918712655512" target="_blank" rel="noopener noreferrer" aria-label="Chat with ASE Technologies on WhatsApp" title="WhatsApp" className="flex size-9 items-center justify-center rounded-full bg-[#25D366] transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                  <svg viewBox="0 0 24 24" className="size-[20px] fill-white" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.437-9.884 9.893-9.884 2.64.001 5.122 1.03 6.986 2.894a9.824 9.824 0 0 1 2.89 6.994c-.003 5.45-4.437 9.883-9.886 9.883M20.52 3.48A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.946L0 24l6.335-1.662a11.87 11.87 0 0 0 5.711 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.424-8.42z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-7">
            <nav aria-label="Services">
              <p className="text-label-sm font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
                Services
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-body-md text-on-surface underline-offset-4 transition-colors duration-200 hover:text-on-surface-variant hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company">
              <p className="text-label-sm font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
                Company
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-body-md text-on-surface underline-offset-4 transition-colors duration-200 hover:text-on-surface-variant hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={cn(
            "mt-14 flex flex-col gap-2 border-t border-outline-variant pt-6",
            "text-label-sm text-on-surface-variant",
            "sm:flex-row sm:items-center sm:justify-between",
          )}
        >
          <p>© 2026 ASE Technologies</p>
          <p>Prototype build — form submissions are not sent.</p>
        </div>
      </Container>
    </footer>
  );
}
