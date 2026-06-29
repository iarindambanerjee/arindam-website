import {
  FileCheck2,
  Map,
  BrainCircuit,
  ShieldCheck,
  BarChart3,
  Users,
} from "lucide-react";

const deliverables = [
  {
    icon: FileCheck2,
    title: "Executive Technology Assessment",
    description:
      "A comprehensive review of your technology landscape, delivery capability, governance and organisational maturity.",
  },
  {
    icon: Map,
    title: "90-Day Strategic Roadmap",
    description:
      "A prioritised action plan aligned to your business objectives, investment priorities and measurable outcomes.",
  },
  {
    icon: BrainCircuit,
    title: "AI Adoption Strategy",
    description:
      "Practical recommendations for adopting AI responsibly, identifying high-value use cases and reducing implementation risk.",
  },
  {
    icon: ShieldCheck,
    title: "Technology Risk Review",
    description:
      "Identification of operational, architectural and governance risks with actionable recommendations to reduce exposure.",
  },
  {
    icon: BarChart3,
    title: "Executive Dashboards & KPIs",
    description:
      "Clear reporting frameworks that provide leadership with visibility into technology performance and delivery health.",
  },
  {
    icon: Users,
    title: "Leadership & Governance Framework",
    description:
      "Processes, governance models and leadership practices that enable sustainable technology growth long after the engagement ends.",
  },
];

export default function Deliverables() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Deliverables
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            What You
            <span className="text-blue-600"> Receive</span>
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Every engagement is outcome-focused. Rather than simply providing
            advice, I deliver practical frameworks, executive insights and
            actionable roadmaps that help leadership teams make confident
            technology decisions.
          </p>

        </div>

        {/* Deliverables Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {deliverables.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">

                  <Icon
                    className="text-blue-600"
                    size={28}
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}