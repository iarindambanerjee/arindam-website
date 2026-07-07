import Container from "@/components/ui/Container";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="max-w-5xl mx-auto">

          <div className="space-y-16">

            {experience.map((job) => (
              <div
                key={job.company}
                className="border-l-4 border-blue-600 pl-8 relative"
              >

                <div className="absolute -left-[10px] top-2 h-4 w-4 rounded-full bg-blue-600" />

                <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                  {job.period}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {job.company}
                </h2>

                <h3 className="text-xl text-slate-600">
                  {job.role}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {job.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {job.achievements.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}