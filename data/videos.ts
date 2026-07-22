export interface Video {
  id: number;
  title: string;
  episode: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
  duration: string;
  published: string;
  featured?: boolean;
}

export const videos: Video[] = [
  {
    id: 3,
    title: "Building AI Systems: Why the Model Is Only One Piece of the Puzzle",
    episode: "Episode 3",
    description:
      "Why successful enterprise AI systems depend on much more than choosing the right model.",
    youtubeUrl: "https://www.youtube.com/watch?v=B-8Epv_OKhw",
    thumbnail: "https://img.youtube.com/vi/B-8Epv_OKhw/maxresdefault.jpg",
    duration: "4:44",
    published: "Latest",
    featured: true,
  },
  {
    id: 2,
    title: "Technology Follows Strategy",
    episode: "Episode 2",
    description:
      "Technology should always support business strategy—not define it.",
    youtubeUrl: "https://www.youtube.com/watch?v=6kVAJUt3SrY",
    thumbnail: "https://img.youtube.com/vi/6kVAJUt3SrY/maxresdefault.jpg",
    duration: "2:29",
    published: "Previous",
  },
  {
    id: 1,
    title: "AI Doesn't Replace Leadership",
    episode: "Episode 1",
    description:
      "Why AI amplifies leadership instead of replacing it.",
    youtubeUrl: "https://www.youtube.com/watch?v=mtIz8r7tn0E",
    thumbnail: "https://img.youtube.com/vi/mtIz8r7tn0E/maxresdefault.jpg",
    duration: "2:29",
    published: "Launch Episode",
  },
];