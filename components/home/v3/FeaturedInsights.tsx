
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const articles = [
  {
    title: "AI Doesn't Replace Leadership. It Amplifies It.",
    description:
      "Why executive leadership becomes more important—not less—in an AI-driven enterprise.",
    href: "/insights",
  },
  {
    title: "Technology Should Follow Strategy",
    description:
      "Enterprise transformation succeeds when business strategy leads technology decisions.",
    href: "/insights",
  },
  {
    title: "Building High-Performing Technology Organizations",
    description:
      "Lessons learned from leading delivery, transformation and engineering teams across industries.",
    href: "/insights",
  },
];

export default function FeaturedInsights() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="Latest Insights"
          subtitle="Perspectives on technology leadership, AI and digital transformation."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
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