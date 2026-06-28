import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <span className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-sm">
          LET'S WORK TOGETHER
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          Looking for Executive Technology Leadership?
        </h2>

        <p className="mt-8 text-xl text-slate-300 leading-9 max-w-3xl mx-auto">
          Whether you're scaling a startup, modernising enterprise
          technology, delivering digital transformation or exploring AI,
          I help organisations turn technology into measurable business
          outcomes.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            <Calendar size={20} />
            Book a Strategy Session
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-3 border border-slate-600 hover:border-slate-400 hover:bg-slate-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Explore My Services
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>
    </section>
  );
}