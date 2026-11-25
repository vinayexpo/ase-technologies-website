import type { ReactNode } from "react";
import {
  BrandPageArt,
  ContentPageArt,
  SaasPageArt,
  SeoPageArt,
  SocialPageArt,
  WebPageArt,
} from "@/components/service-art";
import {
  CartIcon,
  CodeIcon,
  GlobeIcon,
  GraduationCapIcon,
  GraphUpIcon,
  HealthcareIcon,
  HospitalIcon,
  MegaphoneIcon,
  MessageIcon,
  OrganicFoodIcon,
  RealEstateIcon,
  SearchIcon,
  ShieldCheckIcon,
  ThreeStarsIcon,
  WhatsappIcon,
} from "@/components/icons";

export type ServiceSection =
  | {
      kind: "list";
      title: string;
      intro?: string;
      items: { title: string; text: string; icon?: ReactNode }[];
    }
  | { kind: "checklist"; title: string; intro?: string; items: string[] }
  | { kind: "steps"; title: string; items: { title: string; text: string }[] }
  | { kind: "mosaic"; title: string; items: { title: string; text: string }[] }
  | { kind: "quote"; text: string; source: string }
  | { kind: "swatches"; title: string; items: { name: string; value: string }[] }
  | { kind: "typeScale"; title: string; items: { name: string; sample: string }[] }
  | {
      kind: "catalogue";
      title: string;
      items: { title: string; text: string; icon?: ReactNode }[];
    };

export type ServicePageData = {
  slug: string;
  nav: string;
  chapter: string;
  eyebrow: string;
  title: string;
  lede: string;
  theme: "signals" | "mosaic" | "showcase" | "editorial" | "board" | "catalogue";
  formHeading: string;
  formNote: string;
  formNeeds: string[];
  promises: string[];
  agents: {
    title: string;
    body: string;
    label: string;
    insight: { title: string; body: string };
    insights: { title: string; body: string }[];
    /** Which connected source this agent reads from. */
    sourceIndex?: number;
  };
  visual: ReactNode;
  sections: ServiceSection[];
};

