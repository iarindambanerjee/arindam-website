export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="max-w-5xl">

          <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium mb-8">
            Fractional CIO • AI Advisory • Executive Technology Leadership
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900">

            Technology Leadership That
            <span className="text-blue-600"> Drives Business Outcomes</span>

          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9 max-w-4xl">

            Every business reaches a point where technology decisions
            become business decisions.

            <br />
            <br />

            Whether you're scaling rapidly, modernising legacy platforms,
            preparing for AI adoption or leading digital transformation,
            you need experienced executive technology leadership—
            without the cost of hiring a full-time CIO.

          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="/#contact"
              className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white hover:bg-slate-800 transition"
            >
              Book a Discovery Call
            </a>

            <a
              href="/services"
              className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 transition"
            >
              Explore Services
            </a>

          </div>

        </div>

        {/* Executive Summary */}

        <div className="mt-24 grid md:grid-cols-4 gap-8">

          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">

            <h3 className="text-4xl font-bold text-blue-600">
              21+
            </h3>

            <p className="mt-3 text-slate-700 font-medium">
              Years Leading Technology
            </p>

          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">

            <h3 className="text-4xl font-bold text-blue-600">
              $5M+
            </h3>

            <p className="mt-3 text-slate-700 font-medium">
              Enterprise Portfolio Managed
            </p>

          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">

            <h3 className="text-4xl font-bold text-blue-600">
              30+
            </h3>

            <p className="mt-3 text-slate-700 font-medium">
              Enterprise Programs Delivered
            </p>

          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">

            <h3 className="text-4xl font-bold text-blue-600">
              6+
            </h3>

            <p className="mt-3 text-slate-700 font-medium">
              Industries Transformed
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}