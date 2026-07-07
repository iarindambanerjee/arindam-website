import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-sm">
            INDUSTRIES
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
            Helping Businesses Transform Through Technology & AI
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-300">
            Over two decades of delivering technology transformation,
            enterprise platforms, AI initiatives and digital products across
            global enterprises, technology companies and high-growth
            organisations.
          </p>
        </div>
      </Container>
    </section>
  );
}