export const services: ServicePageData[] = [
  {
    slug: "search-engine-optimization",
    nav: "SEO",
    chapter: "Discovery",
    eyebrow: "Search engine optimization",
    title: "Be found by the people who need you",
    lede: "Search that treats the reader first. Technical architecture, content written for intent, and authority earned the slow way — because the shortcuts stopped working years ago.",
    theme: "signals",
    formHeading: "Get a free SEO audit",
    formNote:
      "Tell us where you want to be found. We will come back with what is holding the site back, and what we would fix first.",
    formNeeds: [
      "A full technical audit",
      "Keyword and content strategy",
      "Local search",
      "Ongoing SEO retainer",
      "Not sure yet",
    ],
    promises: [
      "A written audit of your site, delivered as a document",
      "The three changes that would move the needle first",
      "No retainer talk — the audit is yours either way",
    ],
        agents: {
        title: "Agents find the gaps.",
        body: "Every crawl, query and ranking lands in one place, so the agent can tell you which page to fix first — and what it is costing you.",
        label: "SEO Agent",
        sourceIndex: 0,
      insight: {
        title: "Your blog, not your homepage, drives signups.",
        body: "Traffic is fine. Structure is not.",
      },
      insights: [
        {
          title: "A high-impression page is missing from the index.",
          body: "Resolve its crawl issue before adding more content.",
        },
        {
          title: "Campaign clicks land on a page that misses the search intent.",
          body: "Align the landing-page message with the audience's query.",
        },
        {
          title: "Paid traffic converts, but organic pages do not.",
          body: "Improve the pages that already attract qualified visitors.",
        },
        {
          title: "Social referrals leave before reaching useful content.",
          body: "Match page speed and messaging to the campaign.",
        },
        {
          title: "Keyword research is missing from the latest content briefs.",
          body: "Update the plan with new query and ranking opportunities.",
        },
      ],
    },
visual: <SeoPageArt />,
    sections: [
      {
        kind: "list",
        title: "What we work on",
        intro:
          "Search is a system, not a trick. We work through it in the order that compounds.",
        items: [
          {
            icon: <SearchIcon className="size-5" aria-hidden="true" />,
            title: "Technical foundations",
            text: "Crawlability, indexation, speed, structured data and the migrations that quietly break rankings.",
          },
          {
            icon: <MessageIcon className="size-5" aria-hidden="true" />,
            title: "Content and intent",
            text: "Pages written for what people actually ask, mapped to the journey they are on.",
          },
          {
            icon: <GlobeIcon className="size-5" aria-hidden="true" />,
            title: "Authority",
            text: "Mentions, links and citations earned through work worth citing — not bought in bulk.",
          },
          {
            icon: <ThreeStarsIcon className="size-5" aria-hidden="true" />,
            title: "Local presence",
            text: "Profiles, maps and reviews managed properly, for every location that matters.",
          },
        ],
      },
      {
        kind: "checklist",
        title: "What lands in your inbox",
        items: [
          "A crawl of the site with every issue ranked by impact",
          "Keyword themes mapped to real pages, not a spreadsheet of guesses",
          "A rewritten sample page, so you can see the standard before committing",
          "Tracking that survives a redesign",
          "A monthly report written in sentences, not charts",
          "A plan you can hand to any developer",
        ],
      },
      {
        kind: "steps",
        title: "How it runs",
        items: [
          {
            title: "We audit",
            text: "Site, content, competitors and the links you already have.",
          },
          {
            title: "We plan",
            text: "A twelve-month plan with the first three months specified.",
          },
          {
            title: "We run it",
            text: "Briefs, briefs, briefs. We write, edit, publish and report.",
          },
        ],
      },
    ],
  },
  {
    slug: "social-media-marketing",
    nav: "Social",
    chapter: "Community",
    eyebrow: "Social media marketing",
    title: "Be part of the conversation, not the feed",
    lede: "Social works when it sounds like a person and shows up every week. We plan the calendar, produce the work, and stay in the replies — because that is where the customers actually are.",
    theme: "mosaic",
    formHeading: "Plan your next quarter",
    formNote:
      "Tell us which channels you are on and what you are trying to be known for. We will send back a month of content, written.",
    formNeeds: [
      "A content calendar and production",
      "Community management",
      "A launch campaign",
      "Paid social, alongside organic",
      "Not sure yet",
    ],
    promises: [
      "A month of finished posts, not a content calendar template",
      "Copy, design and editing from one team",
      "Replies handled in your voice, every working day",
    ],
        agents: {
        title: "Agents read the room.",
        body: "Comments, DMs and competitor posts are read and scored every night, so the next piece you publish is the one the community is already asking for.",
        label: "Social Agent",
        sourceIndex: 1,
      insight: {
        title: "Replies convert better than posts.",
        body: "Your DMs are doing the work.",
      },
      insights: [
        {
          title: "Brand searches rise after social campaigns launch.",
          body: "Connect campaign timing to changes in branded search.",
        },
        {
          title: "Reels drive saves, but profile visits are not converting.",
          body: "Make the profile link and next step clearer.",
        },
        {
          title: "Paid search brings new followers at a lower cost.",
          body: "Test the strongest search themes in your next social posts.",
        },
        {
          title: "Retarget engaged viewers before the campaign ends.",
          body: "Build an audience from recent video and post interactions.",
        },
        {
          title: "New creative is ready but missing from the content calendar.",
          body: "Link the shared assets to the upcoming campaign plan.",
        },
      ],
    },
visual: <SocialPageArt />,
    sections: [
      {
        kind: "mosaic",
        title: "What we publish",
        items: [
          {
            title: "Useful posts",
            text: "Answers to the questions your customers ask every week, written properly.",
          },
          {
            title: "Behind the scenes",
            text: "The work, the people, the process. Cheap to make, hard to copy.",
          },
          {
            title: "Proof",
            text: "Results, before and after, with the numbers attached.",
          },
          {
            title: "Opinion",
            text: "A point of view worth having. The reason people follow at all.",
          },
          {
            title: "Offers",
            text: "The occasional push, timed so it lands with something else.",
          },
          {
            title: "Reposts",
            text: "What the community said, credited and shared.",
          },
        ],
      },
      {
        kind: "list",
        title: "How we work",
        items: [
          {
            icon: <ThreeStarsIcon className="size-5" aria-hidden="true" />,
            title: "Channels by audience",
            text: "We go where your customers are, not where the case studies say to be.",
          },
          {
            icon: <MessageIcon className="size-5" aria-hidden="true" />,
            title: "Native to each platform",
            text: "The rhythm of Instagram is not the rhythm of LinkedIn. We write for each.",
          },
          {
            icon: <MegaphoneIcon className="size-5" aria-hidden="true" />,
            title: "Listening first",
            text: "A month of listening before the first post goes out.",
          },
          {
            icon: <SearchIcon className="size-5" aria-hidden="true" />,
            title: "Measured on depth",
            text: "Repeat customers and replies, not follower counts.",
          },
        ],
      },
      {
        kind: "checklist",
        title: "Community care, every week",
        items: [
          "A channel calendar shaped around your audience and launches",
          "Platform-native creative, not the same post copied everywhere",
          "Comments and messages answered in your brand voice",
          "Escalation rules for sensitive or urgent conversations",
          "A weekly readout of meaningful engagement and enquiries",
        ],
      },
    ],
  },
  {
    slug: "website-designing",
    nav: "Web",
    chapter: "Experience",
    eyebrow: "Website designing",
    title: "A site that does its job quietly",
    lede: "A website is a place, not a poster. It should load fast, read clearly, work on a phone in a lift, and let people finish what they came to do. Form follows the visitor.",
    theme: "showcase",
    formHeading: "Scope a build",
    formNote:
      "Tell us what the site has to achieve. We will send back a page-by-page structure, a timeline and a fixed price.",
    formNeeds: [
      "A new website",
      "A redesign of an existing site",
      "A landing page for a campaign",
      "Accessibility remediation",
      "Not sure yet",
    ],
    promises: [
      "A sitemap and wireframes before a single pixel is drawn",
      "A fixed price, agreed before we start",
      "Performance and accessibility targets in the contract",
    ],
        agents: {
        title: "Agents check the build.",
        body: "Speed, accessibility and broken links are tested on every deploy, so regressions get caught before a customer finds them.",
        label: "Web Agent",
        sourceIndex: 2,
      insight: {
        title: "Most of your bounce is one layout.",
        body: "On mobile, above the fold.",
      },
      insights: [
        {
          title: "A key page is difficult to use from mobile search.",
          body: "Simplify its layout and make the main action easy to reach.",
        },
        {
          title: "Social visitors leave on your slowest landing page.",
          body: "Reduce the page weight and make the message match the post.",
        },
        {
          title: "The campaign page is missing its mobile lead form.",
          body: "Restore the form above the fold on smaller screens.",
        },
        {
          title: "Visitors from Instagram leave before the primary action.",
          body: "Make the next step visible without extra scrolling.",
        },
        {
          title: "Design files do not match the assets on the live site.",
          body: "Sync the shared source files before the next release.",
        },
      ],
    },
visual: <WebPageArt />,
    sections: [
      {
        kind: "checklist",
        title: "The non-negotiables",
        intro:
          "Every build we ship clears the same bar, whether it is a brochure site or a booking system.",
        items: [
          "Fast on a mid-range phone, on mobile data",
          "Readable at 320 pixels wide, on a real phone",
          "Keyboard navigable, with visible focus",
          "Colour contrast that passes WCAG AA",
          "Content editable without a developer",
          "Analytics and consent, wired properly",
        ],
      },
      {
        kind: "mosaic",
        title: "Designed around the visitor",
        items: [
          {
            title: "Clear journeys",
            text: "Information architecture that helps visitors find the next useful step without competing calls to action.",
          },
          {
            title: "Flexible page systems",
            text: "Reusable components and editing tools keep every new page consistent and easy to maintain.",
          },
          {
            title: "Fast on real devices",
            text: "Performance budgets guide image, font and script choices from the first build.",
          },
          {
            title: "Accessible by default",
            text: "Keyboard navigation, readable contrast and semantic structure are part of the design, not an afterthought.",
          },
        ],
      },
      {
        kind: "steps",
        title: "How a build runs",
        items: [
          {
            title: "We scope",
            text: "Pages, features, content and the deadline that matters.",
          },
          {
            title: "We design",
            text: "Wireframes, then design, then a build you can click.",
          },
          {
            title: "We ship",
            text: "Launch, training and thirty days of support after go-live.",
          },
        ],
      },
    ],
  },
  {
    slug: "content-marketing",
    nav: "Content",
    chapter: "Editorial",
    eyebrow: "Content marketing",
    title: "Words that earn their place",
    lede: "Publishing because the calendar said so is how brands end up with a content library nobody reads. We publish because you have something to say, and we write it so people keep reading to the end.",
    theme: "editorial",
    formHeading: "Start a content plan",
    formNote:
      "Tell us what you know that your competitors do not. That is usually where the first twelve articles come from.",
    formNeeds: [
      "A content strategy and calendar",
      "Writing and editing for our team",
      "A thought leadership series",
      "Email newsletters",
      "Not sure yet",
    ],
    promises: [
      "A plan built around what only you can say",
      "Editing that reads like a person wrote it",
      "One piece per fortnight, delivered on the dot",
    ],
        agents: {
        title: "Agents find the angle.",
        body: "Search, sales calls and support tickets are read together, so the agent can point at the one idea only you can credibly own.",
        label: "Content Agent",
        sourceIndex: 4,
      insight: {
        title: "Your best topic is not the obvious one.",
        body: "It is in your sales calls.",
      },
      insights: [
        {
          title: "Related customer questions have no dedicated guide.",
          body: "Create a useful page for the queries already earning impressions.",
        },
        {
          title: "Audience questions point to the next article topic.",
          body: "Turn recurring comments into a practical, shareable answer.",
        },
        {
          title: "Paid search reveals a topic worth expanding organically.",
          body: "Build on the queries already bringing qualified visits.",
        },
        {
          title: "Shared articles retain readers longer than campaign posts.",
          body: "Promote the helpful content that keeps audiences engaged.",
        },
        {
          title: "Sales-call notes are not making it into editorial briefs.",
          body: "Turn customer language into the next content outline.",
        },
      ],
    },
visual: <ContentPageArt />,
    sections: [
      {
        kind: "quote",
        text: "The best content is not the cleverest. It is the piece a customer reads, believes, and forwards to a colleague.",
        source: "Our editorial rule",
      },
      {
        kind: "list",
        title: "What we produce",
        items: [
          {
            icon: <MessageIcon className="size-5" aria-hidden="true" />,
            title: "Editorial strategy",
            text: "A point of view, a voice and a plan for proving both.",
          },
          {
            icon: <CodeIcon className="size-5" aria-hidden="true" />,
            title: "Long-form writing",
            text: "Articles, guides and case studies, researched properly.",
          },
          {
            icon: <MegaphoneIcon className="size-5" aria-hidden="true" />,
            title: "Distribution",
            text: "Newsletter, social and sales material, written to be reused.",
          },
          {
            icon: <GraphUpIcon className="size-5" aria-hidden="true" />,
            title: "Repurposing",
            text: "One idea, cut into a dozen honest forms.",
          },
        ],
      },
      {
        kind: "checklist",
        title: "Every piece earns its place",
        items: [
          "A defined reader and purpose before drafting starts",
          "Interviews and source research behind the claims",
          "An editorial voice consistent with your subject experts",
          "Fact-checking, editing and a clear review process",
          "Distribution plans that give strong work a longer life",
          "Performance reviewed for useful engagement, not vanity views",
        ],
      },
    ],
  },
  {
    slug: "graphic-designing",
    nav: "Brand",
    chapter: "Identity",
    eyebrow: "Graphic designing",
    title: "Design that solves before it decorates",
    lede: "Hierarchy, contrast and restraint are tools for clarity. We build identities that make your business legible — from the logo on the van to the invoice in the post.",
    theme: "board",
    formHeading: "Start an identity project",
    formNote:
      "Tell us what you need designed and where it has to work. We will send back a direction, not a mood board.",
    formNeeds: [
      "A full brand identity",
      "A logo and mark",
      "Marketing and campaign design",
      "Pitch decks and documents",
      "Not sure yet",
    ],
    promises: [
      "A direction you can judge on real applications",
      "Source files and guidelines you own outright",
      "A system that a new designer can pick up",
    ],
        agents: {
        title: "Agents hold the system.",
        body: "Every asset that leaves the building is checked against the guidelines, so the identity stays intact without a designer on every job.",
        label: "Brand Agent",
        sourceIndex: 4,
      insight: {
        title: "Two channels still use the old logo.",
        body: "Since March.",
      },
      insights: [
        {
          title: "Search results still show an outdated brand description.",
          body: "Update the page metadata to match your current positioning.",
        },
        {
          title: "Recent posts use two different visual identities.",
          body: "Bring templates and profile assets back to the same system.",
        },
        {
          title: "Campaign ads mix old and new brand colors.",
          body: "Refresh the active creatives using the approved palette.",
        },
        {
          title: "Retargeting visuals do not match the current campaign.",
          body: "Replace older variants so every audience sees the same brand.",
        },
        {
          title: "Shared folders contain duplicate logo exports.",
          body: "Keep one clearly named, approved set for the whole team.",
        },
      ],
    },
visual: <BrandPageArt />,
    sections: [
      {
        kind: "swatches",
        title: "Colour, with a reason",
        items: [
          { name: "Primary", value: "The brand yellow. Interactive things only." },
          { name: "Surface", value: "Warm off-white. Every canvas starts here." },
          { name: "Ink", value: "Near-black. Text, icons, rules." },
          { name: "Support", value: "Brown and grey. Supporting information." },
        ],
      },
      {
        kind: "typeScale",
        title: "Type, with a scale",
        items: [
          { name: "Display", sample: "Funnel Display" },
          { name: "Headline", sample: "Funnel Display" },
          { name: "Body", sample: "Geist" },
          { name: "Label", sample: "Geist" },
        ],
      },
      {
        kind: "mosaic",
        title: "A system made to travel",
        items: [
          {
            title: "Brand foundations",
            text: "A clear position, voice and visual direction that gives the identity a reason to exist.",
          },
          {
            title: "Everyday collateral",
            text: "Business cards, proposals, invoices and presentations designed as one family.",
          },
          {
            title: "Campaign assets",
            text: "Social, print and digital creative adapted to its real format and audience.",
          },
          {
            title: "Usable guidelines",
            text: "Practical files and rules that help your team keep the identity consistent after handoff.",
          },
        ],
      },
    ],
  },
  {
    slug: "saas-products",
    nav: "SaaS",
    chapter: "Software",
    eyebrow: "SaaS products",
    title: "Software that runs the work",
    lede: "Ready-made systems for real-estate teams, schools, clinics, hospitals, shops and restaurants — and custom web and mobile builds when your workflow refuses to fit a template.",
    theme: "catalogue",
    formHeading: "Book a scoping call",
    formNote:
      "Tell us the system you run on today. We will tell you whether one of ours fits, or whether you need something built.",
    formNeeds: [
      "A ready-made product",
      "A real-estate CRM",
      "A custom web or mobile build",
      "An AI WhatsApp assistant",
      "Data migration from an old system",
      "Not sure yet",
    ],
    promises: [
      "A demo of the product, with your own data in it",
      "A migration plan before any invoice",
      "A fixed price for the first release",
    ],
        agents: {
        title: "Agents watch the data.",
        body: "Usage, errors and revenue sit in one model, so the agent flags what is quietly going wrong before it becomes a support ticket.",
        label: "Product Agent",
        sourceIndex: 2,
      insight: {
        title: "Adoption dips after week three.",
        body: "The onboarding is too long.",
      },
      insights: [
        {
          title: "Search visitors leave before reaching the product trial.",
          body: "Make the product value and trial path easier to find.",
        },
        {
          title: "Social comments cluster around onboarding questions.",
          body: "Use the recurring questions to improve your getting-started flow.",
        },
        {
          title: "Trial signups dipped after the campaign page changed.",
          body: "Compare the new flow with the previous version and restore clarity.",
        },
        {
          title: "Retargeting ads include customers who already subscribed.",
          body: "Exclude active accounts to focus spend on new prospects.",
        },
        {
          title: "Release notes and product documentation are out of sync.",
          body: "Update the shared docs to reflect the latest product changes.",
        },
      ],
    },
visual: <SaasPageArt />,
    sections: [
      {
        kind: "catalogue",
        title: "The catalogue",
        items: [
          {
            icon: <GraduationCapIcon className="size-5" aria-hidden="true" />,
            title: "School management",
            text: "Enrolment, classes, attendance, grades and parents in one place.",
          },
          {
            icon: <CartIcon className="size-5" aria-hidden="true" />,
            title: "Ecommerce",
            text: "Storefront, checkout, orders and stock that talk to each other.",
          },
          {
            icon: <RealEstateIcon className="size-5" aria-hidden="true" />,
            title: "Real Estate CRM",
            text: "Property listings, buyer enquiries, site visits and follow-ups in one workspace.",
          },
          {
            icon: <OrganicFoodIcon className="size-5" aria-hidden="true" />,
            title: "Restaurant",
            text: "Tables, orders, kitchen display and billing.",
          },
          {
            icon: <HospitalIcon className="size-5" aria-hidden="true" />,
            title: "Hospital management",
            text: "Patients, wards, admissions, records and billing.",
          },
          {
            icon: <HealthcareIcon className="size-5" aria-hidden="true" />,
            title: "Clinic management",
            text: "Appointments, records, prescriptions and billing.",
          },
          {
            icon: <WhatsappIcon className="size-5" aria-hidden="true" />,
            title: "AI WhatsApp automation",
            text: "Replies, follow-ups and bookings, around the clock.",
          },
          {
            icon: <CodeIcon className="size-5" aria-hidden="true" />,
            title: "Custom web and mobile",
            text: "Built around your workflow, not the other way round.",
          },
        ],
      },
      {
        kind: "list",
        title: "What you get with every build",
        items: [
          {
            icon: <SearchIcon className="size-5" aria-hidden="true" />,
            title: "Hosted and looked after",
            text: "Infrastructure, backups, updates and monitoring handled by us.",
          },
          {
            icon: <MessageIcon className="size-5" aria-hidden="true" />,
            title: "Your data, exportable",
            text: "No lock-in. You can leave with a full export, any time.",
          },
          {
            icon: <CodeIcon className="size-5" aria-hidden="true" />,
            title: "Training included",
            text: "Sessions for your team, plus recordings nobody has to relearn from.",
          },
          {
            icon: <ShieldCheckIcon className="size-5" aria-hidden="true" />,
            title: "Support that answers",
            text: "A support line that reaches the engineers who built it.",
          },
        ],
      },
      {
        kind: "steps",
        title: "How a build runs",
        items: [
          {
            title: "We scope",
            text: "Your workflow, mapped properly, before anything is built.",
          },
          {
            title: "We build",
            text: "Short cycles, a working demo every Friday.",
          },
          {
            title: "We hand over",
            text: "Migration, training and a plan for the first month live.",
          },
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function requireService(slug: string): ServicePageData {
  const service = getService(slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
