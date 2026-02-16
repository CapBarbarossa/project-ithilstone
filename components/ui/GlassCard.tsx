import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-glass-20 bg-glass-10 backdrop-blur-xl shadow-xl transition-all duration-300 hover:bg-glass-20 hover:shadow-2xl hover:border-glass-30",
        className,
      )}
    >
      {children}
    </div>
  );
};

