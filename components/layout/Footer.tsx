"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Arindam Banerjee
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Technology Leader • AI Strategist • Digital Transformation Executive
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Helping organisations deliver technology transformation,
              AI adoption and large-scale delivery with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/experience"
                  className="text-slate-400 transition hover:text-white"
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  href="/industries"
                  className="text-slate-400 transition hover:text-white"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  href="/insights"
                  className="text-slate-400 transition hover:text-white"
                >
                  Insights
                </Link>
              </li>

              <li>
                <Link
                  href="/videos"
                  className="text-slate-400 transition hover:text-white"
                >
                  Videos
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>

            <p className="mb-6 text-sm leading-7 text-slate-400">
              Interested in technology leadership, AI transformation or digital
              strategy? Let's connect.
            </p>

            <div className="flex flex-col gap-3">

              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                LinkedIn
              </Link>

              <Link
                href="https://www.youtube.com/@ArindamBanerjeeTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                YouTube
              </Link>

              <Link
                href="https://github.com/iarindambanerjee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                GitHub
              </Link>

              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
              >
                <Mail size={16} />
                iarindambanerjee@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">
          <p className="text-center text-sm text-slate-500">
            © {year} Arindam Banerjee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}