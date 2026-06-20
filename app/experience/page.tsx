export default function ExperiencePage() {
  const experiences = [
    {
      company: "Persistent Systems",
      role: "Senior Manager",
      period: "Mar 2026 – Present",
      description:
        "Leading digital transformation, technology delivery, and enterprise modernization initiatives across global clients.",
    },
    {
      company: "Red Apple Technologies",
      role: "Head of IT & Delivery",
      period: "Feb 2025 – Dec 2025",
      description:
        "Led technology strategy, delivery governance, and organizational transformation across gaming and digital products.",
    },
    {
      company: "Matellio Inc.",
      role: "Senior Account Manager",
      period: "Jul 2023 – Jan 2025",
      description:
        "Managed strategic client relationships, business growth initiatives, and digital transformation programs.",
    },
    {
      company: "Firmenich UK Ltd",
      role: "Technology & Delivery Leader",
      period: "Apr 2017 – Mar 2023",
      description:
        "Delivered global product platforms, data transformation programs, and enterprise technology modernization initiatives.",
    },
    {
      company: "Firmenich Aromatics India",
      role: "Technology Manager",
      period: "Sep 2011 – Mar 2017",
      description:
        "Led enterprise applications, product data management initiatives, and cross-functional technology teams.",
    },
    {
      company: "IBM India",
      role: "Senior Consultant",
      period: "Jan 2008 – Aug 2011",
      description:
        "Delivered large-scale enterprise architecture, integration, and banking transformation projects.",
    },
    {
      company: "Accenture",
      role: "Software Engineer",
      period: "Apr 2005 – Dec 2007",
      description:
        "Worked on enterprise application development and client delivery programs.",
    },
    {
      company: "ORG Informatics",
      role: "Software Engineer",
      period: "Dec 2004 – Mar 2005",
      description:
        "Started professional journey developing software solutions and supporting client engagements.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-5xl font-bold text-slate-900">
          Professional Journey
        </h1>

        <p className="mb-12 text-xl text-slate-600">
          Over two decades of building products, platforms, delivery
          organizations, and technology capabilities across global enterprises.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-sm border border-slate-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {exp.company}
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-blue-600">
                    {exp.role}
                  </p>

                  <p className="mt-4 text-slate-600">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="/"
            className="rounded-lg bg-slate-900 px-6 py-3 text-white hover:bg-slate-700"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}