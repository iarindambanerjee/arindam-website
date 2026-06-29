import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <span className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-wider">
          Ready to Start Your Transformation?
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight">
          Let's Build the Next
          <br />
          Transformation Story Together
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-300 max-w-3xl mx-auto">
          Every successful transformation starts with a conversation.
          Whether you're modernising technology, exploring AI,
          improving delivery or planning your next phase of growth,
          I'd be delighted to discuss how we can work together.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <a
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 hover:bg-slate-100 transition"
          >
            Book a Discovery Call

            <ArrowRight size={18} />

          </a>

          <a
            href="/services"
            className="rounded-xl border border-slate-600 px-8 py-4 font-semibold hover:bg-slate-800 transition"
          >
            Explore Services
          </a>

        </div>

      </div>
    </section>
  );
}