import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Layers3,
  Target,
  Users,
} from "lucide-react";

const challenges = [
  {
    icon: ArrowUpRight,
    title: "Growth is Outpacing Technology",
    description:
      "Your business is scaling, but systems, processes and technology decisions are struggling to keep pace.",
  },
  {
    icon: BrainCircuit,
    title: "AI Feels Exciting — But Risky",
    description:
      "You know AI can create value, but you need a practical strategy that aligns with your business objectives.",
  },
  {
    icon: Layers3,
    title: "Technology Has Become Complex",
    description:
      "Multiple platforms, vendors and legacy systems are creating unnecessary complexity and slowing innovation.",
  },
  {
    icon: Cloud,
    title: "Cloud Costs Continue to Rise",
    description:
      "Infrastructure is growing faster than governance, making optimisation and cost control increasingly difficult.",
  },
  {
    icon: Target,
    title: "Delivery Has Become Unpredictable",
    description:
      "Projects overrun, priorities constantly change and leadership lacks clear visibility into execution.",
  },
  {
    icon: Users,
    title: "You Need Executive Technology Leadership",
    description:
      "Your organisation needs strategic technology guidance without the commitment of hiring a full-time CIO.",
  },
];

export default function BusinessChallenges() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Business Challenges
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Technology Challenges That
            <span className="text-blue-600"> Limit Growth</span>
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Most organisations don't need more technology.
            They need better technology leadership.
            These are the challenges I help leadership teams solve.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {challenges.map((challenge) => {

            const Icon = challenge.icon;

            return (

              <div
                key={challenge.title}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                  {challenge.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                  {challenge.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}