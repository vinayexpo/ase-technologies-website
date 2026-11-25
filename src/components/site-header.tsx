import { useEffect, useRef, useState } from "react";
import {
  CancelIcon,
  MenuIcon,
  NavArrowDownIcon,
  NavArrowRightIcon,
} from "@/components/icons";
import { buttonClasses } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const services: {
  href: string;
  label: string;
  description: string;
  children?: { href: string; label: string }[];
}[] = [
  {
    href: "/all-services.html",
    label: "All services",
    description: "Grow it, build it",
  },
  {
    href: "/digital-marketing.html",
    label: "Digital marketing",
    description: "SEO, AEO, GEO, social and ads",
    children: [
      { href: "/search-engine-optimization.html", label: "Search engine optimization" },
      { href: "/social-media-marketing.html", label: "Social media marketing" },
      { href: "/content-marketing.html", label: "Content marketing" },
    ],
  },
  {
    href: "/website-designing.html",
    label: "Website designing",
    description: "Sites that do their job quietly",
  },
  {
    href: "/graphic-designing.html",
    label: "Graphic designing",
    description: "Design that solves before it decorates",
  },
  {
    href: "/saas-products.html",
    label: "SaaS products",
    description: "Software for real estate, schools and care teams",
  },
];

const navLinks = [
  { href: "/ase-academy.html", label: "ASE Academy" },
  {
    href: "/about.html",
    label: "About Us",
    description: "Our story and team",
    children: [{ href: "/portfolio.html", label: "Portfolio", description: "Our projects and work" }],
  },
  { href: "/careers.html", label: "Careers" },
  { href: "/contact.html", label: "Contact Us" },
];

const mobileLinks: { href: string; label: string; child?: boolean }[] = [
  { href: "/all-services.html", label: "All services" },
  { href: "/digital-marketing.html", label: "Digital marketing" },
  { href: "/search-engine-optimization.html", label: "Search engine optimization", child: true },
  { href: "/social-media-marketing.html", label: "Social media marketing", child: true },
  { href: "/content-marketing.html", label: "Content marketing", child: true },
  { href: "/website-designing.html", label: "Website designing" },
  { href: "/graphic-designing.html", label: "Graphic designing" },
  { href: "/saas-products.html", label: "SaaS products" },
  { href: "/ase-academy.html", label: "ASE Academy" },
  { href: "/about.html", label: "About Us", child: true },
  { href: "/portfolio.html", label: "Portfolio", child: true },
  { href: "/careers.html", label: "Careers" },
  { href: "/contact.html", label: "Contact Us" },
];

export function SiteHeader({ ctaHref = "/start-project.html" }: { ctaHref?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const sheet = sheetRef.current;
    sheet?.querySelector<HTMLAnchorElement>("a")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !sheet) return;
      const focusable = Array.from(
        sheet.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 pt-3">
      <div className="mx-auto flex max-w-[1120px] justify-center px-4 sm:px-5">
        <div
          className={cn(
            "flex w-full items-center justify-between gap-2 rounded-full py-2 pl-4 pr-2",
            "transition-[max-width,background-color,box-shadow] duration-300 ease-out",
            scrolled
              ? "max-w-[900px] bg-surface-bright/80 shadow-elevation-md backdrop-blur-[14px]"
              : "max-w-[1120px] bg-transparent",
          )}
        >
          <a href="/" className="flex min-h-11 items-center flex-shrink-0">
            <img
              src="/ase-technologies-logo.png"
              alt="ASE Technologies"
              className={cn(
                "h-12 w-auto transition-all duration-300 ease-out sm:h-14",
                scrolled && "h-11",
              )}
              width={270}
              height={149}
            />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocusCapture={() => setServicesOpen(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((value) => !value)}
                className="inline-flex h-11 w-auto items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-2 py-2 text-[16px] font-normal leading-6 text-on-surface transition-[background-color] duration-200 hover:bg-on-surface/5"
              >
                Services
                <NavArrowDownIcon
                  className={cn(
                    "size-4 transition-transform duration-200",
                    servicesOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              <div
                className={cn(
                  "absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 origin-top rounded-2xl border border-outline-variant bg-surface-bright p-2 shadow-elevation-lg",
                  "transition-[opacity,transform] duration-200 ease-out",
                  servicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                {services.map((service) => (
                  <div key={service.href}>
                    <a
                      href={service.href}
                      className="block rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-surface-container"
                    >
                      <span>
                        <span className="block text-body-md font-semibold text-on-surface">
                          {service.label}
                        </span>
                        <span className="mt-0.5 block text-sm text-on-surface-variant">
                          {service.description}
                        </span>
                      </span>
                    </a>

                    {service.children ? (
                      <ul className="mb-2 ml-3 border-l border-outline-variant py-0.5 pl-3">
                        {service.children.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              className="block rounded-lg px-2.5 py-2 text-sm text-on-surface-variant transition-colors duration-150 hover:bg-surface-container hover:text-on-surface"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {navLinks.map((link) => {
              if (!link.children) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex h-11 w-auto items-center justify-center whitespace-nowrap rounded-full px-2 py-2 text-[16px] font-normal leading-6 text-on-surface transition-[background-color] duration-200 hover:bg-on-surface/5"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                  onFocusCapture={() => setAboutOpen(true)}
                  onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                      setAboutOpen(false);
                    }
                  }}
                >
                  <a
                    href={link.href}
                    className={cn(
                      "inline-flex h-11 w-auto items-center justify-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-[16px] font-normal leading-6 transition-[background-color] duration-200",
                      aboutOpen
                        ? "bg-on-surface/5 text-on-surface"
                        : "text-on-surface hover:bg-on-surface/5",
                    )}
                  >
                    {link.label}
                    <NavArrowDownIcon
                      className={cn(
                        "size-3 transition-transform duration-200",
                        aboutOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </a>
                  <div
                    className={cn(
                      "absolute left-1/2 top-full z-50 w-fit min-w-[13rem] -translate-x-1/2 origin-top rounded-2xl border border-outline-variant bg-surface-bright p-2 shadow-elevation-lg",
                      "transition-[opacity,transform] duration-200 ease-out",
                      aboutOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0",
                    )}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-2.5 py-2 transition-colors duration-150 hover:bg-surface-container"
                      >
                        <span className="block text-sm font-semibold text-on-surface">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-on-surface-variant">
                            {child.description}
                          </span>
                        ) : null}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <a href={ctaHref} className="hidden shrink-0 items-center gap-2 lg:flex">
            <span
              className={cn(
                "inline-flex items-center rounded-full bg-primary text-label-md text-on-primary shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out",
                scrolled
                  ? "h-10 px-5"
                  : "h-12 px-5",
              )}
            >
              Start a project
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "flex size-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out",
                scrolled ? "size-10" : "size-12",
              )}
            >
              <NavArrowRightIcon className="size-5" />
            </span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-full text-on-surface transition-[background-color] duration-200 hover:bg-on-surface/5 lg:hidden"
          >
            {menuOpen ? (
              <CancelIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>

        <div
          ref={sheetRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          hidden={!menuOpen}
          className="fixed inset-x-0 bottom-0 top-[5.5rem] z-50 overflow-y-auto bg-white px-4 py-4 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-md px-3 py-4 text-title-lg text-on-surface transition-[background-color] duration-150 hover:bg-on-surface/5",
                  link.child &&
                    "py-2 pl-7 text-body-md text-on-surface-variant",
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setMenuOpen(false)}
              className={buttonClasses({ className: "mt-4 w-full" })}
            >
              Start a project
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
