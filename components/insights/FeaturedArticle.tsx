import Link from "next/link";

export default function FeaturedArticle() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-lg transition">

        <span className="uppercase tracking-[0.3em] text-sm text-blue-600 font-semibold">
          Featured Insight
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900 leading-tight">
          Why Every Growing Business Needs a Fractional CIO Before Hiring a CTO
        </h2>

        <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-8">
          Many organisations hire a CTO when what they really need is
          strategic technology leadership. Here's how a Fractional CIO
          helps businesses scale, modernise and make better technology
          investment decisions.
        </p>

        <Link
          href="/insights/does-your-growing-business-need-a-cto-or-a-fractional-cio"
          className="inline-flex mt-8 text-blue-600 font-semibold hover:text-blue-700"
        >
          Read Executive Insight →
        </Link>

      </div>
    </section>
  );
}