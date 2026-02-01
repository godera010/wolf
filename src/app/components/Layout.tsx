import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from './ui/sonner';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-['Montserrat',sans-serif] bg-[#f8fafc]">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {/* Premium Bus-Livery Inspired Global Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-slate-50 via-white to-slate-50 opacity-100" />

          {/* Reduced blur radius for better performance */}
          <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[80px] opacity-60" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-[80px] opacity-40" />

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
