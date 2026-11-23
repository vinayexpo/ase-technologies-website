import { SiteHeader } from "@/components/site-header";
import { Stage } from "@/components/stage";
import { Services } from "@/components/services";
import { Marketing } from "@/components/marketing";
import { Products } from "@/components/products";
import { HowItWorks } from "@/components/how-it-works";
import { Fit } from "@/components/fit";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { SeoMetadata } from "@/components/seo-metadata";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SeoMetadata />
      <SiteHeader />
      <main>
        <Stage />
        <Products />
        <Services />
        <Marketing />
        <HowItWorks />
        <Fit />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
