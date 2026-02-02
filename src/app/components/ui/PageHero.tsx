import { cn } from './utils';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: string;
    label?: string;
    className?: string;
    align?: 'center' | 'left';
}

export default function PageHero({
    title,
    subtitle,
    label,
    className,
    align = 'center'
}: PageHeroProps) {
    return (
        <section className={cn(
            "relative py-12 md:py-20 z-10",
            align === 'center' ? 'text-center' : 'text-left',
            className
        )}>
            <div className="container mx-auto px-4">
                {label && (
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {label}
                    </span>
                )}

                <h1 className="font-['Montserrat',sans-serif] font-bold text-4xl md:text-6xl text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 drop-shadow-sm">
                    {title}
                </h1>

                {subtitle && (
                    <p className={cn(
                        "font-['Montserrat',sans-serif] text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200",
                        align === 'center' ? 'mx-auto' : ''
                    )}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
