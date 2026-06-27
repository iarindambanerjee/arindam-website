import {
  PhoneCall,
  Search,
  Map,
  Cog,
  Handshake,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "A 30-minute conversation to understand your business goals, technology challenges and growth plans.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Technology Assessment",
    description:
      "Review your technology landscape, delivery capability, risks and opportunities.",
    icon: Search,
  },
  {
    number: "03",
    title: "Strategic Roadmap",
    description:
      "Receive a practical roadmap with clear priorities, timelines and recommendations.",
    icon: Map,
  },
  {
    number: "04",
    title: "Execution Support",
    description:
      "Support your teams during implementation, governance and technology transformation.",
    icon: Cog,
  },
  {
    number: "05",
    title: "Ongoing Advisory",
    description:
      "Continuous executive guidance as your business, technology and AI strategy evolve.",
    icon: Handshake,
  },
];

export default function EngagementProcess() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            HOW WE WORK TOGETHER
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            A Clear Path from Strategy to Results
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Every engagement is tailored to your business, but follows a
            structured approach that ensures clarity, momentum and measurable outcomes.
          </p>

        </div>

        <div className="space-y-10">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-start gap-8 border-b border-slate-200 pb-10"
              >

                <div className="flex items-center gap-5 min-w-[220px]">

                  <div className="bg-blue-50 rounded-xl p-4">
                    <Icon size={30} className="text-blue-600" />
                  </div>

                  <div>

                    <p className="text-blue-600 font-semibold">
                      Step {step.number}
                    </p>

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                  </div>

                </div>

                <p className="text-slate-600 leading-8 max-w-3xl">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}