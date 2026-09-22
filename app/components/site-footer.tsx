import Link from "next/link";
import { Container } from "@/app/components/container";

const subsidiaries = ["Tirezone", "Caribe Motors S.A.", "Autobiz S.A."];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-foreground text-white">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold">Lebrun S.A.</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              Tires, batteries and vehicles for motorists in Haiti.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/50 uppercase">
              Our Companies
            </p>
            <ul className="mt-4 space-y-2">
              {subsidiaries.map((name) => (
                <li key={name}>
                  <Link
                    href="#activities"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/50 uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="tel:+50928191919"
                  className="transition-colors hover:text-white"
                >
                  +509 2819-1919
                </a>
              </li>
              <li>
                <a
                  href="mailto:administration@lebrunsa.com"
                  className="transition-colors hover:text-white"
                >
                  administration@lebrunsa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © 2026 Lebrun S.A. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
