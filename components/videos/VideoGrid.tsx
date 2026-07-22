import { videos } from "@/data/videos";
import VideoCard from "./VideoCard";

export default function VideoGrid() {
  return (
    <section className="py-20">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Latest Episodes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}

        </div>

      </div>

    </section>
  );
}