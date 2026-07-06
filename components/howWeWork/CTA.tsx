import { ArrowRight } from "lucide-react";
import DiscoveryCallButton from "@/components/ui/DiscoveryCallButton";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <span className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-wider">
          Let's Start the Conversation
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight">
          Ready to Align Technology
          <br />
          With Your Business Strategy?
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-300 max-w-3xl mx-auto">
          Whether you're preparing for growth, modernising legacy systems,
          exploring AI adoption or looking for experienced executive
          technology leadership, I'd be happy to discuss your goals and
          explore how I can help.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-5">
<DiscoveryCallButton
  source="services_cta"
  className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
>
  Book a Discovery Call
</DiscoveryCallButton>

          <a
            href="/services"
            className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Services
          </a>

        </div>

      </div>
    </section>
  );
}