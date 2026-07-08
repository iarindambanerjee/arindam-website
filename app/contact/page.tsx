import Hero from "@/components/contact/Hero";
import WaysToHelp from "@/components/contact/WaysToHelp";
import ContactMethods from "@/components/contact/ContactMethods";
import FAQ from "@/components/contact/FAQ";
import CTA from "@/components/contact/CTA";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <WaysToHelp />
      <ContactMethods />
      <FAQ />
      <CTA />
    </>
  );
}