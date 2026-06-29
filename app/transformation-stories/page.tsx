import Hero from "@/components/transformationStories/Hero";
import StoryGrid from "@/components/transformationStories/StoryGrid";
import CTA from "@/components/transformationStories/CTA";

export default function TransformationStoriesPage() {
  return (
    <main className="bg-white text-slate-900">

      <Hero />

      <StoryGrid />

      <CTA />

    </main>
  );
}