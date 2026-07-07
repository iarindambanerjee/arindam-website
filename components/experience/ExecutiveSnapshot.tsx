import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const metrics = [
  {
    value: "21+",
    label: "Years of Technology Leadership",
  },
  {
    value: "$5M+",
    label: "Technology Portfolio Managed",
  },
  {
    value: "7",
    label: "Leading Organisations",
  },
  {
    value: "4",
    label: "Centres of Excellence Established",
  },
];

export default function ExecutiveSnapshot() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <Container>

        <SectionTitle
          title="Executive Career Snapshot"
          subtitle="A career built on technology leadership, transformation and business outcomes."
          centered
          dark
        />

        <div className="mt-16 grid gap-8 md:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl bg-slate-800 p-8 text-center"
            >
              <div className="text-5xl font-black text-blue-400">
                {metric.value}
              </div>

              <p className="mt-4 text-slate-300 leading-7">
                {metric.label}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}