import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type TouchEvent,
} from "react";
import {
  CartIcon,
  GraduationCapIcon,
  HealthcareIcon,
  HospitalIcon,
  OrganicFoodIcon,
  RealEstateIcon,
  WhatsappIcon,
} from "@/components/icons";
import { ApplicationVisual } from "@/components/carousel-visuals";
import { EmailCapture } from "@/components/email-capture";
import { RevealWords } from "@/components/reveal-words";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const AUTO_PLAY_MS = 6000;
const REVEAL_DELAY_MS = 150;

type Application = {
  id: string;
  chapter: string;
  short: string;
  title: string;
  description: string;
  href: string;
  reverse?: boolean;
  glow: { x: string; y: string };
  visual: ReactNode;
};

const applications: Application[] = [
  {
    id: "whatsapp",
    href: "/start-project.html",
    chapter: "AI automation",
    short: "WhatsApp",
    title: "AI-Powered WhatsApp Automation",
    description:
      "Keep customer conversations moving with helpful, instant replies, smart follow-ups and automated bookings.",
    glow: { x: "28%", y: "-38%" },
    visual: (
      <ApplicationVisual
        variant="whatsapp"
        icon={WhatsappIcon}
        label="WhatsApp automation"
        metric="24/7"
        detail="Replies handled"
        caption="New booking confirmed"
        avatars={["AM", "RK", "SK"]}
        accent="#25a865"
      />
    ),
  },
  {
    id: "school",
    href: "/saas-products.html#platforms",
    chapter: "Education",
    short: "Schools",
    title: "School Management System",
    description:
      "Bring admissions, attendance, fees and family communication together in one organized school workspace.",
    reverse: true,
    glow: { x: "52%", y: "-24%" },
    visual: (
      <ApplicationVisual
        variant="school"
        icon={GraduationCapIcon}
        label="School management"
        metric="96%"
        detail="Attendance today"
        caption="Parent update sent"
        avatars={["ST", "PA", "TC"]}
        accent="#7c5ce7"
      />
    ),
  },
  {
    id: "hospital",
    href: "/start-project.html",
    chapter: "Healthcare",
    short: "Hospitals",
    title: "Hospital Management System",
    description:
      "Coordinate patient records, appointments, wards and billing with a connected system for hospital teams.",
    glow: { x: "18%", y: "4%" },
    visual: (
      <ApplicationVisual
        variant="hospital"
        icon={HospitalIcon}
        label="Hospital management"
        metric="128"
        detail="Patients in care"
        caption="Ward status updated"
        avatars={["DR", "NS", "PT"]}
        accent="#dd655d"
      />
    ),
  },
  {
    id: "real-estate",
    href: "/start-project.html",
    chapter: "Real estate",
    short: "Real Estate",
    title: "Real Estate CRM",
    description:
      "Keep property listings, buyer enquiries, site visits and follow-ups moving in one connected workspace.",
    glow: { x: "68%", y: "-18%" },
    visual: (
      <ApplicationVisual
        variant="real-estate"
        icon={RealEstateIcon}
        label="Real estate CRM"
        metric="32"
        detail="Active listings"
        caption="Viewing confirmed"
        avatars={["AB", "MK", "JS"]}
        accent="#8a5b0c"
      />
    ),
  },
  {
    id: "clinic",
    href: "/start-project.html",
    chapter: "Patient care",
    short: "Clinics",
    title: "Clinic Management System",
    description:
      "Make daily clinic work simpler with appointment scheduling, patient records and timely follow-ups.",
    reverse: true,
    glow: { x: "-18%", y: "-6%" },
    visual: (
      <ApplicationVisual
        variant="clinic"
        icon={HealthcareIcon}
        label="Clinic management"
        metric="08"
        detail="Appointments today"
        caption="Next visit at 10:30"
        avatars={["DR", "AS", "MK"]}
        accent="#2993bd"
      />
    ),
  },
  {
    id: "ecommerce",
    href: "/start-project.html",
    chapter: "Commerce",
    short: "Ecommerce",
    title: "Ecommerce",
    description:
      "Build a seamless online store with product listings, secure checkout and easy-to-manage orders.",
    glow: { x: "38%", y: "18%" },
    visual: (
      <ApplicationVisual
        variant="ecommerce"
        icon={CartIcon}
        label="Ecommerce"
        metric="126"
        detail="Orders today"
        caption="Order #1048 is live"
        avatars={["JM", "SK", "AP"]}
        accent="#d39a20"
      />
    ),
  },
  {
    id: "restaurant",
    href: "/start-project.html",
    chapter: "Hospitality",
    short: "Restaurant",
    title: "Restaurant Application",
    description:
      "Keep menus, orders and table service in sync with a simple application built for busy restaurants.",
    reverse: true,
    glow: { x: "8%", y: "26%" },
    visual: (
      <ApplicationVisual
        variant="restaurant"
        icon={OrganicFoodIcon}
        label="Restaurant application"
        metric="18"
        detail="Orders in kitchen"
        caption="Table 06 order ready"
        avatars={["CH", "SV", "RK"]}
        accent="#dd7b36"
      />
    ),
  },
];

