import Hero from "@/components/experience/Hero";
import LeadershipSnapshot from "@/components/experience/LeadershipSnapshot";
import CareerJourney from "@/components/experience/CareerJourney";
import Achievements from "@/components/experience/Achievements";
import Industries from "@/components/experience/Industries";
import Certifications from "@/components/experience/Certifications";
import CTA from "@/components/experience/CTA";

export default function ExperiencePage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <Hero />

      {/* Executive Snapshot */}

      <LeadershipSnapshot />

      {/* Career Journey */}

      <CareerJourney />

      <Achievements />

      <Industries />

      <Certifications />

       <CTA />

    </main>
  );
}