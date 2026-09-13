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
    id: 10,
    title: "My Year with Three AI Tools: What Each One Actually Earned",
    episode: "Episode 10",
    description:
      "After a year of real work, what ChatGPT, Claude and Copilot actually earned—and why specialization beats forcing one tool to do everything.",
    youtubeUrl: "https://www.youtube.com/watch?v=mL2-tAeUIQ8",
    thumbnail: "https://img.youtube.com/vi/mL2-tAeUIQ8/maxresdefault.jpg",
    duration: "2:34",
    published: "Latest",
    featured: true,
  },
  {
    id: 9,
    title: "The Personal AI Toolkit: Which Tools Actually Matter (And Why Most Don't)",
    episode: "Episode 9",
    description:
      "Why mastering a handful of AI tool categories matters far more than collecting dozens of apps.",
    youtubeUrl: "https://www.youtube.com/watch?v=_afUutZjmX8",
    thumbnail: "https://img.youtube.com/vi/_afUutZjmX8/maxresdefault.jpg",
    duration: "2:14",
    published: "Previous",
  },
  {
    id: 8,
    title: "From Macro to the Micro: How to Get Started with AI If You Want to Make the Transition",
    episode: "Episode 8",
    description:
      "The practical guide to moving from AI awareness to real personal adoption.",
    youtubeUrl: "https://www.youtube.com/watch?v=AFcm0ISCBOM",
    thumbnail: "https://img.youtube.com/vi/AFcm0ISCBOM/maxresdefault.jpg",
    duration: "2:42",
    published: "Earlier",
  },
  {
    id: 7,
    title: "AI and Geopolitics",
    episode: "Episode 7",
    description:
      "How nations compete across compute, data, talent and AI infrastructure.",
    youtubeUrl: "https://www.youtube.com/watch?v=p8wMPEZ1BTU",
    thumbnail: "https://img.youtube.com/vi/p8wMPEZ1BTU/maxresdefault.jpg",
    duration: "2:33",
    published: "Earlier",
  },
  {
    id: 6,
    title: "AI ROI Isn't a Measurement Problem. It's an Ownership Problem",
    episode: "Episode 6",
    description:
      "Why measuring AI success starts with executive ownership, governance and accountability—not dashboards alone.",
    youtubeUrl: "https://www.youtube.com/watch?v=wJUGm1j9_kM",
    thumbnail: "https://img.youtube.com/vi/wJUGm1j9_kM/maxresdefault.jpg",
    duration: "4:01",
    published: "Earlier",
  },
  {
    id: 5,
    title: "Building an AI Center of Excellence: A Practical Playbook for Enterprise Leaders",
    episode: "Episode 5",
    description:
      "A practical framework for building an AI Center of Excellence that balances governance, innovation and enterprise-wide adoption.",
    youtubeUrl: "https://www.youtube.com/watch?v=FInMr9PDvrs",
    thumbnail: "https://img.youtube.com/vi/FInMr9PDvrs/maxresdefault.jpg",
    duration: "4:25",
    published: "Earlier",
  },
  {
    id: 4,
    title: "Why AI Projects Fail",
    episode: "Episode 4",
    description:
      "Why most enterprise AI initiatives fail—and what successful organizations do differently.",
    youtubeUrl: "https://www.youtube.com/watch?v=l0zk40H5Hyw",
    thumbnail: "https://img.youtube.com/vi/l0zk40H5Hyw/maxresdefault.jpg",
    duration: "4:23",
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
    duration: "3:38",
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