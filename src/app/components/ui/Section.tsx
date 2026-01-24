import { cn } from './utils';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    containerClass?: string;
    id?: string;
}

export default function Section({
    children,
    className,
    containerClass,
    id
}: SectionProps) {
    return (
        <section id={id} className={cn("py-12 md:py-16 relative z-10", className)}>
            <div className={cn("container mx-auto px-4", containerClass)}>
                {children}
            </div>
        </section>
    );
}
