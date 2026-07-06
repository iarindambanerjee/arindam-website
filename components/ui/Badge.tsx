type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm">
      {children}
    </span>
  );
}