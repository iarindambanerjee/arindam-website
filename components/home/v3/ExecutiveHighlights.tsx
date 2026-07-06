import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  {
    value: "21+",
    title: "Years of Leadership",
    description:
      "Driving enterprise technology, digital transformation and delivery excellence.",
  },
  {
    value: "$5M+",
    title: "Technology Portfolio",
    description:
      "Managed large technology portfolios across global organisations.",
  },
  {
    value: "Global",
    title: "Enterprise Experience",
    description:
      "Leadership roles spanning IBM, Accenture, Firmenich, Red Apple and Persistent Systems.",
  },
  {
    value: "AI & Cloud",
    title: "Transformation Leadership",
    description:
      "Helping organizations modernize technology through AI, Cloud and digital transformation.",
  },
];

export default function ExecutiveHighlights() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Executive Highlights"
          subtitle="Selected milestones from more than two decades of enterprise technology leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-4xl font-black text-blue-600">
                {item.value}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}