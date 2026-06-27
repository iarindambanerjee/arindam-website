export default function CTA() {
  return (
    <section className="bg-slate-900 text-white py-28">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <span className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-sm">
          LET'S START THE CONVERSATION
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Transform Your
          <br />
          Technology Strategy?
        </h2>

        <p className="mt-8 text-xl text-slate-300 leading-9 max-w-3xl mx-auto">
          Whether you're planning a digital transformation, exploring AI,
          modernising legacy systems or looking for experienced technology
          leadership, I'd be happy to discuss your goals and how I can help.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

         <a 
             href="/#contact" 
             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
             >
             Book a Free Strategy Session
         </a>
          <a
            href="/experience"
            className="border border-slate-500 hover:border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition"
          >
            View Leadership Experience
          </a>

        </div>

      </div>
    </section>
  );
}