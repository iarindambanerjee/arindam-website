import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const articles = [
  {
    title: "AI ROI Isn't a Measurement Problem. It's an Ownership Problem",
    description:
      "Why successful enterprise AI depends on executive ownership, governance and accountability—not dashboards alone.",
    href: "/insights/ai-roi-isnt-a-measurement-problem-its-an-ownership-problem",
  },
  {
    title: "Building an AI Center of Excellence",
    description:
      "Why every enterprise needs an AI Center of Excellence to accelerate innovation, governance and business value.",
    href: "/insights/building-an-ai-center-of-excellence",
  },
  {
    title: "Building AI Systems: Why the Model Is Only One Piece of the Puzzle",
    description:
      "Enterprise AI success depends on data, governance, architecture and operational excellence—not just the AI model.",
    href: "/insights/building-ai-systems-why-the-model-is-only-one-piece-of-the-puzzle",
  },
];

export default function FeaturedInsights() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="Latest Insights"
          subtitle="Perspectives on technology leadership, AI strategy and enterprise transformation."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {article.description}
              </p>

              <div className="mt-8 font-semibold text-blue-600">
                Read Article →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}