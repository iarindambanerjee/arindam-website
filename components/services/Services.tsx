import {
  BriefcaseBusiness,
  BrainCircuit,
  Building2,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "Fractional CIO / CTO",
    description:
      "Executive technology leadership for growing businesses without the cost of a full-time CIO or CTO.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technology Strategy",
    description:
      "Align technology investments with your business objectives through practical, outcome-driven strategy.",
    icon: TrendingUp,
  },
  {
    title: "AI Advisory",
    description:
      "Identify practical AI opportunities that deliver measurable business value, improve productivity and accelerate growth.",
    icon: BrainCircuit,
  },
  {
    title: "Digital Transformation",
    description:
      "Modernise technology platforms, optimise operations and successfully lead large-scale transformation initiatives.",
    icon: Rocket,
  },
  {
    title: "Technology Due Diligence",
    description:
      "Independent assessments for investors, boards and business leaders covering architecture, delivery capability and technical risk.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery Excellence",
    description:
      "Improve delivery governance, execution capability and operational performance across technology teams.",
    icon: Building2,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            HOW I CAN HELP
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Strategic Technology Services
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you need executive technology leadership, AI strategy or
            transformation guidance, I help organisations make better
            technology decisions with confidence.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-3 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    size={32}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-8">
                  {service.description}
                </p>

                <a
                  href="/#contact"
                  className="inline-flex items-center mt-6 font-semibold text-blue-600 group-hover:translate-x-1 transition-transform"
                >
                  Discuss This Service →
                </a>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}