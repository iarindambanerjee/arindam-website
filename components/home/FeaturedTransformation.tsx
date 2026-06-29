import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Globe2,
  Trophy,
  Users,
} from "lucide-react";

export default function FeaturedTransformation() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}

        <div className="text-center max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-semibold uppercase tracking-wider text-sm">

            <Building2 size={18} />

            Featured Transformation

          </div>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Building a Global
            <span className="text-blue-600">
              {" "}Technology Delivery Centre
            </span>

          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-9">

            Helping a global enterprise establish a scalable offshore
            technology organisation supporting mission-critical business
            applications while improving governance, delivery capability
            and operational excellence.

          </p>

        </div>

        {/* Main Card */}

        <div className="mt-20 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-12">

              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">

                Manufacturing • Global Enterprise

              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">

                The Business Challenge

              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Establish a high-performing offshore technology capability
                that could seamlessly support global enterprise applications,
                accelerate knowledge transition, improve governance and create
                a scalable delivery organisation for future growth.

              </p>

              <h3 className="mt-10 text-3xl font-bold text-slate-900">

                My Role

              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Led the transition strategy, stakeholder engagement,
                governance model and delivery setup while building a
                sustainable operating model capable of supporting
                worldwide business operations.

              </p>

              <Link
                href="/transformation-stories"
                className="inline-flex items-center gap-3 mt-10 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition"
              >
                Explore Transformation Stories

                <ArrowRight size={18} />

              </Link>

            </div>

            {/* Right */}

            <div className="bg-slate-900 text-white p-12 flex flex-col justify-center">

              <div className="flex items-center gap-3 text-blue-300">

                <Globe2 size={20} />

                Business Outcomes

              </div>

              <div className="grid grid-cols-2 gap-8 mt-10">

                <div>

                  <Trophy className="text-blue-400 mb-3" size={32} />

                  <h4 className="text-4xl font-bold">

                    30+

                  </h4>

                  <p className="mt-2 text-slate-300">

                    Enterprise Applications Transitioned

                  </p>

                </div>

                <div>

                  <Users className="text-blue-400 mb-3" size={32} />

                  <h4 className="text-4xl font-bold">

                    Global

                  </h4>

                  <p className="mt-2 text-slate-300">

                    Delivery Organisation Established

                  </p>

                </div>

                <div>

                  <Globe2 className="text-blue-400 mb-3" size={32} />

                  <h4 className="text-4xl font-bold">

                    Enterprise

                  </h4>

                  <p className="mt-2 text-slate-300">

                    Governance Model Introduced

                  </p>

                </div>

                <div>

                  <Building2 className="text-blue-400 mb-3" size={32} />

                  <h4 className="text-4xl font-bold">

                    Scalable

                  </h4>

                  <p className="mt-2 text-slate-300">

                    Global Operating Capability

                  </p>

                </div>

              </div>

              <div className="mt-12 border-t border-slate-700 pt-8">

                <p className="text-lg leading-8 text-slate-300">

                  This engagement laid the foundation for a sustainable
                  global technology delivery capability supporting
                  business-critical operations across multiple regions.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}