import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { videos } from "@/data/videos";

export default function VideosPage() {
  const featured = videos.find((video) => video.featured) || videos[0];
  const previousVideos = videos.filter((video) => video.id !== featured.id);

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              Executive Insights
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
              Executive Video Library
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">
              Practical insights on Enterprise AI, Technology Strategy,
              Digital Transformation and Executive Leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
                ⭐ Featured Episode
              </div>

              <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                {featured.title}
              </h2>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>{featured.episode}</span>
                <span>•</span>
                <span>{featured.duration}</span>
                <span>•</span>
                <span>Enterprise AI</span>
              </div>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                {featured.description}
              </p>

              <div className="mt-10">
                <Link
                  href={featured.youtubeUrl}
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  <Play size={18} fill="white" />
                  Watch on YouTube
                </Link>
              </div>
            </div>

            {/* Right */}
            <Link
              href={featured.youtubeUrl}
              target="_blank"
              className="group relative block overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={featured.thumbnail}
                alt={featured.title}
                className="w-full transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20">
                <div className="rounded-full bg-white p-6 shadow-xl transition group-hover:scale-110">
                  <Play
                    size={42}
                    className="fill-blue-600 text-blue-600"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Previous Episodes */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              Archive
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Previous Episodes
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {previousVideos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={video.youtubeUrl} target="_blank">
                  <div className="overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{video.episode}</span>
                    <span>•</span>
                    <span>{video.duration}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                    {video.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {video.description}
                  </p>

                  <Link
                    href={video.youtubeUrl}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Watch Episode
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}