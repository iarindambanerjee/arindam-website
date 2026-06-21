import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}

      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-slate-900">
            Arindam Banerjee
          </div>

          <div className="hidden md:flex gap-8 text-slate-600">
            <a href="/" className="hover:text-slate-900">
              Home
            </a>

            <a href="/experience" className="hover:text-slate-900">
              Experience
            </a>

            <a href="#built" className="hover:text-slate-900">
              What I've Built
            </a>

            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}

      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6">
              Arindam Banerjee
            </h1>

            <h2 className="text-2xl text-slate-600 mb-8">
              Building Products, Platforms, Teams and Business Capabilities for
              Over Two Decades
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Senior Technology Leader with 21+ years of experience delivering
              transformation across banking, manufacturing, healthcare, gaming
              and emerging technology domains.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/arindambanerjeeit/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800"
              >
                LinkedIn Profile
              </a>

              <a
                href="mailto:iarindambanerjee@gmail.com"
                className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/arindam.jpg"
              alt="Arindam Banerjee"
              width={350}
              height={350}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Metrics */}

      <section className="max-w-6xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl font-bold">21+</div>
            <div className="text-slate-600 mt-2">Years Experience</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl font-bold">$5M+</div>
            <div className="text-slate-600 mt-2">Portfolio Managed</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl font-bold">30+</div>
            <div className="text-slate-600 mt-2">Projects Transitioned</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl font-bold">4+</div>
            <div className="text-slate-600 mt-2">Centers of Excellence</div>
          </div>
        </div>
      </section>

      {/* Featured Build */}

      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="bg-slate-900 text-white rounded-2xl p-10">
          <div className="text-sm uppercase tracking-wider mb-4">
            Featured Build
          </div>

          <h2 className="text-4xl font-bold mb-6">
            🤖 AI Center of Excellence
          </h2>

          <p className="text-lg text-slate-300 mb-8">
            Built a cross-functional capability spanning governance, talent
            development, reusable frameworks, AI accelerators and enterprise
            adoption.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>✓ AI Strategy & Governance</div>
            <div>✓ Talent Development</div>
            <div>✓ Reusable Frameworks</div>
            <div>✓ Enterprise Adoption</div>
          </div>
        </div>
      </section>

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

      {/* Core Capabilities */}

      <section
        id="capabilities"
        className="max-w-6xl mx-auto px-8 py-16"
      >
        <h2 className="text-4xl font-bold mb-10">
          Core Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Technology Leadership
            </h3>

            <p>
              Defining technology strategy, leading transformation programs,
              and building high-performing teams.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Product & Delivery Excellence
            </h3>

            <p>
              Turning ideas into products and delivering complex initiatives
              at scale.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Building from Scratch
            </h3>

            <p>
              Creating products, platforms, teams and organizational
              capabilities from concept through execution.
            </p>
          </div>
        </div>
      </section>

      {/* What I've Built */}

      <section id="built" className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold mb-10">
          What I've Built
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              🤖 AI Center of Excellence
            </h3>
            <p>
              Enterprise AI capability spanning governance, frameworks, talent
              and adoption.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              📊 Product Data Platform
            </h3>
            <p>
              Global product intelligence platform enabling governance,
              analytics and business decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              🌍 Global Delivery Centre
            </h3>
            <p>
              Built governance, service delivery and successful transition of
              30+ projects.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              🏦 Barclays Modernization
            </h3>
            <p>
              Enterprise-scale legacy replacement and platform transformation
              initiatives.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              🏥 Healthcare Platforms
            </h3>
            <p>
              Digital healthcare solutions focused on engagement, accessibility
              and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* How I Can Help */}

      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            How I Can Help
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Over the past two decades, I have partnered with organizations to
            build products, modernize platforms, establish technology
            capabilities and deliver transformation programs that create
            measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">🚀 Technology Leadership</h3>
            <p>Technology strategy, operating models, governance frameworks and leadership.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">🌐 Product & Platform Modernization</h3>
            <p>Modernizing legacy systems, building digital platforms and scalable foundations.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">🤖 AI & Innovation</h3>
            <p>Establishing AI Centers of Excellence and innovation frameworks.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">📈 Delivery & Transformation</h3>
            <p>Driving business outcomes through program leadership and transformation.</p>
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
              href="mailto:iarindambanerjee@gmail.com"
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}