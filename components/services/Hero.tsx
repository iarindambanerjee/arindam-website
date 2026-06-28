export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="max-w-4xl">

          <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium mb-8">
            Fractional CIO • AI Advisory • Technology Strategy
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900">
            Helping Growing Businesses Scale Through{" "}
            <span className="text-blue-600">
              Technology Leadership
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9 max-w-3xl">
            I partner with founders, CEOs and leadership teams to
            modernize technology, adopt AI responsibly and build
            scalable digital capabilities that accelerate business growth.
          </p>

          <p className="mt-6 text-lg text-slate-700 leading-8 max-w-3xl">
            With over 21 years of enterprise leadership experience,
            I help organisations make confident technology decisions
            without the cost of hiring a full-time CIO or CTO.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="/#contact"
              className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white hover:bg-slate-800 transition"
            >
              Book a Free Strategy Session
            </a>

            <a
              href="/experience"
              className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 transition"
            >
              View Experience
            </a>

            <a
              href="/"
              className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 transition"
            >
              ← Back to Home
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}