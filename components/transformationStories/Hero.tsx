import { ArrowRight, Building2, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Section Header */}

        <div className="max-w-5xl">

          <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium mb-8">
            Transformation Stories
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900">

            Real Business Challenges.
            <br />

            <span className="text-blue-600">
              Practical Technology Leadership.
            </span>

          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9 max-w-4xl">

            Every organisation faces unique technology challenges.
            These transformation stories demonstrate how strategic
            leadership, modern technology and strong governance can
            create measurable business outcomes.

          </p>

        </div>

        {/* Featured Transformation */}

        <div className="mt-24 rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-12">

              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">

                <Building2 size={18} />

                Featured Transformation

              </span>

              <h2 className="mt-8 text-4xl font-bold text-slate-900 leading-tight">

                Building a Global Technology Delivery Centre

              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">

                Helped establish a global offshore technology delivery
                organisation by transitioning enterprise applications,
                building delivery capability, strengthening governance
                and creating a scalable operating model that supported
                international business growth.

              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                  Enterprise Transformation
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                  Global Delivery
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                  Technology Leadership
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                  Governance
                </span>

              </div>

              <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white hover:bg-slate-800 transition">

                Read this Story

                <ArrowRight size={18} />

              </button>

            </div>

            {/* Right */}

            <div className="bg-slate-900 text-white flex flex-col justify-center p-12">

              <div className="flex items-center gap-3 text-blue-300">

                <Globe2 size={22} />

                <span className="uppercase tracking-widest text-sm font-semibold">

                  Executive Impact

                </span>

              </div>

              <div className="grid grid-cols-2 gap-8 mt-10">

                <div>

                  <h3 className="text-5xl font-bold text-blue-400">

                    30+

                  </h3>

                  <p className="mt-3 text-slate-300">

                    Enterprise Applications Transitioned

                  </p>

                </div>

                <div>

                  <h3 className="text-5xl font-bold text-blue-400">

                    Global

                  </h3>

                  <p className="mt-3 text-slate-300">

                    Delivery Organisation

                  </p>

                </div>

                <div>

                  <h3 className="text-5xl font-bold text-blue-400">

                    Multi-Year

                  </h3>

                  <p className="mt-3 text-slate-300">

                    Transformation Programme

                  </p>

                </div>

                <div>

                  <h3 className="text-5xl font-bold text-blue-400">

                    24×7

                  </h3>

                  <p className="mt-3 text-slate-300">

                    Global Operational Support

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}