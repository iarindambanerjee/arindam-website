import { getInsight } from "@/lib/insights";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { contentLinks } from "@/data/contentLinks";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;

  const article = await getInsight(slug);

  return (
    <main className="max-w-3xl mx-auto px-8 py-24">

      <div className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
        {article.category}
      </div>

      <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight tracking-tight">
        {article.title}
      </h1>

      <div className="mt-6 flex items-center gap-3 text-slate-500">
        <span>
          {new Date(article.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>

        <span>•</span>

        <span>{article.readingTime} read</span>
      </div>

      <article
        className="prose prose-lg prose-slate max-w-none mt-16"
        dangerouslySetInnerHTML={{
          __html: article.contentHtml,
        }}
      />

      {contentLinks[slug as keyof typeof contentLinks] && (
  <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">

    <p className="uppercase tracking-[0.3em] text-blue-600 text-sm font-semibold">
      Prefer watching?
    </p>

    <h2 className="mt-3 text-3xl font-bold">
      Watch the accompanying Executive Insight
    </h2>

    <p className="mt-4 text-slate-600 text-lg">
      This article is also available as a concise executive briefing on YouTube.
    </p>

    <Link
      href={contentLinks[slug as keyof typeof contentLinks].video}
      target="_blank"
      className="inline-flex items-center gap-3 mt-8 rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition"
    >
      <PlayCircle size={20} />
      {contentLinks[slug as keyof typeof contentLinks].label}
    </Link>

  </section>
)}

    </main>
  );
}