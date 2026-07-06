type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-3xl leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}