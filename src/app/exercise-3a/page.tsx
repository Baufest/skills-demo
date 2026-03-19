import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table3a } from "@/components/table-3a";

export default function Exercise3aPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Exercise 3a
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        DuckCorp Brand — Without Skill
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Same table, new challenge. Ask the agent to restyle the table to match
        the DuckCorp brand — but without the skill loaded. Let&apos;s see how it
        interprets the request.
      </p>

      <div className="space-y-6 max-w-3xl mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  1
                </span>
                <span>
                  Open a terminal in this project and launch your AI agent.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  2
                </span>
                <span>
                  Make sure{" "}
                  <strong className="text-foreground">
                    no skills are loaded
                  </strong>
                  .
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  3
                </span>
                <span>Copy and paste the prompt below.</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <p className="text-sm font-medium">Prompt:</p>
          <pre>
            <code>{`Restyle the data table in src/components/table-3a.tsx
to match the DuckCorp brand. Use the data from
src/data/sample-table.ts.`}</code>
          </pre>
        </div>
      </div>

      <Table3a />

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/exercise-2b"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          &larr; Exercise 2b
        </Link>
        <Link href="/exercise-3b" className={buttonVariants()}>
          Next: Exercise 3b <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
