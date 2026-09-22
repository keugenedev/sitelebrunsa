import Link from "next/link";
import { Container } from "@/app/components/container";

export function HeroSection() {
  return (
    <section id="home" className="bg-white pt-20 pb-20 sm:pt-28 sm:pb-28">
      <Container>
        <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Lebrun S.A.
          </h1>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Quality products, fair pricing and dependable service are what
            keep Haitian motorists moving.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#activities"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Discover Our Activities
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
