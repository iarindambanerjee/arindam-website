const services = [
  {
    title: "Technology Strategy",
    description:
      "Experience aligning technology initiatives with long-term business objectives and measurable outcomes.",
  },
  {
    title: "Digital Transformation",
    description:
      "Helping organisations modernise platforms, improve delivery capability and embrace new technologies responsibly.",
  },
  {
    title: "Enterprise Delivery",
    description:
      "Experience leading complex programmes, technology teams and enterprise transformation initiatives across multiple industries.",
  },
  {
    title: "Technology Leadership",
    description:
      "Building high-performing teams, strengthening engineering culture and enabling organisations to deliver with confidence.",
  },
];

export default function WaysToHelp() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            AREAS OF EXPERTISE
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Technology Leadership & Expertise
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Over the past two decades I've had the opportunity to work across enterprise technology,
AI, digital transformation and large-scale programme delivery.
These are the areas I enjoy discussing and contributing to.
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