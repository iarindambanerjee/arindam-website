const services = [
  {
    title: "AI & Technology Strategy",
    description:
      "Helping organisations identify where Artificial Intelligence and emerging technologies create measurable business value.",
  },
  {
    title: "Digital Transformation",
    description:
      "Leading enterprise modernisation initiatives that align technology investments with business objectives.",
  },
 {
  title: "Enterprise Technology Advisory",
  description:
    "Helping business and technology leaders shape technology strategy, strengthen delivery capabilities and align technology investments with long-term business objectives.",
},
  {
    title: "Technology Leadership & Advisory",
    description:
      "Supporting leadership teams with technology strategy, delivery excellence, governance and organisational transformation.",
  },
];

export default function WaysToHelp() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            HOW I CAN HELP
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Practical Technology Leadership
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every organisation faces unique technology challenges. I enjoy partnering with business and technology 
            leaders to discuss AI, digital transformation, enterprise architecture and technology strategy, drawing on 
            more than two decades of experience leading complex transformation initiatives.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}