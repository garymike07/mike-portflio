import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
  contentClassName?: string;
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
({ id, title, description, eyebrow, align = "center", className, contentClassName, children }, ref) => {
  const isCentered = align === "center";

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative py-24 sm:py-28",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent",
        className,
      )}
    >
      <div className="container">
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mx-auto mb-16 max-w-3xl",
              isCentered ? "text-center" : "text-left",
              !isCentered && "md:text-left",
            )}
          >
            {eyebrow && (
              <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-foreground-muted">{description}</p>
            )}
          </div>
        )}
        <div className={cn("relative", contentClassName)}>{children}</div>
      </div>
    </section>
  );
});

Section.displayName = "Section";
