import {
  CheckCircle2,
  BriefcaseBusiness,
  BrainCircuit,
  Globe,
  Target,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "21+ Years of Leadership",
    description:
      "Leading technology teams, enterprise transformations and strategic programmes across multiple industries.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business-First Thinking",
    description:
      "Technology decisions aligned with measurable business outcomes rather than technical trends.",
    icon: Target,
  },
  {
    title: "Practical AI",
    description:
      "Helping organisations adopt AI where it delivers measurable ROI—not where it's simply fashionable.",
    icon: BrainCircuit,
  },
  {
    title: "Global Enterprise Experience",
    description:
      "Experience across multinational organisations, high-growth companies and digital product businesses.",
    icon: Globe,
  },
  {
    title: "Independent Advice",
    description:
      "Technology recommendations based solely on your business needs—not tied to any vendor or platform.",
    icon: ShieldCheck,
  },
  {
    title: "Execution That Delivers",
    description:
      "From strategy through delivery, ensuring plans become measurable business results.",
    icon: CheckCircle2,
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            WHY CLIENTS WORK WITH ME
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Trusted Technology Leadership
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            I combine executive leadership, enterprise delivery experience and
            practical AI expertise to help organisations make confident
            technology decisions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-5">

                  <div className="bg-blue-50 rounded-xl p-3 h-fit group-hover:bg-blue-100 transition">
                    <Icon size={30} className="text-blue-600" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold mb-3">
                      {reason.title}
                    </h3>

                    <p className="text-slate-600 leading-8">
                      {reason.description}
                    </p>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}