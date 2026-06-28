import {
  Calendar,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  TrendingUp,
  Cpu,
} from "lucide-react";

type CareerItem = {
  category: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
  impact: string[];
  technologies: string[];
};

interface CareerCardProps {
  item: CareerItem;
}

export default function CareerCard({ item }: CareerCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8">

        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">

          <BriefcaseBusiness size={16} />

          {item.category}

        </div>

        <h2 className="text-3xl font-bold">
          {item.company}
        </h2>

        <p className="text-blue-300 text-xl mt-2">
          {item.role}
        </p>

        <div className="flex items-center gap-2 mt-6 text-slate-300">

          <Calendar size={18} />

          <span>{item.period}</span>

        </div>

      </div>

      {/* Content */}

      <div className="p-8 space-y-10">

        {/* Achievements */}

        <div>

          <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-900">

            <CheckCircle2
              className="text-blue-600"
              size={22}
            />

            Key Achievements

          </h3>

          <ul className="space-y-4">

            {item.achievements.map((achievement, index) => (

              <li
                key={index}
                className="flex items-start gap-3 text-slate-700 leading-7"
              >

                <CheckCircle2
                  size={18}
                  className="text-green-600 mt-1 flex-shrink-0"
                />

                <span>{achievement}</span>

              </li>

            ))}

          </ul>

        </div>

        {/* Business Impact */}

        <div>

          <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-900">

            <TrendingUp
              className="text-blue-600"
              size={22}
            />

            Business Impact

          </h3>

          <ul className="space-y-4">

            {item.impact.map((impact, index) => (

              <li
                key={index}
                className="flex items-start gap-3 text-slate-700 leading-7"
              >

                <TrendingUp
                  size={18}
                  className="text-emerald-600 mt-1 flex-shrink-0"
                />

                <span>{impact}</span>

              </li>

            ))}

          </ul>

        </div>

        {/* Technologies */}

        <div>

          <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-900">

            <Cpu
              className="text-blue-600"
              size={22}
            />

            Technologies & Domains

          </h3>

          <div className="flex flex-wrap gap-3">

            {item.technologies.map((tech) => (

              <span
                key={tech}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}