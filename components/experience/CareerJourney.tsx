import CareerCard from "./CareerCard";
import { journey } from "@/data/careerJourney";
import { BriefcaseBusiness } from "lucide-react";

export default function CareerJourney() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-semibold uppercase tracking-wider text-sm">
            <BriefcaseBusiness size={18} />
            Leadership Journey
          </div>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Two Decades of Technology Leadership
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-xl text-slate-600 leading-9">
            From enterprise software engineering to executive technology
            leadership, each role has expanded my ability to connect business
            strategy, digital transformation and high-performing teams.
          </p>
        </div>

        {/* Executive Timeline */}
        <div className="relative">

          {/* Vertical Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-slate-300 to-slate-200 rounded-full" />

          <div className="space-y-16">
            {journey.map((item) => {
              const year = item.period.split("–")[0].trim();

              return (
                <div
                  key={`${item.company}-${item.period}`}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {year}
                      </span>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="absolute left-16 top-8 w-10 h-1 bg-blue-600 rounded-full" />

                  {/* Card */}
                  <div className="flex-1">
                    <CareerCard item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
