import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

export type Story = {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  role: string;
  outcome: string;
};

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8">

        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 uppercase tracking-wide">

          <Building2 size={16} />

          {story.industry}

        </div>

        <h2 className="mt-6 text-3xl font-bold leading-tight">

          {story.title}

        </h2>

        <p className="mt-4 text-blue-300 text-lg">

          {story.client}

        </p>

      </div>

      {/* Body */}

      <div className="p-8 space-y-8">

        {/* Challenge */}

        <div>

          <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">

            <BriefcaseBusiness
              size={20}
              className="text-blue-600"
            />

            Business Challenge

          </h3>

          <p className="mt-3 text-slate-600 leading-8">

            {story.challenge}

          </p>

        </div>

        {/* Role */}

        <div>

          <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">

            <BriefcaseBusiness
              size={20}
              className="text-blue-600"
            />

            My Role

          </h3>

          <p className="mt-3 text-slate-600 leading-8">

            {story.role}

          </p>

        </div>

        {/* Outcome */}

        <div>

          <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">

            <TrendingUp
              size={20}
              className="text-emerald-600"
            />

            Business Outcome

          </h3>

          <p className="mt-3 text-slate-600 leading-8">

            {story.outcome}

          </p>

        </div>

        {/* Footer */}

        <div className="pt-4 border-t border-slate-200">

          <button
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            Read Full Story

            <ArrowRight
              size={18}
            />

          </button>

        </div>

      </div>

    </article>
  );
}