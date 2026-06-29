import StoryCard, { Story } from "./StoryCard";

const stories: Story[] = [
  {
    title: "Building a Global Technology Delivery Centre",
    client: "Firmenich",
    industry: "Manufacturing",
    challenge:
      "Establish a scalable offshore delivery organisation capable of supporting global enterprise applications while ensuring governance, knowledge transfer and operational excellence.",
    role:
      "Led knowledge transition, delivery setup, governance and stakeholder collaboration to establish a high-performing global technology delivery capability.",
    outcome:
      "Successfully transitioned more than 30 enterprise applications and created a scalable operating model supporting global business operations.",
  },
  {
    title: "Taste Advisor Digital Platform",
    client: "Firmenich",
    industry: "Consumer Products",
    challenge:
      "Create an innovative digital platform that enabled consumers to capture taste preferences and generate valuable market insights.",
    role:
      "Led product strategy, delivery and cross-functional collaboration across business and technology teams.",
    outcome:
      "Delivered a scalable digital product supporting customer engagement and data-driven decision making.",
  },
  {
    title: "Enterprise Product Data Platform",
    client: "Firmenich",
    industry: "Manufacturing",
    challenge:
      "Consolidate fragmented product information into a unified enterprise platform supporting global operations.",
    role:
      "Provided technology leadership, architecture guidance and programme governance across multiple teams.",
    outcome:
      "Improved product data quality, accelerated decision-making and established a strong digital foundation.",
  },
  {
    title: "AI Centre of Excellence",
    client: "Red Apple Technologies",
    industry: "Gaming",
    challenge:
      "Introduce AI capabilities across the organisation while identifying practical opportunities for business transformation.",
    role:
      "Established the AI Centre of Excellence and defined strategic initiatives across AI, Cloud and Automation.",
    outcome:
      "Created reusable AI capabilities that accelerated innovation and strengthened technical leadership.",
  },
  {
    title: "Healthcare Account Growth",
    client: "Matellio",
    industry: "Healthcare",
    challenge:
      "Expand strategic client relationships while improving delivery quality and identifying new business opportunities.",
    role:
      "Managed enterprise accounts, executive stakeholder relationships and delivery governance.",
    outcome:
      "Strengthened client partnerships, increased account value and improved long-term customer satisfaction.",
  },
  {
    title: "Enterprise Banking Modernisation",
    client: "IBM",
    industry: "Banking",
    challenge:
      "Modernise enterprise banking applications while maintaining operational stability across mission-critical systems.",
    role:
      "Led technical delivery, stakeholder engagement and production support across multiple releases.",
    outcome:
      "Delivered reliable enterprise solutions supporting business continuity and regulatory requirements.",
  },
];

export default function StoryGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Transformation Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Selected
            <span className="text-blue-600"> Transformation Stories</span>
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Every engagement is different, but they all share one common goal:
            using technology leadership to solve meaningful business problems
            and create measurable outcomes.
          </p>

        </div>

        {/* Story Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {stories.map((story) => (
            <StoryCard
              key={story.title}
              story={story}
            />
          ))}

        </div>

      </div>
    </section>
  );
}