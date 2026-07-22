import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Video } from "@/data/videos";

interface Props {
  video: Video;
}

export default function VideoCard({ video }: Props) {
  return (
    <div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-blue-500 transition">

      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full aspect-video object-cover"
      />

      <div className="p-6">

        <div className="text-blue-400 text-sm font-semibold">
          {video.episode}
        </div>

        <h3 className="text-xl font-bold text-white mt-2">
          {video.title}
        </h3>

        <p className="text-slate-400 mt-3">
          {video.description}
        </p>

        <Link
          href={video.youtubeUrl}
          target="_blank"
          className="inline-flex items-center gap-2 mt-5 text-blue-400 hover:text-blue-300"
        >
          Watch on YouTube
          <ExternalLink size={16} />
        </Link>

      </div>

    </div>
  );
}