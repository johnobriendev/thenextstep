import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  compact?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  compact = false,
}: ServiceCardProps) {
  if (compact) {
    return (
      <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 transition-colors hover:border-blue-600">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">{icon}</span>
          <h3 className="font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 transition-colors hover:border-blue-600">
      <div className="mb-4 text-4xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="mb-6 text-slate-400 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
      >
        Learn more &rarr;
      </Link>
    </div>
  );
}
