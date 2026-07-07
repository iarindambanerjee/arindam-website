import {
  BrainCircuit,
  Cloud,
  Building,
  Boxes,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Strategy",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
  },
  {
    icon: Building,
    title: "Enterprise Architecture",
  },
  {
    icon: Boxes,
    title: "Digital Products",
  },
  {
    icon: BriefcaseBusiness,
    title: "Technology Advisory",
  },
  {
    icon: Users,
    title: "Leadership & Delivery",
  },
];

export default function CrossIndustry() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="Capabilities Across Every Industry"
          subtitle="Regardless of industry, my focus remains the same—aligning technology with business strategy to deliver measurable outcomes."
          centered
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <div
                key={capability.title}
                className="rounded-xl bg-white border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <Icon
                  className="text-blue-600 mb-4"
                  size={30}
                />

                <h3 className="text-xl font-semibold text-slate-900">
                  {capability.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}