/**
 * Places a panel in the 3D space of the stage: panels behind the one in front
 * are pushed away and swung around the Y axis, so the stage reads as a row of
 * objects rather than a flat strip of slides.
 */
function panelStyle(panelIndex: number, activeIndex: number): CSSProperties {
  const offset = panelIndex - activeIndex;
  const depth = Math.min(Math.abs(offset), 2);

  return {
    transform: `translateX(${offset * -3}%) translateZ(${-depth * 160}px) rotateY(${offset * 30}deg)`,
    zIndex: 10 - depth,
    opacity: Math.abs(offset) > 1 ? 0 : 1,
  };
}

/**
 * The stage presents seven application offerings on one full-bleed carousel.
 */
export function Stage() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(-1);
  const [inView, setInView] = useState(true);
  const [paused, setPaused] = useState(false);

  const stageRef = useRef<HTMLElement>(null);
  const touchStart = useRef({ x: 0, y: 0, time: 0 });

  const total = applications.length;

  const goTo = useCallback(
    (target: number) => {
      setIndex(((target % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  // Replay the entrance animations on every change of panel.
  useEffect(() => {
    const timer = window.setTimeout(
      () => setRevealed(index),
      REVEAL_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  // The stage slides on its own; it holds still while you are using it.
  useEffect(() => {
    if (!inView || paused) return;
    const timer = window.setInterval(next, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [inView, paused, next, index]);

  function handleClick(event: MouseEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("button, a, input")) return;
    if (event.clientX < window.innerWidth / 2) prev();
    else next();
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    const touch = event.touches[0];
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    const elapsed = Date.now() - touchStart.current.time;

    if (Math.abs(deltaY) > Math.abs(deltaX) || elapsed > 300) return;
    if (Math.abs(deltaX) > 30) {
      if (deltaX > 0) prev();
      else next();
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  }

  const active = applications[index];
  const glow = active.glow;

  return (
    <section
      id="top"
      ref={stageRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="ASE Technologies applications"
      tabIndex={0}
      className="stage"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="stage-glow"
        style={
          {
            "--glow-x": glow.x,
            "--glow-y": glow.y,
          } as CSSProperties
        }
        aria-hidden="true"
      />
      <div className="stage-grid" aria-hidden="true" />

      <div
        className="stage-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          // Keep the vanishing point on the panel that is currently in front.
          perspectiveOrigin: `${(index + 0.5) * 100}% 50%`,
        }}
      >
        {applications.map((application, applicationIndex) => {
          const panelIndex = applicationIndex;

          return (
            <article
              key={application.id}
              className={cn(
                "stage-panel",
                application.reverse && "is-reverse",
                revealed === panelIndex && "is-active",
              )}
              style={panelStyle(panelIndex, index)}
              aria-roledescription="slide"
              aria-label={`${panelIndex + 1} of ${applications.length}: ${application.title}`}
              aria-hidden={panelIndex !== index}
            >
              <Container className="w-full">
                <div className="stage-panel-inner">
                  <div className="stage-columns">
                    <div>
                      <a
                        href={application.href}
                        className="stage-eyebrow underline-offset-4 hover:underline"
                      >
                        <span className="stage-index-num">
                          {String(panelIndex + 1).padStart(2, "0")}
                        </span>
                        {application.chapter}
                      </a>
                      <h2 className="stage-title">
                        <RevealWords text={application.title} />
                      </h2>
                      <p className="stage-desc">{application.description}</p>
                      <EmailCapture className="mt-9 max-w-[30rem]" />
                    </div>
                    <div className="stage-visual">{application.visual}</div>
                  </div>
                </div>
              </Container>
            </article>
          );
        })}
      </div>

      <div className={cn("stage-footer", !inView && "is-hidden")}>
        <Container className="w-full">
          <div className="stage-footer-inner">
            <nav className="stage-index" aria-label="Featured applications">
              {applications.map((application, applicationIndex) => (
                <button
                  key={application.id}
                  type="button"
                  className={cn(
                    "stage-index-item",
                    index === applicationIndex && "is-active",
                  )}
                  onClick={() => goTo(applicationIndex)}
                >
                  <span className="stage-index-num">
                    {String(applicationIndex + 1).padStart(2, "0")}
                  </span>
                  {application.short}
                </button>
              ))}
            </nav>
          </div>
        </Container>
      </div>

      <p className="sr-only" aria-live="polite">
        {`${index + 1} of ${applications.length}: ${active.title}`}
      </p>
    </section>
  );
}
