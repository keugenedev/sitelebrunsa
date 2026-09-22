import { SiteHeader } from "@/app/components/site-header";
import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { ActivitiesSection } from "@/app/components/activities-section";
import { CommitmentsSection } from "@/app/components/commitments-section";
import { CtaSection } from "@/app/components/cta-section";
import { SiteFooter } from "@/app/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <CommitmentsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
