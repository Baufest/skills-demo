import { cn } from "@/lib/utils";

export function Callout({
  children,
  variant = "info",
}: {
  children: React.ReactNode;
  variant?: "info" | "warning";
}) {
  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        variant === "info" &&
          "border-primary/20 bg-primary/5 text-muted-foreground",
        variant === "warning" &&
          "border-chart-4/30 bg-chart-4/5 text-muted-foreground"
      )}
    >
      {children}
    </div>
  );
}
