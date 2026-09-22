import Image from "next/image";
import Link from "next/link";

export type Activity = {
  name: string;
  logo: { src: string; width: number; height: number };
  description: string;
  ctaLabel: string;
};

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg">
      <div className="flex h-12 items-center">
        <Image
          src={activity.logo.src}
          alt={activity.name}
          width={activity.logo.width}
          height={activity.logo.height}
          className="h-9 w-auto"
        />
      </div>
      <h3 className="mt-6 text-xl font-bold text-foreground">
        {activity.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {activity.description}
      </p>
      <Link
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
      >
        {activity.ctaLabel}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>
    </div>
  );
}
