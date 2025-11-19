import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-6",
        icon: "w-9 h-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  const hasSvgChild = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === "svg"
  );

  // Wrap SVG children to conditionally apply size if no size-* class exists
 const wrappedChildren = React.Children.map(children, (child) => {
  if (React.isValidElement(child)) {
    // TypeScript now knows child has props
    const el = child as React.ReactElement<any>;

    if (el.type === "svg") {
      const hasSizeClass = (el.props.className || "").includes("size-");
      return React.cloneElement(el, {
        className: cn(el.props.className, !hasSizeClass && "w-9 h-9"),
      });
    }
  }
  return child;
});

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={{
        // Conditional padding for has-[>svg]:px-*
        paddingLeft: hasSvgChild ? "0.75rem" : undefined,
        paddingRight: hasSvgChild ? "0.75rem" : undefined,
      }}
      {...props}
    >
      {wrappedChildren}
    </Comp>
  );
}

export { Button, buttonVariants };
