import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "border border-slate-300 text-slate-700 hover:bg-slate-100";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}