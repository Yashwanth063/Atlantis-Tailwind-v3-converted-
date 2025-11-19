import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        // Container query removed — replaced with normal layout
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6",

        // Fallback for card-action (manual handling instead of :has())
        "card-header",

        // Replacement for [.border-b]:pb-6 — use a helper class
        "border-b-pb-fix",

        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6",
        "border-t-pt-fix", // replacement for [.border-t]:pt-6
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}


// css code

/* Tailwind v3 replacement for [.border-b]:pb-6 */
.border-b.border-b-pb-fix {
  padding-bottom: 1.5rem; /* pb-6 */
}

/* Tailwind v3 replacement for [.border-t]:pt-6 */
.border-t.border-t-pt-fix {
  padding-top: 1.5rem; /* pt-6 */
}

/* Tailwind v3 replacement for has-data-[slot=card-action] */
.card-header:has([data-slot="card-action"]) {
  grid-template-columns: 1fr auto;
}
