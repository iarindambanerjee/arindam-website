import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">
              <Calendar size={16} />
              21+ Years of Leadership
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight">
              Leadership
              <br />
              Experience
            </h1>

            <p className="mt-8 text-2xl leading-relaxed text-slate-300">
              Building technology platforms, leading digital transformation
              and helping organisations turn technology into measurable
              business outcomes.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400 max-w-2xl">
              From global enterprises to high-growth organisations,
              I've spent over two decades delivering transformation,
              AI initiatives, enterprise platforms and operational excellence
              across healthcare, manufacturing, banking, gaming and
              consumer industries.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                Book a Strategy Session
              </a>

              <a
                href="/services"
                className="border border-slate-600 hover:border-slate-400 hover:bg-slate-800 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 transition-all duration-300"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>

              <Image
                src="/arindam.jpg"
                alt="Arindam Banerjee"
                width={430}
                height={430}
                priority
                className="relative rounded-3xl shadow-2xl border border-slate-700"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}