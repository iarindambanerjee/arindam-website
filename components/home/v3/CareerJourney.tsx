import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const journey = [
  {
    company: "IBM",
    period: "Technology Consultant",
    achievement:
      "Built enterprise solutions and developed a strong foundation in large-scale delivery.",
  },
  {
    company: "Accenture",
    period: "Technology Consulting",
    achievement:
      "Led enterprise transformation initiatives across global clients and industries.",
  },
  {
    company: "Firmenich",
    period: "Global Technology Leadership",
    achievement:
      "Led digital transformation initiatives supporting business growth and operational excellence.",
  },
  {
    company: "Matellio",
    period: "Technology & Client Delivery",
    achievement:
      "Managed strategic client engagements and technology delivery across international markets.",
  },
  {
    company: "Red Apple Technologies",
    period: "Head of IT & Delivery",
    achievement:
      "Scaled engineering, delivery and AI capabilities while leading cross-functional teams.",
  },
  {
    company: "Persistent Systems",
    period: "Senior Manager",
    achievement:
      "Driving enterprise technology transformation, AI strategy and delivery excellence for global clients.",
  },
];

export default function CareerJourney() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Professional Journey"
          subtitle="More than two decades of continuous growth across enterprise technology, consulting and digital transformation."
        />

        <div className="space-y-8">
          {journey.map((item, index) => (
            <div
              key={item.company}
              className="flex gap-6 items-start"
            >
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-blue-600" />
                {index < journey.length - 1 && (
                  <div className="w-px h-20 bg-slate-300 mt-2" />
                )}
              </div>

              <div className="pb-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.company}
                </h3>

                <p className="text-blue-600 font-semibold mt-1">
                  {item.period}
                </p>

                <p className="mt-4 text-slate-600 leading-7 max-w-3xl">
                  {item.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}