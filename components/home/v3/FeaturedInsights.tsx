import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllInsights } from "@/lib/insights";

export default function FeaturedInsights() {
  const articles = getAllInsights().slice(0, 3);

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
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {article.excerpt}
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