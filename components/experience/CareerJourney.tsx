import CareerCard from "./CareerCard";
import { journey } from "@/data/careerJourney";
import { BriefcaseBusiness } from "lucide-react";

export default function CareerJourney() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}

        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-semibold uppercase tracking-wider text-sm">

            <BriefcaseBusiness size={18} />

            Transformation Journey

          </div>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Leadership Across Industries

          </h2>

          <p className="mt-8 text-xl text-slate-600 max-w-4xl mx-auto leading-9">

            Over two decades of leading enterprise technology,
            digital transformation, AI adoption and product
            engineering initiatives across healthcare,
            manufacturing, banking, consumer products,
            gaming and global enterprises.

          </p>

        </div>

        {/* Timeline */}

        <div className="space-y-12">

          {journey.map((item) => (

            <CareerCard
              key={`${item.company}-${item.period}`}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>
  );
}