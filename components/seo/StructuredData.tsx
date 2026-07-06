export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Arindam Banerjee",

    url: "https://www.arindam-banerjee.com",

    image: "https://www.arindam-banerjee.com/og-image.jpg",

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
      "https://www.linkedin.com/in/arindambanerjeeit/",
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