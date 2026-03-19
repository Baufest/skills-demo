import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { issues } from "./issues";

export function IssueCards() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>What&apos;s Wrong Here?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-3">
          {issues.map((item) => (
            <div
              key={item.issue}
              className="flex gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10"
            >
              <span className="text-destructive text-lg leading-none mt-0.5">
                &times;
              </span>
              <div>
                <p className="font-medium text-sm">{item.issue}</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
