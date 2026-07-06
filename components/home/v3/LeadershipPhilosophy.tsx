import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const principles = [
  {
    title: "Business First",
    description:
      "Technology should always enable business strategy. Every technology investment should deliver measurable business outcomes.",
  },
  {
    title: "People Matter",
    description:
      "High-performing teams create high-performing technology. Leadership is about empowering people to succeed together.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Transformation is never a one-time event. Sustainable success comes from continuous learning, adaptation and innovation.",
  },
];

export default function LeadershipPhilosophy() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="Leadership Philosophy"
          subtitle="The principles that have guided my approach to technology leadership throughout more than two decades of enterprise transformation."
        />

        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-blue-600 pl-8 mb-16">
            <p className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Technology should never be the objective.
            </p>

            <p className="mt-4 text-3xl lg:text-4xl font-bold text-blue-600 leading-tight">
              Business outcomes should.
            </p>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              Technology creates value only when it improves customer
              experience, enables people, strengthens operations and
              supports long-term business strategy.
            </p>
          </blockquote>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {principle.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}