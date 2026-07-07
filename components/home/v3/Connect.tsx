import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Connect() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            Let's Connect
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-300">
            I'm always happy to connect with technology leaders, recruiters,
            hiring managers and professionals interested in AI, digital
            transformation and technology leadership.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="https://www.linkedin.com/in/arindambanerjeeit/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
            >
              Connect on LinkedIn
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}