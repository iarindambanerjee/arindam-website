import Hero from "@/components/howWeWork/Hero";
import BusinessChallenges from "@/components/howWeWork/BusinessChallenges";
import EngagementJourney from "@/components/howWeWork/EngagementJourney";
import Deliverables from "@/components/howWeWork/Deliverables";
import WhyPartner from "@/components/howWeWork/WhyPartner";
import First30Days from "@/components/howWeWork/First30Days";
import CTA from "@/components/howWeWork/CTA";

export default function HowWeWorkPage() {
  return (
    <main className="bg-white text-slate-900">

      <Hero />

      <BusinessChallenges />

      <EngagementJourney />

      <Deliverables />

      <WhyPartner />

      <First30Days />

      <CTA />

    </main>
  );
}