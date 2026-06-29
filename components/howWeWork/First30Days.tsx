import {
  CalendarDays,
  Search,
  ClipboardCheck,
  Route,
  Presentation,
} from "lucide-react";

const roadmap = [
  {
    icon: Search,
    week: "Week 1",
    title: "Discovery & Business Alignment",
    description:
      "Meet with key stakeholders to understand your business strategy, technology landscape, leadership priorities and immediate challenges.",
  },
  {
    icon: ClipboardCheck,
    week: "Week 2",
    title: "Technology Assessment",
    description:
      "Review architecture, engineering maturity, delivery processes, cloud platforms, governance, security and AI readiness.",
  },
  {
    icon: Route,
    week: "Week 3",
    title: "Executive Roadmap",
    description:
      "Develop a prioritised technology roadmap with quick wins, strategic initiatives, investment priorities and measurable outcomes.",
  },
  {
    icon: Presentation,
    week: "Week 4",
    title: "Leadership Review",
    description:
      "Present recommendations to the leadership team, align on priorities and establish a practical execution and governance plan.",
  },
];

export default function First30Days() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">

            <CalendarDays size={18} />

            Your First 30 Days

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            What You Can
            <span className="text-blue-600"> Expect</span>

          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-9">

            Every engagement is designed to deliver value quickly.
            During the first month, we establish a clear understanding
            of your business, identify opportunities and create a
            practical roadmap for transformation.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-slate-300 to-slate-200 rounded-full" />

          <div className="space-y-12">

            {roadmap.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.week}
                  className="relative flex gap-8 items-start"
                >

                  {/* Timeline Icon */}

                  <div className="relative z-10 flex-shrink-0">

                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center">

                      <Icon
                        size={28}
                        className="text-white"
                      />

                    </div>

                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">

                    <div className="text-sm font-semibold uppercase tracking-widest text-blue-600">

                      {item.week}

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