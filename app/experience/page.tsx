import Hero from "@/components/experience/Hero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import LeadershipSnapshot from "@/components/experience/LeadershipSnapshot";
import ExecutiveSnapshot from "@/components/experience/ExecutiveSnapshot";

export default function ExperiencePage() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <LeadershipSnapshot />
      <ExecutiveSnapshot />
    </>
  );
}