import Image from "next/image";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-20 items-center">

          <div>

            <Badge>
              Senior Manager • Persistent Systems
            </Badge>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">

              Technology Leadership

              <br />

              That Creates{" "}

              <span className="text-blue-600">

                Lasting Business Value

              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-2xl">

              I am a technology leader with more than
              <strong> 21 years of experience </strong>
              leading enterprise technology transformation,
              AI strategy, digital delivery and technology
              modernization across global organizations.

            </p>

            <p className="mt-6 text-lg text-slate-700 leading-8 max-w-2xl">

              This website shares my professional journey,
              leadership philosophy and perspectives on
              enterprise technology, innovation and business
              transformation.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button href="/experience">

                Explore My Experience

              </Button>

              <Button
                href="/insights"
                variant="secondary"
              >

                Read My Insights

              </Button>

            </div>

          </div>

          <div className="relative flex justify-center">

            <Image
              src="/arindam.jpg"
              alt="Arindam Banerjee"
              width={430}
              height={430}
              priority
              className="rounded-3xl shadow-2xl object-cover"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}