import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { expectations } from "./expectations";

export function ExpectationsCard() {
  return (
    <Card className="border-chart-1/30 bg-chart-1/5">
      <CardHeader>
        <CardTitle className="text-chart-5">What to Expect This Time</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          With the skill loaded, the agent now has detailed, opinionated
          instructions. You should see:
        </p>
        <ul className="space-y-2 text-sm">
          {expectations.map((e) => (
            <li key={e} className="flex gap-2">
              <span className="text-chart-1">&check;</span>
              <span className="text-muted-foreground">{e}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
