export default function ArticleGrid() {
  const articles = [
    {
      title: "AI Adoption Without Strategy",
      readTime: "Coming Soon",
    },
    {
      title: "Technology Debt Is a Business Problem",
      readTime: "Coming Soon",
    },
    {
      title: "Building High-Performing Technology Teams",
      readTime: "Coming Soon",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 pb-24">

      <h2 className="text-3xl font-bold text-slate-900 mb-10">
        Upcoming Insights
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {articles.map((article) => (
          <div
            key={article.title}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
              {article.readTime}
            </p>

            <h3 className="mt-5 text-2xl font-semibold leading-snug">
              {article.title}
            </h3>

            <p className="mt-6 text-slate-600">
              Executive perspective coming soon.
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}