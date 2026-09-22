import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title="About Lebrun S.A." align="center" />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Lebrun S.A. is the automotive arm of the Lebrun group in Haiti.
            Under its Tirezone banner, the company operates a network of
            stores specialized in tires and batteries, offering trusted
            brands, expert advice and fast fitting service. Lebrun S.A. is
            also the founder of Caribe Motors S.A. and Autobiz S.A.,
            extending the group&apos;s reach into new vehicle distribution
            and vehicle sales. Quality products, fair pricing and dependable
            service are what keep Haitian motorists moving.
          </p>
        </div>
      </Container>
    </section>
  );
}
