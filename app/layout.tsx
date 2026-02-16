import type { ReactNode } from "react";
import "./globals.css";
import { BreathingGradient } from "@/components/ui/BreathingGradient";

export interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <BreathingGradient />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

