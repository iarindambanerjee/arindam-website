import Image from "next/image";
import FeaturedTransformation from "@/components/home/FeaturedTransformation";
import { siteConfig } from "@/data/siteConfig";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">
  <div className="grid lg:grid-cols-[1.5fr_0.9fr] gap-20 items-center">

    <div className="max-w-3xl">

      <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium mb-8">
        Technology Strategy • AI Advisory • Fractional CIO
      </span>

      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
        Helping Growing Businesses Transform Through{" "}
        <span className="text-blue-600 inline">
          Technology, AI & Strategic Leadership
        </span>
      </h1>

      <p className="mt-8 text-xl text-slate-600 leading-9">
        I partner with founders, CEOs and leadership teams to align technology
        with business strategy, adopt AI with confidence and build organizations
        that scale.
      </p>

      <p className="mt-6 text-lg text-slate-700 leading-8">
        With over 21 years of experience across global enterprises and
        high-growth businesses, I help organizations reduce technology risk,
        accelerate transformation and make better strategic decisions.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="#contact"
          className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition"
        >
          Book a Free Strategy Session
        </a>

        <a
          href="/services"
          className="border border-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
        >
          Explore Services
        </a>

      </div>

    </div>

    <div className="flex justify-center">

      <Image
        src="/arindam.jpg"
        alt="Arindam Banerjee"
        width={420}
        height={420}
        className="rounded-3xl shadow-2xl"
        priority
      />

    </div>

  </div>
</section>
      {/* Metrics */}

      <section className="max-w-7xl mx-auto px-8 py-24">

  <div className="text-center mb-16">

    <span className="uppercase tracking-[0.3em] text-sm text-blue-600 font-semibold">
      WHY CLIENTS WORK WITH ME
    </span>

    <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
      Technology Leadership Focused on
      Business Outcomes
    </h2>

    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
      I don't sell technology.
      I help businesses make better technology decisions that reduce risk,
      improve efficiency and accelerate growth.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white rounded-2xl p-8 shadow-sm border">

      <div className="text-5xl mb-6">
        🧠
      </div>

      <h3 className="text-2xl font-bold mb-4">
        Executive Perspective
      </h3>

      <p className="text-slate-600 leading-8">
        Technology strategy aligned with business goals,
        financial priorities and long-term growth.
      </p>

    </div>

    <div className="bg-white rounded-2xl p-8 shadow-sm border">

      <div className="text-5xl mb-6">
        ⚡
      </div>

      <h3 className="text-2xl font-bold mb-4">
        Practical AI
      </h3>

      <p className="text-slate-600 leading-8">
        AI initiatives designed around measurable ROI,
        operational efficiency and customer value—not hype.
      </p>

    </div>

    <div className="bg-white rounded-2xl p-8 shadow-sm border">

      <div className="text-5xl mb-6">
        🚀
      </div>

      <h3 className="text-2xl font-bold mb-4">
        Proven Delivery
      </h3>

      <p className="text-slate-600 leading-8">
        More than two decades leading transformation
        across enterprises, product companies and
        high-growth businesses.
      </p>

    </div>

  </div>

</section>

      {/* Featured Transformation */}

<FeaturedTransformation />

      {/* Building What Doesn't Exist Yet */}

      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Building What Doesn't Exist Yet
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Throughout my career, I have been drawn to opportunities where the
            path was unclear, the systems did not exist, and success required
            more than technology alone.
          </p>

          <p className="text-lg text-slate-600 max-w-4xl mx-auto mt-6 leading-relaxed">
            Whether building enterprise platforms, delivery organizations, AI
            capabilities, or business ecosystems, my focus has remained
            consistent:
            <span className="font-semibold text-slate-900">
              {" "}
              Turning ideas into scalable realities.
            </span>
          </p>
        </div>
      </section>

      {/* How I Help Organisations */}

<section className="max-w-6xl mx-auto px-8 py-20">

  <div className="text-center mb-14">

    <span className="uppercase tracking-[0.3em] text-sm text-blue-600 font-semibold">
      HOW I HELP ORGANISATIONS
    </span>

    <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
      Strategic Technology Leadership
      for Sustainable Growth
    </h2>

    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
      I partner with leadership teams to align technology with business
      objectives, modernise operations and build organisations that are
      ready for the future.
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-white rounded-2xl p-8 shadow-sm border">

      <h3 className="text-2xl font-bold mb-4">
        Fractional CIO Leadership
      </h3>

      <p className="text-slate-600 leading-8">
        Executive technology leadership, operating models,
        governance frameworks and strategic decision support
        without the cost of a full-time CIO.
      </p>

    </div>

    <div className="bg-white rounded-2xl p-8 shadow-sm border">

      <h3 className="text-2xl font-bold mb-4">
        Digital Transformation
      </h3>

      <p className="text-slate-600 leading-8">
        Modernising platforms, improving delivery capability,
        establishing governance and leading organisation-wide
        transformation initiatives.
      </p>

    </div>

    <div className="bg-white rounded-2xl p-8 shadow-sm border">

      <h3 className="text-2xl font-bold mb-4">
        AI & Innovation
      </h3>

      <p className="text-slate-600 leading-8">
        Identifying practical AI opportunities, establishing
        Centres of Excellence and helping organisations adopt
        AI responsibly.
      </p>

    </div>

    <div className="bg-white rounded-2xl p-8 shadow-sm border">

      <h3 className="text-2xl font-bold mb-4">
        Product & Delivery Excellence
      </h3>

      <p className="text-slate-600 leading-8">
        Delivering complex technology programmes, scaling teams
        and turning business ideas into successful products and
        digital capabilities.
      </p>

    </div>

  </div>

