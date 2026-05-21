import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export function Logo({ className, variant = "full" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 40 40"
        className={cn("w-10 h-10", className)}
        aria-label="Plásticos NF"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A6FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="10" fill="url(#logo-grad)" />
        <path
          d="M12 12h8.5c3.5 0 5.5 2 5.5 5s-2 5-5.5 5H16v6h-4V12zm4 7h4c1.3 0 2-.7 2-2s-.7-2-2-2h-4v4z"
          fill="white"
        />
        <circle cx="28" cy="28" r="2.5" fill="white" opacity="0.9" />
      </svg>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="w-9 h-9" aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad-full" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A6FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="10" fill="url(#logo-grad-full)" />
        <path
          d="M12 12h8.5c3.5 0 5.5 2 5.5 5s-2 5-5.5 5H16v6h-4V12zm4 7h4c1.3 0 2-.7 2-2s-.7-2-2-2h-4v4z"
          fill="white"
        />
        <circle cx="28" cy="28" r="2.5" fill="white" opacity="0.9" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold text-base tracking-tight text-platinum">
          PLÁSTICOS
        </span>
        <span className="font-display font-extrabold text-base tracking-[0.3em] text-electric-glow -mt-0.5">
          NF
        </span>
      </div>
    </div>
  );
}
