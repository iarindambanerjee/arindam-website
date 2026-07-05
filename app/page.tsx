export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          Website Under Refresh
        </h1>

        <p className="text-xl text-slate-300 mb-6">
          Thank you for visiting.
        </p>

        <p className="text-lg text-slate-400 leading-relaxed">
          I'm currently refreshing my website to better reflect my professional journey,
          technology leadership experience and thought leadership.
          The updated website will be available soon.
        </p>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/arindambanerjeeit/"
            className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}