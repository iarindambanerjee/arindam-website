import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-28">
      <Container>

        <p className="uppercase tracking-[0.3em] text-blue-300 font-semibold">
          Experience
        </p>

        <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">
          Twenty-One Years of
          <br />
          Technology Leadership.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-300">
          My career has been built around helping organisations
          transform technology into measurable business outcomes—
          from global consulting and enterprise transformation
          to AI strategy, delivery excellence and executive leadership.
        </p>

      </Container>
    </section>
  );
}