import Link from "next/link";
import {
  Building2,
  Factory,
  Gamepad2,
  Laptop,
  HeartPulse,
  Rocket,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
  },
  {
    icon: Factory,
    title: "Manufacturing",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
  },
  {
    icon: Laptop,
    title: "Technology Services",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
  },
  {
    icon: Rocket,
    title: "Startups",
  },
];

export default function IndustriesPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionTitle
          title="Industries I've Worked Across"
          subtitle="Delivering technology leadership across diverse industries and business environments."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="rounded-xl bg-white border border-slate-200 p-6 hover:shadow-lg transition-all"
              >
                <Icon
                  size={30}
                  className="text-blue-600 mb-4"
                />

                <h3 className="text-xl font-semibold text-slate-900">
                  {industry.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
          >
            Explore Industry Experience
          </Link>
        </div>
      </Container>
    </section>
  );
}