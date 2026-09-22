import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";
import { ActivityCard, type Activity } from "@/app/components/activity-card";

const activities: Activity[] = [
  {
    name: "Tirezone",
    logo: { src: "/logos/tirezone.png", width: 2172, height: 724 },
    description:
      "A network of stores specialized in tires and batteries, offering trusted brands, expert advice and fast fitting service.",
    ctaLabel: "Discover Tirezone",
  },
  {
    name: "Caribe Motors S.A.",
    logo: { src: "/logos/caribe-motors.png", width: 1371, height: 1147 },
    description: "Founded by Lebrun S.A., specialized in new vehicle distribution.",
    ctaLabel: "Learn More",
  },
  {
    name: "Autobiz S.A.",
    logo: { src: "/logos/autobiz.png", width: 2170, height: 725 },
    description:
      "Dedicated to vehicle sales and distribution, contributing to the growth of Haiti's automotive sector.",
    ctaLabel: "Learn More",
  },
];

export function ActivitiesSection() {
  return (
    <section id="activities" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading title="Our Activities" align="center" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.name} activity={activity} />
          ))}
        </div>
      </Container>
    </section>
  );
}
