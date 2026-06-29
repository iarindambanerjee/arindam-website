import {
  Search,
  ClipboardCheck,
  Route,
  Rocket,
  BarChart3,
} from "lucide-react";

const journey = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business objectives, technology landscape, leadership priorities and the challenges preventing growth.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Executive Assessment",
    description:
      "I evaluate your technology organisation, engineering maturity, delivery capability, cloud environment, governance and AI readiness.",
  },
  {
    icon: Route,
    step: "03",
    title: "Strategic Roadmap",
    description:
      "Together we define clear priorities, executive recommendations, investment decisions and a practical roadmap aligned with business goals.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Execution & Leadership",
    description:
      "I work alongside your leadership team to improve delivery, strengthen governance, mentor technology leaders and accelerate execution.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Continuous Improvement",
    description:
      "Technology is continuously reviewed, refined and aligned with changing business priorities, ensuring long-term sustainable growth.",
  },
];

export default function EngagementJourney() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Engagement Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            What It Is Like
            <span className="text-blue-600"> Working Together</span>
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Every engagement is tailored to your organisation,
            but the journey follows a proven executive framework
            designed to align technology with business strategy.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-slate-300 to-slate-200 rounded-full" />

          <div className="space-y-12">

            {journey.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.step}
                  className="relative flex gap-8 items-start"
                >

                  {/* Timeline Node */}

                  <div className="relative z-10 flex-shrink-0">

                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center">

                      <Icon
                        size={28}
                        className="text-white"
                      />

                    </div>

                  </div>

                  {/* Card */}

                  <div className="flex-1 bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:shadow-lg transition">

                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-widest">

                      Step {item.step}

                    </div>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">

                      {item.title}

                    </h3>

                    <p className="mt-5 text-slate-600 leading-8">

                      {item.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}