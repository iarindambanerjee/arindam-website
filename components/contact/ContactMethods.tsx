import { Mail, MapPin, Clock } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

export default function ContactMethods() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-8">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-sm">
            GET IN TOUCH
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Let's Start a Conversation
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you'd like to discuss technology leadership,
            AI, enterprise delivery or career opportunities,
            I'd be pleased to connect and exchange ideas.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* Email */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-slate-600">
                  iarindambanerjee@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-bold">LinkedIn</h3>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-slate-600">
                  Pune, India
                </p>
              </div>
            </div>
          </div>

          {/* X / Twitter */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <Clock className="text-blue-600" />
              <div>
                <h3 className="font-bold">Follow Me</h3>
                <a
                  href="https://x.com/iarindam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  X (Twitter) · @iarindam
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}