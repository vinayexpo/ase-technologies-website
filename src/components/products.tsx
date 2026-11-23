import {
  ArrowRightIcon,
  CartIcon,
  CodeIcon,
  GraduationCapIcon,
  HealthcareIcon,
  HospitalIcon,
  OrganicFoodIcon,
  RealEstateIcon,
  WhatsappIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { RevealWords } from "@/components/reveal-words";
import { Container } from "@/components/ui/container";

const products = [
  {
    icon: GraduationCapIcon,
    title: "School Management System",
    line: "Admissions, attendance, fees and family updates.",
    category: "Education ERP",
    href: "/saas-products.html#platforms",
    action: "Explore school platform",
  },
  {
    icon: WhatsappIcon,
    title: "AI WhatsApp automation",
    line: "Helpful replies, follow-ups and booking workflows.",
    category: "AI automation",
    href: "/start-project.html",
    action: "Discuss automation",
  },
  {
    icon: HospitalIcon,
    title: "Hospital management",
    line: "Patient records, wards and billing workflows.",
    category: "Healthcare",
    href: "/start-project.html",
    action: "Discuss a system",
  },
  {
    icon: RealEstateIcon,
    title: "Real Estate CRM",
    line: "Property listings, buyer enquiries, site visits and follow-ups.",
    category: "Real estate",
    href: "/saas-products.html#platforms",
    action: "Explore Real Estate CRM",
  },
  {
    icon: HealthcareIcon,
    title: "Clinic management",
    line: "Appointments, records and patient follow-ups.",
    category: "Healthcare",
    href: "/start-project.html",
    action: "Discuss a system",
  },
  {
    icon: CartIcon,
    title: "Ecommerce",
    line: "Storefronts, checkout and order management.",
    category: "Retail",
    href: "/start-project.html",
    action: "Discuss a build",
  },
  {
    icon: OrganicFoodIcon,
    title: "Restaurant",
    line: "Menus, table service and kitchen orders.",
    category: "Hospitality",
    href: "/start-project.html",
    action: "Discuss a system",
  },
  {
    icon: CodeIcon,
    title: "Custom web and mobile",
    line: "Purpose-built software around your workflow.",
    category: "Custom build",
    href: "/start-project.html",
    action: "Discuss your project",
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="products-showcase scroll-mt-24 py-16 md:py-24"
    >
      <Container>
        <div className="products-heading">
          <div className="products-heading-copy">
            <p className="section-eyebrow">SaaS products</p>
            <Reveal>
              <h2 className="mt-4 text-headline-lg text-on-surface">
                <RevealWords text="Software for real-world work" />
              </h2>
            </Reveal>
          </div>
          <div className="products-heading-aside">
            <p className="text-body-lg text-on-surface-variant">
              Explore focused platforms and purpose-built systems for the way
              your team works.
            </p>
            <a className="products-contact-link" href="/start-project.html">
              Find your solution
              <ArrowRightIcon className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <ul className="product-catalog">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <li key={product.title}>
                <Reveal delay={(index % 4) * 70} className="h-full">
                  <a href={product.href} className="product-catalog-card">
                    <span className="product-card-top">
                      <span className="product-catalog-icon">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="product-card-arrow" aria-hidden="true">
                        <ArrowRightIcon className="size-4" />
                      </span>
                    </span>
                    <span className="product-catalog-category">{product.category}</span>
                    <h4>{product.title}</h4>
                    <p>{product.line}</p>
                    <span className="product-catalog-action">
                      {product.action}
                    </span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
