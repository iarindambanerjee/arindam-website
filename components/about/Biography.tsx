import Container from "@/components/ui/Container";

export default function Biography() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-slate-900">
            My Journey
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

            <p>
              My career has been shaped by one consistent belief:
              technology is most valuable when it enables business growth,
              empowers people and creates measurable outcomes.
            </p>

            <p>
              Over the past two decades I have worked across consulting,
              global enterprises and technology organizations, leading
              initiatives spanning digital transformation, enterprise
              architecture, cloud modernization, AI strategy and delivery
              excellence.
            </p>

            <p>
              These experiences have allowed me to work with diverse
              industries, global teams and executive stakeholders while
              developing a balanced perspective on technology leadership—
              one that combines strategic thinking with practical execution.
            </p>

            <p>
              Today, as a Senior Manager at Persistent Systems,
              I continue to help organizations navigate complex
              technology challenges while building capabilities
              that support long-term business success.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}