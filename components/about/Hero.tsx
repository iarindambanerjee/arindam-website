import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            About
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Technology Leadership
            <br />
            Built on Business Outcomes.
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Over two decades of experience leading enterprise technology,
            digital transformation, AI strategy and global delivery across
            consulting, enterprise and technology organizations.
          </p>
        </div>
      </Container>
    </section>
  );
}