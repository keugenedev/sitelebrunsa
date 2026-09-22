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
        </div>
      </Container>
    </section>
  );
}
