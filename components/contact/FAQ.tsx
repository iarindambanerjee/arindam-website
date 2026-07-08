const topics = [
  "Enterprise Technology Leadership",
  "AI Strategy & Adoption",
  "Digital Transformation",
  "Programme & Delivery Leadership",
  "Technology Modernisation",
  "Cloud & Platform Strategy",
  "Building High-Performing Technology Teams",
  "Fractional CIO / CTO Advisory",
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            LET'S TALK ABOUT
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Topics I'm Passionate About
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Technology is evolving rapidly, and I enjoy conversations around leadership,
AI, enterprise architecture, delivery excellence and digital transformation.
These are topics I regularly explore through my work and writing.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-16">

          {topics.map((topic) => (
            <div
              key={topic}
              className="rounded-full bg-slate-100 px-6 py-3 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition"
            >
              {topic}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}