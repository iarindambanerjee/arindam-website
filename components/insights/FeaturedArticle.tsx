import Link from "next/link";
import { getAllInsights } from "@/lib/insights";

export default function FeaturedArticle() {
  const article = getAllInsights()[0];

  if (!article) return null;

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-lg transition">

        <span className="uppercase tracking-[0.3em] text-sm text-blue-600 font-semibold">
          Featured Insight
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900 leading-tight">
          {article.title}
        </h2>

        <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-8">
          {article.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>

        <Link
          href={`/insights/${article.slug}`}
          className="inline-flex mt-8 text-blue-600 font-semibold hover:text-blue-700"
        >
          Read Executive Insight →
        </Link>

      </div>
    </section>
  );
}