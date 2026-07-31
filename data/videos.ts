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
    id: 6,
    title: "AI ROI Isn't a Measurement Problem. It's an Ownership Problem",
    episode: "Episode 6",
    description:
      "Why measuring AI success starts with executive ownership, governance and accountability—not dashboards alone.",
    youtubeUrl: "https://www.youtube.com/watch?v=wJUGm1j9_kM",
    thumbnail: "https://img.youtube.com/vi/wJUGm1j9_kM/maxresdefault.jpg",
    duration: "4:00",
    published: "Latest",
    featured: true,
  },
  {
    id: 5,
    title: "Building an AI Center of Excellence: A Practical Playbook for Enterprise Leaders",
    episode: "Episode 5",
    description:
      "A practical framework for building an AI Center of Excellence that balances governance, innovation, and enterprise-wide adoption.",
    youtubeUrl: "https://www.youtube.com/watch?v=FInMr9PDvrs",
    thumbnail: "https://img.youtube.com/vi/FInMr9PDvrs/maxresdefault.jpg",
    duration: "4:24",
    published: "Previous",
  },
  {
    id: 4,
    title: "Why Every Enterprise Needs an AI Center of Excellence",
    episode: "Episode 4",
    description:
      "Exploring why organisations need an AI Center of Excellence to scale AI initiatives successfully.",
    youtubeUrl: "https://www.youtube.com/watch?v=l0zk40H5Hyw",
    thumbnail: "https://img.youtube.com/vi/l0zk40H5Hyw/maxresdefault.jpg",
    duration: "4:22",
    published: "Earlier",
  },
  {
    id: 3,
    title: "Building AI Systems: Why the Model Is Only One Piece of the Puzzle",
    episode: "Episode 3",
    description:
      "Why successful enterprise AI systems depend on much more than choosing the right model.",
    youtubeUrl: "https://www.youtube.com/watch?v=B-8Epv_OKhw",
    thumbnail: "https://img.youtube.com/vi/B-8Epv_OKhw/maxresdefault.jpg",
    duration: "4:44",
    published: "Earlier",
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
    published: "Earlier",
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