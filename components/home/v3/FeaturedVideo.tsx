import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { videos } from "@/data/videos";

export default function FeaturedVideo() {
  const latest = videos.find((v) => v.featured) || videos[0];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}

          <div>

            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
              LATEST EXECUTIVE INSIGHT
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight">
              {latest.title}
            </h2>

            <p className="mt-6 text-xl text-slate-600 leading-8">
              {latest.description}
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href={latest.youtubeUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition"
              >
                <Play size={18} />
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

          {/* Thumbnail */}

          <Link
            href={latest.youtubeUrl}
            target="_blank"
            className="group"
          >
            <img
              src={latest.thumbnail}
              alt={latest.title}
              className="rounded-3xl shadow-2xl transition duration-300 group-hover:scale-[1.02]"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}