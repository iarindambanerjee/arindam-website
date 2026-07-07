import {
  Building2,
  Factory,
  Gamepad2,
  Laptop,
  HeartPulse,
  ShoppingBag,
  Rocket,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description:
      "Enterprise architecture, large-scale transformation, governance and digital modernization.",
    technologies: [
      "Enterprise Architecture",
      "Cloud",
      "Transformation",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Supply chain platforms, product data management and digital transformation initiatives.",
    technologies: [
      "ERP",
      "Product Data",
      "Cloud",
    ],
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Technology leadership, product engineering and studio delivery for global gaming businesses.",
    technologies: [
      "Product Development",
      "Agile",
      "AI",
    ],
  },
  {
    icon: Laptop,
    title: "Technology Services",
    description:
      "Enterprise software delivery, consulting, cloud transformation and managed services.",
    technologies: [
      "Delivery",
      "Cloud",
      "Consulting",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Supporting healthcare organisations through enterprise delivery and digital initiatives.",
    technologies: [
      "Digital Health",
      "Platforms",
      "Transformation",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Retail & eCommerce",
    description:
      "Customer platforms, digital products and business applications for growing organisations.",
    technologies: [
      "Commerce",
      "Customer Experience",
      "Products",
    ],
  },
  {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description:
      "Fractional CIO/CTO leadership helping businesses scale technology, teams and products.",
    technologies: [
      "AI",
      "Strategy",
      "Leadership",
    ],
  },
];

export default function IndustryGrid() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          title="Industry Experience"
          subtitle="A diverse background delivering technology leadership across multiple industries."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex rounded-xl bg-blue-100 p-4">
                  <Icon
                    className="text-blue-600"
                    size={32}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {industry.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}