import { Container } from "@/app/components/container";

export function CtaSection() {
  return (
    <section id="contact" className="bg-primary py-20 text-white sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Keeping Haiti Moving.
          </h2>
          <p className="mt-4 text-base text-white/90 sm:text-lg">
            Discover our automotive solutions and services.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="mailto:administration@lebrunsa.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-white/90 sm:flex-row sm:gap-8">
            <a
              href="tel:+50928191919"
              className="transition-colors hover:text-white"
            >
              +509 2819-1919
            </a>
            <a
              href="mailto:administration@lebrunsa.com"
              className="transition-colors hover:text-white"
            >
              administration@lebrunsa.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
