export default function ExperiencePage() {
  const journey = [
    {
      title: "🏥 UHG Pharmacy Health Platform",
      company: "Persistent Systems",
      role: "Senior Manager",
      period: "Mar 2026 – Present",
      achievements: [
        "Led end-to-end healthcare platform delivery across product discovery, architecture alignment and Agile execution.",
        "Owned program P&L including estimation, budgeting and billing governance.",
        "Managed stakeholder alignment across business, architecture and engineering teams.",
        "Drove scalable healthcare platform outcomes supporting enterprise growth.",
      ],
      impact: [
        "Improved delivery predictability and governance.",
        "Enabled scalable healthcare ecosystem capabilities.",
        "Aligned technology execution with measurable business outcomes.",
      ],
      tech: [
        "Healthcare",
        "Azure",
        "AWS",
        "Agile",
        "Architecture",
        "Product Discovery",
      ],
    },
    {
      title: "🧠 eMaze Brain",
      company: "Red Apple Technologies",
      role: "Head of IT & Delivery",
      period: "Feb 2025 – Dec 2025",
      achievements: [
        "Defined enterprise technology strategy and architecture roadmap.",
        "Established governance standards for delivery, APIs and cloud adoption.",
        "Led cross-functional engineering and delivery teams.",
        "Implemented scalable product delivery frameworks.",
      ],
      impact: [
        "Improved release velocity by 40%.",
        "Enhanced platform stability and operational reliability.",
        "Strengthened delivery governance and execution discipline.",
      ],
      tech: [
        "Cloud",
        "Analytics",
        "API Strategy",
        "Product Engineering",
        "Governance",
      ],
    },
    {
      title: "📺 InSynQ | AI, Cloud & Streaming Innovation",
      company: "Matellio",
      role: "Senior Account Manager",
      period: "Jul 2023 – Jan 2025",
      achievements: [
        "Managed a $5M+ enterprise portfolio.",
        "Built Centers of Excellence for GenAI, Cloud Automation and Mobile Development.",
        "Led cloud modernization and innovation programs.",
        "Guided strategic customer engagements and growth initiatives.",
      ],
      impact: [
        "Enabled scalable content delivery and monetization.",
        "Improved customer engagement and adoption.",
        "Accelerated innovation-led delivery across accounts.",
      ],
      tech: [
        "Streaming",
        "GenAI",
        "Cloud",
        "Microservices",
        "Enterprise Delivery",
      ],
    },
    {
      title: "📊 Global Product Data Platform",
      company: "Firmenich UK",
      role: "Senior Business Systems Manager",
      period: "Apr 2017 – Mar 2023",
      achievements: [
        "Led global application modernization initiatives.",
        "Delivered Azure-based analytics and integration ecosystems.",
        "Built enterprise-scale Product Data Platform capabilities.",
        "Enabled data-driven decision making across business functions.",
      ],
      impact: [
        "Improved global product intelligence visibility.",
        "Reduced platform complexity.",
        "Strengthened enterprise data governance.",
      ],
      tech: [
        "Azure",
        "Node.js",
        "Analytics",
        "Data Platforms",
        "Integration Services",
      ],
    },
    {
      title: "🌍 Global Flavor Consumption Knowledge Platform",
      company: "Firmenich India",
      role: "Business Systems Manager",
      period: "Sep 2011 – Mar 2017",
      achievements: [
        "Created the Global Flavor Consumption Knowledge Portal.",
        "Delivered 30+ migration programs within six months.",
        "Introduced CI/CD-driven delivery practices.",
        "Led enterprise application modernization initiatives.",
      ],
      impact: [
        "Improved access to global flavor consumption intelligence.",
        "Reduced knowledge silos across geographies.",
        "Enhanced collaboration and decision making.",
      ],
      tech: [
        "Knowledge Management",
        "Oracle",
        "Analytics",
        "CI/CD",
        "Enterprise Platforms",
      ],
    },
    {
      title: "🏛 Enterprise Integration & Digital Transformation",
      company: "IBM India",
      role: "Team Lead",
      period: "Jan 2008 – Aug 2011",
      achievements: [
        "Led enterprise integration and architecture initiatives.",
        "Delivered Oracle, WebLogic and OSB-based solutions.",
        "Managed enterprise-scale release and deployment activities.",
        "Supported large transformation programs in banking and enterprise domains.",
      ],
      impact: [
        "Improved reliability and operational efficiency.",
        "Enhanced release governance.",
        "Modernized enterprise integration landscapes.",
      ],
      tech: [
        "SOA",
        "Oracle",
        "WebLogic",
        "OSB",
        "Enterprise Integration",
      ],
    },
    {
      title: "🏦 Barclays Legacy Replacement Program (LRP)",
      company: "Accenture",
      role: "Software Engineer",
      period: "Apr 2005 – Dec 2007",
      achievements: [
        "Supported account opening modernization initiatives.",
        "Implemented customer verification workflows.",
        "Developed account activation processes.",
        "Contributed to enterprise banking transformation programs.",
      ],
      impact: [
        "Improved customer onboarding experience.",
        "Enhanced transaction accuracy.",
        "Modernized banking operations.",
      ],
      tech: [
        "J2EE",
        "Chordiant",
        "Banking Systems",
        "Enterprise Applications",
      ],
    },
    {
      title: "🏭 Birla NGK Insulators",
      company: "ORG Informatics",
      role: "Trainee Software Engineer",
      period: "Dec 2004 – Mar 2005",
      achievements: [
        "Enhanced Oracle Forms and Oracle 10g applications.",
        "Supported manufacturing system modernization initiatives.",
        "Improved reporting and operational workflows.",
      ],
      impact: [
        "Improved process efficiency.",
        "Enhanced reporting capabilities.",
        "Built strong enterprise systems foundations.",
      ],
      tech: [
        "Oracle 10g",
        "Oracle Forms 6i",
        "PL/SQL",
        "Manufacturing Systems",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}

      <section className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Impact Journey
          </h1>

          <p className="text-2xl text-slate-300 max-w-4xl leading-relaxed">
            From manufacturing systems and banking transformation to global
            data platforms, AI capabilities and healthcare ecosystems —
            building products, platforms, teams and business capabilities
            that create measurable business impact.
          </p>
        </div>
      </section>

      {/* Timeline */}

      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="space-y-12">
          {journey.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10"
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h2>

                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-blue-600">
                      {item.company} | {item.role}
                    </p>
                  </div>

                  <div className="mt-2 md:mt-0">
                    <span className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium">
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Key Achievements
                </h3>

                <ul className="space-y-2 text-slate-700">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>✓ {achievement}</li>
                  ))}
                </ul>
              </div>

              {/* Impact */}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Business Impact
                </h3>

                <ul className="space-y-2 text-slate-700">
                  {item.impact.map((impact, i) => (
                    <li key={i}>• {impact}</li>
                  ))}
                </ul>
              </div>

              {/* Technology */}

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Technology & Domain Themes
                </h3>

                <div className="flex flex-wrap gap-3">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}

        <div className="mt-16">
          <a
            href="/"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800"
          >
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}