</section>
      {/* Leadership Philosophy */}

      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-10">
            Leadership Philosophy
          </h2>

          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <p className="text-2xl leading-relaxed text-slate-700 mb-8">
              Technology leadership is not about managing delivery.
            </p>

            <p className="text-2xl leading-relaxed text-slate-700 mb-8">
              It is about creating environments where products, teams and ideas can scale.
            </p>

            <p className="text-2xl leading-relaxed text-slate-700 mb-8">
              The best technology organizations are built around outcomes, not outputs.
            </p>

            <div className="mt-10 border-t pt-8">
              <p className="text-lg text-slate-600 italic">
                "Over the past two decades, I have focused on building what does not yet exist."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Letter to Future Collaborators */}

<section className="max-w-5xl mx-auto px-8 py-24">
  <div className="bg-white rounded-3xl p-12 shadow-sm border-l-4 border-slate-900">
    <h2 className="text-4xl font-bold text-slate-900 mb-10">
      A Letter to Future Collaborators
    </h2>

    <div className="space-y-6 text-lg leading-relaxed text-slate-700">
      <p>
        If you're trying to modernize a platform, build a technology
        capability, transform an organization, or create something that
        does not yet exist, we already have something in common.
      </p>

      <p>
        Throughout my career, I have been most energized by challenges
        that sit at the intersection of technology, people and business
        outcomes.
      </p>

      <p>
        I am not interested in technology for its own sake. I am
        interested in what technology enables:
      </p>

      <div className="pl-6 space-y-3 font-medium text-slate-900">
        <p>✓ Better decisions</p>
        <p>✓ Better customer experiences</p>
        <p>✓ Stronger organizations</p>
        <p>✓ New opportunities for growth</p>
      </div>

      <p>
        Whether the challenge involves AI, cloud modernization,
        product development, digital transformation or organizational
        scaling, I believe the best outcomes emerge when strategy,
        execution and leadership work together.
      </p>

      <p>
        If you're building something meaningful, solving a difficult
        problem, or leading a transformation journey, I'd welcome the
        opportunity to exchange ideas and explore how we might create
        value together.
      </p>

      <div className="pt-6 border-t border-slate-200">
        <p className="font-semibold text-slate-900">
          — Arindam Banerjee
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Certifications & Credentials */}

<section className="max-w-6xl mx-auto px-8 py-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-slate-900 mb-6">
      Certifications & Credentials
    </h2>

    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
      Continuous learning has been a constant throughout my career,
      combining leadership, architecture, cloud and service management
      disciplines.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        🏆 PMP
      </h3>

      <p className="text-slate-600">
        Project Management Professional (PMP)
      </p>
    </div>

    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        ⚙️ ITIL Foundation
      </h3>

      <p className="text-slate-600">
        IT Service Management & Governance
      </p>
    </div>

    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        ☁️ Microsoft Azure Fundamentals
      </h3>

      <p className="text-slate-600">
        AZ-900
      </p>
    </div>

    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        📊 Microsoft Azure Data Fundamentals
      </h3>

      <p className="text-slate-600">
        DP-900
      </p>
    </div>

    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        🏗 IBM SOA Architect
      </h3>

      <p className="text-slate-600">
        IBM Certified SOA Solution Architect
      </p>
    </div>

    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        🔧 IBM SOA Associate
      </h3>

      <p className="text-slate-600">
        IBM Certified SOA Associate Programmer
      </p>
    </div>

    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        ☁️ AWS Cloud Technologies
      </h3>

      <p className="text-slate-600">
        Compute • Storage • Networking • Databases
      </p>
    </div>
  </div>
</section>

      {/* Executive Contact */}

      <section id="contact" className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-slate-900 text-white rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Let's Solve a Business Problem
            </h2>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're scaling a technology organization, modernizing a platform,
              building an AI capability, or leading a transformation initiative,
              I'd love to explore how I can help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p className="text-slate-300">iarindambanerjee@gmail.com</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">💼 LinkedIn</h3>
              <p className="text-slate-300">linkedin.com/in/arindambanerjeeit</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">📍 Location</h3>
              <p className="text-slate-300">Pune, India</p>
            </div>
          </div>

          <div className="text-center">
 <a
  href={siteConfig.calendly}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100"
>
  Book a Discovery Call
</a>
</div>
        </div>
      </section>
    </main>
  );
}