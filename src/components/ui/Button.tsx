"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type Variant = "electric" | "outline" | "ghost" | "glass";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  electric:
    "btn-electric text-white font-semibold tracking-wide rounded-full",
  outline:
    "border border-electric/40 text-platinum hover:border-electric hover:bg-electric/10 rounded-full transition-all duration-300",
  ghost:
    "text-platinum/80 hover:text-platinum hover:bg-white/5 rounded-full transition-all duration-300",
  glass:
    "glass-industrial text-platinum hover:border-electric/40 rounded-full transition-all duration-300",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm gap-2",
  md: "px-6 py-3 text-sm gap-2.5",
  lg: "px-8 py-4 text-base gap-3",
  xl: "px-10 py-5 text-base gap-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "electric",
      size = "md",
      icon,
      iconPosition = "right",
      fullWidth,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "inline-flex items-center justify-center font-display font-semibold",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
