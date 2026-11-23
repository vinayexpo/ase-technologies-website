import type { ComponentType, CSSProperties, SVGProps } from "react";

// Existing service illustrations remain pure markup; animation lives in index.css.

export function SeoVisual() {
  return (
    <svg
      className="cv-seo"
      viewBox="0 0 400 400"
      overflow="visible"
      aria-hidden="true"
      focusable="false"
    >
      <line className="cv-grid-line" x1="80" y1="80" x2="320" y2="80" />
      <line className="cv-grid-line" x1="80" y1="160" x2="320" y2="160" />
      <line className="cv-grid-line" x1="80" y1="240" x2="320" y2="240" />
      <line className="cv-grid-line" x1="80" y1="320" x2="320" y2="320" />
      <line className="cv-grid-line" x1="80" y1="80" x2="80" y2="320" />
      <line className="cv-grid-line" x1="160" y1="80" x2="160" y2="320" />
      <line className="cv-grid-line" x1="240" y1="80" x2="240" y2="320" />
      <line className="cv-grid-line" x1="320" y1="80" x2="320" y2="320" />

      <path
        className="cv-trend"
        d="M 80 320 C 140 320, 140 240, 200 240 S 260 160, 320 80"
        fill="none"
      />

      <polygon className="cv-arrow" points="320,80 295,80 320,105" />
      <circle className="cv-mark" cx="320" cy="80" r="5" />
    </svg>
  );
}

