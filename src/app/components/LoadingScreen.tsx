import { motion } from "motion/react";
import logo from "@/assets/logo3.svg";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">

            {/* Logo - No Wrapper */}
            <img
                src={logo}
                alt="RoadWolf Loading"
                className="w-32 md:w-48 object-contain animate-in fade-in duration-600"
            />

            {/* Single timeline animation for dots (MUCH smoother) */}
            <motion.div
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 flex gap-2"
            >
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="w-3 h-3 rounded-full bg-[#01257d]"
                    />
                ))}
            </motion.div>
        </div>
    );
}
