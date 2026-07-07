type Props = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  dark = false,
}: Props) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-4xl font-bold tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-lg leading-8 ${
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          } ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}