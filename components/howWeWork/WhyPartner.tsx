import {
  Award,
  Globe2,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

const strengths = [
  {
    icon: Award,
    title: "21+ Years of Executive Technology Leadership",
    description:
      "From enterprise architecture and software engineering to leading global digital transformation initiatives, I bring over two decades of practical leadership experience.",
  },
  {
    icon: Globe2,
    title: "Cross-Industry Perspective",
    description:
      "Having worked across healthcare, banking, manufacturing, gaming, consumer products and enterprise technology, I quickly understand complex business environments and adapt proven practices to new challenges.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business-First Technology Strategy",
    description:
      "Technology should never exist in isolation. Every recommendation I make is aligned with business objectives, measurable outcomes and long-term organisational growth.",
  },
  {
    icon: Users,
    title: "A Trusted Executive Partner",
    description:
      "I work alongside founders, CEOs and leadership teams as a strategic advisor—bringing independent thinking, practical experience and objective decision-making without the overhead of a full-time executive.",
  },
];

export default function WhyPartner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Why Partner With Me
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Experience That
            <span className="text-blue-600"> Creates Confidence</span>
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Technology leadership is about more than delivering projects.
            It is about helping organisations make better decisions,
            reduce risk and create sustainable competitive advantage.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {strengths.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-blue-600"
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