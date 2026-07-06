import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const expertise = [
  {
    title: "Enterprise Technology Leadership",
    description:
      "Leading technology organisations, transformation programmes and delivery teams aligned with business strategy.",
  },
  {
    title: "Digital Transformation",
    description:
      "Helping organisations modernise platforms, processes and operating models to deliver measurable business outcomes.",
  },
  {
    title: "AI & Technology Strategy",
    description:
      "Supporting responsible AI adoption and technology strategy that enables innovation while remaining grounded in business value.",
  },
  {
    title: "Delivery Excellence",
    description:
      "Building governance, operational discipline and high-performing teams to consistently deliver complex technology initiatives.",
  },
];

export default function CoreExpertise() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="Core Expertise"
          subtitle="Areas where I have consistently delivered value throughout my career."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900">
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