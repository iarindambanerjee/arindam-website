import { getInsight } from "@/lib/insights";

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

    </main>
  );
}