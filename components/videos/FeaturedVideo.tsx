import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { videos } from "@/data/videos";

export default function FeaturedVideo() {
  const latest = videos.find((v) => v.featured) ?? videos[0];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
              Latest Executive Insight
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight">
              {latest.title}
            </h2>

            <p className="mt-6 text-xl text-slate-600 leading-8">
              {latest.description}
            </p>

            <div className="flex gap-4 mt-10">

              <Link
                href={latest.youtubeUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition"
              >
                <PlayCircle size={20} />
                Watch on YouTube
              </Link>

              <Link
                href="/videos"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-4 font-semibold hover:bg-white transition"
              >
                View All Videos
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

          {/* Right */}

          <Link
            href={latest.youtubeUrl}
            target="_blank"
          >
            <img
              src={latest.thumbnail}
              alt={latest.title}
              className="rounded-3xl shadow-2xl hover:scale-[1.02] transition"
            />
          </Link>

        </div>

      </div>

    </section>
  );
}