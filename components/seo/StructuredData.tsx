import { siteConfig } from "@/data/siteConfig";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: siteConfig.name,

    url: siteConfig.website,

    image: `${siteConfig.website}/og-image.jpg`,

    jobTitle: "Senior Manager",

    description:
      "Technology leader with more than 21 years of experience delivering enterprise technology transformation, AI strategy, digital transformation and delivery excellence across global organisations.",

    knowsAbout: [
      "Technology Leadership",
      "Enterprise Technology",
      "Digital Transformation",
      "AI Strategy",
      "Enterprise Architecture",
      "Cloud Transformation",
      "Programme Management",
      "Technology Strategy",
      "Delivery Excellence",
    ],

    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.youtube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}