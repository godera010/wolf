import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const cardVariants = cva(
  "rounded-2xl transition-all duration-300 overflow-hidden font-['Montserrat',sans-serif]",
  {
    variants: {
      variant: {
        default: "bg-white border border-slate-100 shadow-sm",
        ghost: "bg-transparent shadow-none border-none",
        outline: "bg-transparent border border-slate-200 shadow-none",
        elevated: "bg-white border border-slate-100 shadow-lg",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-xl",
        glow: "hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(233,111,48,0.15)]",
        subtle: "hover:bg-slate-50",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      }
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
      padding: "md",
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, hover, padding, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
