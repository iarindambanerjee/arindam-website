import {
  BrainCircuit,
  Building2,
  Cloud,
  Users,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

const achievements = [
  {
    icon: BrainCircuit,
    title: "AI & Innovation Leadership",
    description:
      "Established Centres of Excellence for Generative AI, Cloud, Automation and Mobile technologies while helping organisations embrace emerging technologies with confidence.",
  },
  {
    icon: Building2,
    title: "Enterprise Digital Transformation",
    description:
      "Successfully delivered enterprise transformation initiatives across healthcare, manufacturing, banking, gaming and consumer industries.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Executive Technology Strategy",
    description:
      "Partnered with business leaders to define technology roadmaps, improve governance and align technology investments with measurable business outcomes.",
  },
  {
    icon: Cloud,
    title: "Cloud & Platform Modernisation",
    description:
      "Led cloud migration, platform modernisation and enterprise architecture initiatives using Azure, AWS and modern integration technologies.",
  },
  {
    icon: Users,
    title: "Leadership & Team Building",
    description:
      "Built and mentored high-performing engineering, delivery and cross-functional teams while fostering a culture of innovation and accountability.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth & Delivery Excellence",
    description:
      "Managed strategic customer portfolios exceeding $5M while improving delivery quality, customer satisfaction and operational performance.",
  },
];

export default function Achievements() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            SIGNATURE ACHIEVEMENTS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Delivering Business Outcomes Through Technology
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Throughout my career, I have consistently focused on
            helping organisations leverage technology to solve
            complex business challenges, improve operational
            efficiency and accelerate sustainable growth.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.title}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 mb-6 group-hover:scale-110 transition-transform duration-300">

                  <Icon
                    size={34}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {achievement.title}
                </h3>

                <p className="text-slate-600 leading-8">
                  {achievement.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}