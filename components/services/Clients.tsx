import {
  Rocket,
  Building2,
  TrendingUp,
} from "lucide-react";

export default function Clients() {
  const clients = [
    {
      title: "Founders",
      description:
        "You have a great business idea but need experienced technology leadership to build the right product, team and roadmap without hiring a full-time CTO.",
      icon: Rocket,
    },
    {
      title: "CEOs & Business Leaders",
      description:
        "You're looking to modernize your technology landscape, improve operational efficiency and leverage AI to accelerate business growth.",
      icon: Building2,
    },
    {
      title: "Investors & Boards",
      description:
        "Need an independent technology advisor for due diligence, digital transformation reviews or strategic technology assessments.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            WHO I HELP
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted by Business Leaders
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're building a startup, scaling a business or
            transforming an enterprise, I help leadership teams make
            confident technology decisions.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {clients.map((client) => {
            const Icon = client.icon;

            return (
              <div
                key={client.title}
                className="group bg-white rounded-2xl p-10 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    size={34}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {client.title}
                </h3>

                <p className="text-slate-600 leading-8">
                  {client.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}