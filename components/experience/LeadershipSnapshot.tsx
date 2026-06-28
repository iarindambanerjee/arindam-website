import {
  BriefcaseBusiness,
  Globe,
  BarChart3,
  BrainCircuit,
  Award,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "21+",
    label: "Years of Leadership",
    description:
      "Leading technology teams, enterprise programs and digital transformation initiatives.",
  },
  {
    icon: Globe,
    value: "6",
    label: "Global Organisations",
    description:
      "Leadership experience across multinational enterprises and high-growth technology companies.",
  },
  {
    icon: BarChart3,
    value: "$5M+",
    label: "Portfolio Managed",
    description:
      "Successfully managed strategic customer portfolios with strong commercial outcomes.",
  },
  {
    icon: Users,
    value: "30+",
    label: "Enterprise Programs",
    description:
      "Delivered complex transformation programmes across multiple industries and business functions.",
  },
  {
    icon: BrainCircuit,
    value: "AI",
    label: "Innovation & Transformation",
    description:
      "Driving AI adoption, cloud modernisation and technology strategy for business growth.",
  },
  {
    icon: Award,
    value: "PMP",
    label: "Certified Professional",
    description:
      "PMP, ITIL, Azure, AWS and enterprise architecture expertise supporting executive delivery.",
  },
];

export default function LeadershipSnapshot() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            LEADERSHIP SNAPSHOT
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Executive Experience at a Glance
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            More than two decades of helping organisations
            deliver technology transformation, strengthen delivery
            capability and create measurable business value.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    size={34}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-4xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-slate-800">
                  {stat.label}
                </h4>

                <p className="mt-4 text-slate-600 leading-7">
                  {stat.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}