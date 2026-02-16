import { GlassCard } from "@/components/ui/GlassCard";

const HomePage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <GlassCard className="max-w-md p-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-100">
          Project Ithilstone
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Minimal glass dashboard shell is running. Start dropping in your
          widgets and sections.
        </p>
      </GlassCard>
    </main>
  );
};

export default HomePage;

