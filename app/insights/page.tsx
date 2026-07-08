import Link from "next/link";
import { getAllInsights } from "@/lib/insights";

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <main className="max-w-6xl mx-auto px-8 py-24">

      <div className="max-w-3xl">

        <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
          INSIGHTS
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Executive Insights
        </h1>

        <p className="mt-6 text-xl text-slate-600 leading-8">
          Articles on technology leadership, AI strategy, digital
          transformation and building high-performing organisations.
        </p>

      </div>

      <div className="mt-16 space-y-8">

        {insights.map((article) => (

          <article
            key={article.slug}
            className="rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all"
          >

            <div className="flex gap-4 text-sm text-slate-500">

              <span>
  {new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</span>

              <span>•</span>

              <span>{article.readingTime}</span>

              <span>•</span>

              <span>{article.category}</span>

            </div>

            <h2 className="mt-4 text-3xl font-bold">

              <Link href={`/insights/${article.slug}`}>
                {article.title}
              </Link>

            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              {article.excerpt}
            </p>

          </article>

        ))}

      </div>

    </main>
  );
}