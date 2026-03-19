import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { watchFor } from "./watch-for";

export function WatchForCard() {
  return (
    <Card className="border-chart-4/30 bg-chart-4/5">
      <CardHeader>
        <CardTitle className="text-chart-5">What to Watch For</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Without a skill, the agent will make improvements — but they&apos;ll
          be inconsistent and incomplete. Pay attention to:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {watchFor.map((q) => (
            <li key={q} className="flex gap-2">
              <span className="text-chart-4">&bull;</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm font-medium text-foreground">
          Take a screenshot or note what the agent did. You&apos;ll compare it
          later.
        </p>
      </CardContent>
    </Card>
  );
}
