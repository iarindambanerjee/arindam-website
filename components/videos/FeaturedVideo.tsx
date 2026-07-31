import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { videos } from "@/data/videos";

export default function FeaturedVideo() {
  const latest = videos.find((v) => v.featured) ?? videos[0];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              🎥 Latest Executive Insight
            </div>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
              {latest.title}
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span>{latest.episode}</span>
              <span>•</span>
              <span>{latest.duration}</span>
              <span>•</span>
              <span>Enterprise AI</span>
            </div>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              {latest.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={latest.youtubeUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                <PlayCircle size={20} />
                Watch on YouTube
              </Link>

              <Link
                href="/videos"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-4 font-semibold transition hover:bg-white"
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
            className="group relative block overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src={latest.thumbnail}
              alt={latest.title}
              className="w-full transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20">
              <div className="rounded-full bg-white p-6 shadow-xl transition group-hover:scale-110">
                <PlayCircle
                  size={42}
                  className="fill-blue-600 text-blue-600"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}