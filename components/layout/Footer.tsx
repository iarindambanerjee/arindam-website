import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Insights", href: "/insights" },
  { name: "Videos", href: "/videos" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black">
              Arindam Banerjee
            </h2>

            <p className="mt-3 text-lg text-slate-300">
              Technology Leader • AI Strategist • Digital Transformation
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Helping organisations leverage technology, AI and modern
              delivery practices to create measurable business value.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                href="https://www.linkedin.com/in/arindambanerjee/"
                target="_blank"
                className="text-slate-400 transition hover:text-white"
              >
                LinkedIn
              </Link>

              <Link
                href="https://www.youtube.com/@ArindamBanerjee"
                target="_blank"
                className="text-slate-400 transition hover:text-white"
              >
                YouTube
              </Link>

              <Link
                href="https://github.com/iarindambanerjee"
                target="_blank"
                className="text-slate-400 transition hover:text-white"
              >
                GitHub
              </Link>

              <Link
                href="mailto:hello@arindam-banerjee.com"
                className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
              >
                <Mail size={18} />
                Email
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
                  >
                    {item.name}

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold">
              Let's Connect
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Interested in discussing AI strategy, technology leadership,
              digital transformation or executive advisory?
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-700"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © 2026 Arindam Banerjee. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}