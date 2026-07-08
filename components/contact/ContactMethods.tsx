import { Mail,MapPin, Clock } from "lucide-react";

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
            Whether you're exploring a leadership opportunity,
            looking for strategic technology advice,
            or planning a transformation initiative,
            I'd be happy to discuss how I can help.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="rounded-2xl bg-white border border-slate-200 p-8">

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-slate-600">
                  hello@arindambanerjee.com
                </p>
              </div>
            </div>

          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-8">

            <div className="flex items-center gap-4">
              <div className="h-6 w-6 rounded bg-blue-600" />
              <div>
                <h3 className="font-bold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/arindambanerjee/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Connect with me
                </a>
              </div>
            </div>

          </div>

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

          <div className="rounded-2xl bg-white border border-slate-200 p-8">

            <div className="flex items-center gap-4">
              <Clock className="text-blue-600" />
              <div>
                <h3 className="font-bold">Response Time</h3>
                <p className="text-slate-600">
                  Usually within 24 hours
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}