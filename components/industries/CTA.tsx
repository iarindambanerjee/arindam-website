import Link from "next/link";

import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            Looking for Strategic Technology Leadership?
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-300">
            Whether you're modernising technology, adopting AI, scaling delivery
            or building digital products, I can help turn technology into a
            competitive advantage.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Start a Conversation
          </Link>
        </div>
      </Container>
    </section>
  );
}