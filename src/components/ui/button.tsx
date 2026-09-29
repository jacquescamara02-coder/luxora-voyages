import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm px-5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-luxe hover:-translate-y-0.5 hover:bg-primary/90",
        outline: "border border-primary/55 bg-transparent text-primary hover:-translate-y-0.5 hover:bg-primary/10",
        light: "bg-background text-foreground hover:-translate-y-0.5 hover:bg-background/90",
        ghost: "text-foreground hover:bg-secondary",
        icon: "h-12 w-12 rounded-full bg-primary p-0 text-primary-foreground shadow-luxe hover:-translate-y-0.5 hover:bg-primary/90",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4 text-[0.68rem]",
        lg: "h-14 px-7",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";