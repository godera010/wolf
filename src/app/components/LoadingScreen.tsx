import logo from "@/assets/logo3.svg";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">

            {/* Logo - No Wrapper */}
            <img
                src={logo}
                alt="RoadWolf Loading"
                width={192}
                height={80}
                className="w-32 md:w-48 object-contain animate-in fade-in duration-600"
            />

            {/* CSS-powered pulsing dots */}
            <div className="mt-8 flex gap-2">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="w-3 h-3 rounded-full bg-[#01257d] animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.6s' }}
                    />
                ))}
            </div>
        </div>
    );
}
