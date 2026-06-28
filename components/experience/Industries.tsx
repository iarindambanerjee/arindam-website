import {
  Landmark,
  HeartPulse,
  Factory,
  Gamepad2,
  ShoppingBag,
  Building2,
  Cloud,
  Cpu,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description:
      "Enterprise banking platforms, customer onboarding, core business applications and financial technology transformation.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Digital healthcare platforms, enterprise delivery, governance and scalable technology solutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Global manufacturing systems, product lifecycle management and enterprise knowledge platforms.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Technology strategy, delivery leadership and product engineering for gaming platforms.",
  },
  {
    icon: ShoppingBag,
    title: "Consumer Products",
    description:
      "Global product data platforms, analytics and digital transformation supporting worldwide business operations.",
  },
  {
    icon: Cloud,
    title: "Cloud & AI",
    description:
      "Cloud adoption, AI strategy, automation, enterprise integration and platform modernisation.",
  },
  {
    icon: Cpu,
    title: "Enterprise Software",
    description:
      "Architecture, integrations, enterprise applications and scalable technology ecosystems.",
  },
  {
    icon: Building2,
    title: "Technology Consulting",
    description:
      "Strategic advisory, executive stakeholder management and business-led technology transformation.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            INDUSTRIES SERVED
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Cross-Industry Leadership Experience
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A diverse career spanning multiple industries has provided
            the opportunity to solve complex business challenges,
            adapt to different operating models and deliver
            technology solutions at enterprise scale.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 mb-6 group-hover:scale-110 transition-transform">

                  <Icon
                    size={32}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {industry.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {industry.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}