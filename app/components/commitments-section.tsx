import type { ReactNode } from "react";
import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

type Commitment = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const commitments: Commitment[] = [
  {
    title: "Quality",
    description: "Carefully selected products from trusted brands.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.5l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    title: "Fair Pricing",
    description: "Solutions tailored to every motorist's needs.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4h7l9 9-7 7-9-9V4z" />
        <circle cx="8.5" cy="8.5" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Expertise",
    description: "Professional advice to support every customer.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 5.5h16v10H9l-4 4v-4H4v-10z" />
      </svg>
    ),
  },
  {
    title: "Reliable Service",
    description: "Fast, efficient service to get you back on the road.",
    icon: (
      <svg {...iconProps}>
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
];

export function CommitmentsSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading title="Our Commitment" align="center" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
