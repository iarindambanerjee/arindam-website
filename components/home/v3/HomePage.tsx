import Hero from "@/components/home/v3/Hero";
import ExecutiveHighlights from "@/components/home/v3/ExecutiveHighlights";
import LeadershipPhilosophy from "@/components/home/v3/LeadershipPhilosophy";
import FeaturedInsights from "@/components/home/v3/FeaturedInsights";
import Connect from "@/components/home/v3/Connect";
import IndustriesPreview from "@/components/home/v3/IndustriesPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExecutiveHighlights />
      <LeadershipPhilosophy />
      <IndustriesPreview />
      <FeaturedInsights />
      <Connect />
    </>
  );
}