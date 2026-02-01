
import { motion } from 'motion/react';
import logo from '@/assets/logo3.png';

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative"
            >
                {/* Glowing effect behind logo */}
                <div className="absolute inset-0 bg-[#e96f30]/20 blur-3xl rounded-full scale-150" />

                <img
                    src={logo}
                    alt="RoadWolf Loading"
                    className="w-32 md:w-48 relative z-10 object-contain"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex gap-2"
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                        className="w-3 h-3 rounded-full bg-[#01257d]"
                    />
                ))}
            </motion.div>
        </div>
    );
}
