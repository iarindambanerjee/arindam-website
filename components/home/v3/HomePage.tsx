import Hero from "@/components/home/v3/Hero";
import ExecutiveHighlights from "@/components/home/v3/ExecutiveHighlights";
import LeadershipPhilosophy from "@/components/home/v3/LeadershipPhilosophy";
import CareerJourney from "@/components/home/v3/CareerJourney";
import FeaturedInsights from "@/components/home/v3/FeaturedInsights";
// Uncomment after we create it
// import Connect from "@/components/home/v3/Connect";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExecutiveHighlights />
      <LeadershipPhilosophy />
      <CareerJourney />
      <FeaturedInsights />
      {/* <Connect /> */}
    </>
  );
}