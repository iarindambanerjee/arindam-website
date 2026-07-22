import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-8 text-center">

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-sm">
          LET'S CONNECT
        </p>

        <h2 className="mt-6 text-5xl font-black tracking-tight">
          Let's Connect
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-300 max-w-3xl mx-auto">
          I enjoy connecting with technology leaders,
recruiters, founders and professionals who share
an interest in technology, innovation and business transformation.
If you'd like to connect, I'd be delighted to hear from you.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <Link
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-all duration-300"
          >
            Email Me
          </Link>

          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-8 py-4 text-lg font-semibold hover:bg-slate-800 transition-all duration-300"
          >
            Connect on LinkedIn
          </Link>

        </div>

      </div>
    </section>
  );
}