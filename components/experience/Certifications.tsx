import {
  Award,
  ShieldCheck,
  Cloud,
  Database,
  Network,
  BrainCircuit,
} from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "PMP",
    subtitle: "Project Management Professional",
  },
  {
    icon: ShieldCheck,
    title: "ITIL v3",
    subtitle: "IT Service Management",
  },
  {
    icon: Cloud,
    title: "Microsoft Azure",
    subtitle: "AZ-900 & DP-900",
  },
  {
    icon: Database,
    title: "IBM SOA",
    subtitle: "Solution Architect & Associate Programmer",
  },
  {
    icon: Network,
    title: "AWS",
    subtitle: "Cloud Foundations",
  },
  {
    icon: BrainCircuit,
    title: "Continuous Learning",
    subtitle: "AI • Cloud • Enterprise Architecture",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            CERTIFICATIONS & EXPERTISE
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Professional Credentials
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Industry-recognised certifications supporting technology
            leadership, project delivery, cloud transformation and
            enterprise architecture.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert) => {
            const Icon = cert.icon;

            return (
              <div
                key={cert.title}
                className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 mb-6 group-hover:scale-110 transition-transform duration-300">

                  <Icon
                    size={32}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {cert.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {cert.subtitle}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}