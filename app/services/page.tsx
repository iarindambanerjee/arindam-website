import Hero from "@/components/services/Hero";
import Clients from "@/components/services/Clients";
import Services from "@/components/services/Services";
import WhyChooseMe from "@/components/services/WhyChooseMe";
import EngagementProcess from "@/components/services/EngagementProcess";
import CTA from "@/components/services/CTA";

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero />
      <Clients />
      <Services />
      <WhyChooseMe />
      <EngagementProcess />
      <CTA />
    </main>
  );
}