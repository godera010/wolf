import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from './ui/sonner';
import { usePerformance } from '@/hooks/usePerformance';

export default function Layout() {
  const { tier } = usePerformance();

  return (
    <div className="min-h-screen flex flex-col font-['Montserrat',sans-serif] bg-[#f8fafc]">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {/* Premium Bus-Livery Inspired Global Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-slate-50 via-white to-slate-50 opacity-100" />

          {/* HIGH tier: Full blur effects */}
          {tier === 'high' && (
            <>
              <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[80px] opacity-60 gpu-accelerated" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-[80px] opacity-40 gpu-accelerated" />
            </>
          )}

          {/* MID tier: Reduced blur effects (smaller, less blur) */}
          {tier === 'mid' && (
            <>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-[40px] opacity-50" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/4 to-transparent rounded-full blur-[40px] opacity-30" />
            </>
          )}

          {/* LOW tier: Simple gradients, no blur */}
          {tier === 'low' && (
            <>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/3 to-transparent" />
            </>
          )}

          <div className="absolute top-1/4 -right-24 w-[120%] h-16 bg-primary/[0.03] -rotate-6 transform" />
          <div className="absolute top-1/4 -right-24 w-[120%] h-4 bg-accent/[0.03] -rotate-6 transform translate-y-24" />

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
        </div>

        <div className="relative z-10 min-h-full flex flex-col">
          <Outlet />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}


