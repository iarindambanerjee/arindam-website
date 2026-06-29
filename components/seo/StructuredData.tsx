export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Arindam Banerjee",

    url: "https://www.arindam-banerjee.com",

    image: "https://www.arindam-banerjee.com/og-image.jpg",

    jobTitle: "Fractional CIO",

    description:
      "Fractional CIO helping founders, CEOs and growing businesses modernise technology, adopt AI responsibly and deliver digital transformation.",

    knowsAbout: [
      "Technology Strategy",
      "Artificial Intelligence",
      "Digital Transformation",
      "Enterprise Architecture",
      "Cloud Computing",
      "Technology Leadership",
      "IT Strategy",
      "Fractional CIO",
    ],

    sameAs: [
      "https://www.linkedin.com/in/iarindambanerjee",
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