export function SocialVisual() {
  return (
    <svg
      className="cv-social"
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <line className="cv-conn" x1="200" y1="200" x2="200" y2="80" />
      <line className="cv-conn" x1="200" y1="200" x2="320" y2="200" />
      <line className="cv-conn" x1="200" y1="200" x2="200" y2="320" />
      <line className="cv-conn" x1="200" y1="200" x2="80" y2="200" />

      <circle className="cv-hub" cx="200" cy="200" r="24" />

      <g transform="translate(200, 80)">
        <g className="cv-float" style={{ animationDelay: "0s" }}>
          <circle className="cv-node cv-n1" cx="0" cy="0" r="22" />
          <g className="cv-icon" transform="scale(0.7) translate(-12, -12)">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="18" cy="6" r="1.5" fill="currentColor" />
          </g>
        </g>
      </g>

      <g transform="translate(320, 200)">
        <g className="cv-float" style={{ animationDelay: "-1s" }}>
          <circle className="cv-node cv-n2" cx="0" cy="0" r="22" />
          <g className="cv-icon" transform="scale(0.7) translate(-12, -12)">
            <path
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
              fill="currentColor"
            />
          </g>
        </g>
      </g>

      <g transform="translate(200, 320)">
        <g className="cv-float" style={{ animationDelay: "-2s" }}>
          <circle className="cv-node cv-n3" cx="0" cy="0" r="22" />
          <g className="cv-icon" transform="scale(0.7) translate(-12, -12)">
            <path
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.54v8.37h2.54v-4.92c0-.87.7-1.57 1.57-1.57.87 0 1.57.7 1.57 1.57v4.92h2.54zM5.5 8.6c.88 0 1.6-.71 1.6-1.6 0-.88-.72-1.6-1.6-1.6-.88 0-1.6.72-1.6 1.6 0 .89.72 1.6 1.6 1.6zm1.27 9.9v-8.37H4.23v8.37H6.77z"
              fill="currentColor"
            />
          </g>
        </g>
      </g>

      <g transform="translate(80, 200)">
        <g className="cv-float" style={{ animationDelay: "-3s" }}>
          <circle className="cv-node cv-n4" cx="0" cy="0" r="22" />
          <g className="cv-icon" transform="scale(0.7) translate(-12, -12)">
            <path
              d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.61-2.49-.97-3.99-3.56-4.11-3.72-.12-.16-.98-1.3-.98-2.49 0-1.18.62-1.76.84-2 .22-.24.46-.29.61-.29.15 0 .31 0 .44.01.14.01.34-.05.53.41.2.46.66 1.59.72 1.7.06.11.1.24 0 .4-.1.16-.15.25-.3.41-.15.15-.32.34-.45.46-.15.15-.31.31-.15.59.16.28.71 1.17 1.51 1.9 1.04.93 1.91 1.22 2.19 1.36.28.14.44.12.6-.07.16-.19.66-.77.83-1.04.17-.27.34-.22.59-.13.25.09 1.6.75 1.86.89.25.13.42.19.48.3.06.11.06.61-.13 1.18z M12.06 2C6.5 2 2 6.5 2 12.06c0 1.78.46 3.46 1.26 4.91L2 22l5.13-1.26a10.06 10.06 0 0 0 4.93 1.26h.01c5.56 0 10.06-4.5 10.06-10.06C22 6.5 17.5 2 12.06 2zm0 18.5c-1.5 0-2.97-.4-4.26-1.16l-.31-.18-3.16.78.84-3.08-.2-.32a8.36 8.36 0 0 1-1.28-4.48c0-4.62 3.75-8.37 8.37-8.37 2.24 0 4.34.87 5.92 2.45a8.32 8.32 0 0 1 2.45 5.92c0 4.62-3.75 8.37-8.37 8.37z"
              fill="currentColor"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function WebVisual() {
  return (
    <svg
      className="cv-web"
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="cv-frame" x="40" y="60" width="320" height="280" rx="8" />
      <rect className="cv-bar" x="40" y="60" width="320" height="32" rx="8" />
      <circle className="cv-browser-dot" cx="60" cy="76" r="5" />
      <circle className="cv-browser-dot" cx="76" cy="76" r="5" />
      <circle className="cv-browser-dot" cx="92" cy="76" r="5" />

      <rect className="cv-wire cv-wb1" x="64" y="112" width="272" height="30" />
      <rect className="cv-wire cv-wb2" x="64" y="156" width="120" height="80" />
      <rect className="cv-wire cv-wb3" x="200" y="156" width="136" height="36" />
      <rect className="cv-wire cv-wb4" x="200" y="200" width="136" height="36" />
      <rect className="cv-accent-btn" x="64" y="256" width="100" height="32" rx="4" />
      <rect
        className="cv-wire cv-wb1"
        x="180"
        y="256"
        width="156"
        height="32"
        rx="4"
        style={{ transitionDelay: "2200ms" }}
      />
    </svg>
  );
}

export function ContentVisual() {
  return (
    <svg
      className="cv-content"
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <path className="cv-doc" d="M 80 40 L 280 40 L 320 80 L 320 360 L 80 360 Z" />
      <path className="cv-doc" d="M 280 40 L 280 80 L 320 80" />

      <line className="cv-text-line cv-tl1" x1="110" y1="120" x2="260" y2="120" />
      <line className="cv-text-line cv-tl2" x1="110" y1="140" x2="280" y2="140" />
      <line className="cv-text-line cv-tl3" x1="110" y1="160" x2="240" y2="160" />
      <line className="cv-text-line cv-tl4" x1="110" y1="180" x2="280" y2="180" />
      <line className="cv-text-line cv-tl5" x1="110" y1="200" x2="220" y2="200" />

      <rect className="cv-img" x="110" y="230" width="170" height="90" rx="4" />
      <rect className="cv-cursor" x="220" y="190" width="3" height="16" />
    </svg>
  );
}

export function GraphicVisual() {
  return (
    <svg
      className="cv-graphic"
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <line className="cv-grid-line cv-gr1" x1="100" y1="100" x2="100" y2="300" />
      <line className="cv-grid-line cv-gr2" x1="200" y1="100" x2="200" y2="300" />
      <line className="cv-grid-line cv-gr3" x1="300" y1="100" x2="300" y2="300" />
      <line className="cv-grid-line cv-gr4" x1="100" y1="100" x2="300" y2="100" />
      <line className="cv-grid-line cv-gr5" x1="100" y1="200" x2="300" y2="200" />
      <line className="cv-grid-line cv-gr6" x1="100" y1="300" x2="300" y2="300" />

      <circle className="cv-geo-circle" cx="180" cy="180" r="60" />
      <rect className="cv-geo-square" x="180" y="180" width="80" height="80" />
      <polygon className="cv-geo-triangle" points="150,260 230,260 190,200" />
    </svg>
  );
}

export function SaasVisual() {
  return (
    <svg
      className="cv-saas"
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="cv-cloud"
        d="M 150 220 a 40 40 0 0 1 0 -80 a 50 50 0 0 1 90 -10 a 40 40 0 0 1 70 40 a 30 30 0 0 1 -10 50 Z"
      />

      <line className="cv-saas-line" x1="170" y1="240" x2="170" y2="300" />
      <line className="cv-saas-line" x1="220" y1="240" x2="220" y2="300" />
      <line className="cv-saas-line" x1="270" y1="240" x2="270" y2="300" />

      <rect className="cv-server cv-s1" x="150" y="300" width="40" height="60" rx="4" />
      <rect className="cv-server cv-s2" x="200" y="300" width="40" height="60" rx="4" />
      <rect
        className="cv-server-fill cv-s3"
        x="250"
        y="300"
        width="40"
        height="60"
        rx="4"
      />

      <circle className="cv-data cv-d1" cx="170" cy="260" r="4" />
      <circle className="cv-data cv-d2" cx="220" cy="260" r="4" />
      <circle className="cv-data cv-d3" cx="270" cy="260" r="4" />
    </svg>
  );
}

type ApplicationVisualProps = {
  variant:
    | "whatsapp"
    | "school"
    | "hospital"
    | "clinic"
    | "real-estate"
    | "ecommerce"
    | "restaurant";
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  metric: string;
  detail: string;
  caption: string;
  avatars: string[];
  accent: string;
};

export function ApplicationVisual({
  variant,
  icon: Icon,
  label,
  metric,
  detail,
  caption,
  avatars,
  accent,
}: ApplicationVisualProps) {
  return (
    <div
      className="application-visual"
      data-variant={variant}
      style={{ "--app-accent": accent } as CSSProperties}
      aria-hidden="true"
    >
      <div className="application-visual-orbit" />
      <div className="application-visual-card">
        <div className="application-visual-toolbar">
          <span />
          <span />
          <span />
          <span className="application-visual-live">LIVE</span>
        </div>
        <div className="application-visual-heading">
          <span className="application-visual-icon">
            <Icon className="size-6" />
          </span>
          <div className="min-w-0">
            <p>{label}</p>
            <strong>Live overview</strong>
          </div>
        </div>
        <div className={`application-visual-scene scene-${variant}`}>
          {variant === "whatsapp" && (
            <div className="app-chat">
              <div className="app-chat-message app-chat-incoming">
                <span className="app-chat-avatar">{avatars[0]}</span>
                <span>Can I book a visit today?</span>
              </div>
              <div className="app-chat-message app-chat-reply">
                <span>{caption}</span>
              </div>
              <div className="app-chat-typing">
                <i />
                <i />
                <i />
                <span>AI is replying</span>
              </div>
            </div>
          )}

          {variant === "school" && (
            <div className="app-attendance">
              <div className="app-scene-heading">
                <strong>Class 8-A</strong>
                <span>Roll call</span>
              </div>
              {avatars.map((avatar, index) => (
                <div className="app-attendance-row" key={avatar}>
                  <span className="app-student-avatar">{avatar}</span>
                  <span>Student {index + 1}</span>
                  <span className="app-attendance-check">✓</span>
                </div>
              ))}
            </div>
          )}

          {variant === "hospital" && (
            <div className="app-monitor">
              <div className="app-monitor-vitals">
                <div>
                  <span>Heart rate</span>
                  <strong>72 <small>bpm</small></strong>
                </div>
                <div>
                  <span>Oxygen</span>
                  <strong>98<small>%</small></strong>
                </div>
              </div>
              <svg className="app-heartbeat" viewBox="0 0 280 56">
                <polyline points="0,29 60,29 78,29 91,12 108,46 124,20 137,29 177,29 190,29 202,14 219,43 235,28 280,28" />
              </svg>
              <div className="app-monitor-status">
                <span />
                {caption}
              </div>
            </div>
          )}

          {variant === "clinic" && (
            <div className="app-clinic-calendar">
              <div className="app-scene-heading">
                <strong>Today’s schedule</strong>
                <span>September</span>
              </div>
              <div className="app-calendar-days">
                {["M", "T", "W", "T", "F"].map((day, index) => (
                  <span className={index === 2 ? "is-selected" : ""} key={`${day}-${index}`}>
                    <small>{day}</small>
                    <strong>{16 + index}</strong>
                  </span>
                ))}
              </div>
              <div className="app-clinic-appointment">
                <span className="app-appointment-time">10:30</span>
                <div>
                  <strong>Follow-up visit</strong>
                  <span>{avatars[0]} · Consultation</span>
                </div>
                <span className="app-appointment-check">✓</span>
              </div>
            </div>
          )}

          {variant === "ecommerce" && (
            <div className="app-store">
              <div className="app-store-product">
                <span className="app-product-box" />
                <span>New order</span>
              </div>
              <div className="app-store-route">
                <i />
              </div>
              <div className="app-store-cart">
                <Icon />
                <span>1</span>
              </div>
              <div className="app-store-status">
                <span>Order packed</span>
                <strong>{caption}</strong>
              </div>
            </div>
          )}

          {variant === "restaurant" && (
            <div className="app-restaurant">
              <div className="app-plate">
                <span className="app-plate-food" />
                <i className="app-steam app-steam-one" />
                <i className="app-steam app-steam-two" />
                <i className="app-steam app-steam-three" />
              </div>
              <div className="app-kitchen-ticket">
                <span>Kitchen ticket</span>
                <strong>{caption}</strong>
                <small>Table 06 · Ready to serve</small>
              </div>
            </div>
          )}

          {variant === "real-estate" && (
            <div className="app-estate">
              <div className="app-estate-map">
                <span className="app-estate-park" />
                <span className="app-estate-lot app-estate-lot--one" />
                <span className="app-estate-lot app-estate-lot--two" />
                <span className="app-estate-lot app-estate-lot--three" />
                <span className="app-estate-map-label">North district</span>
                <span className="app-estate-map-count"><i />3 new enquiries</span>
                <span className="app-estate-pin app-estate-pin--primary" />
                <span className="app-estate-pin app-estate-pin--secondary" />
              </div>
              <div className="app-estate-lead">
                <span className="app-estate-property-icon"><Icon /></span>
                <span className="app-estate-lead-copy">
                  <small>New buyer enquiry</small>
                  <strong>12 Oak Avenue</strong>
                </span>
                <span className="app-estate-lead-status">{caption}</span>
              </div>
            </div>
          )}
        </div>
        <div className="application-visual-stat">
          <span>{detail}</span>
          <strong>{metric}</strong>
        </div>
      </div>
    </div>
  );
}
