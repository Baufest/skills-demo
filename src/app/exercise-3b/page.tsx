import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CopyBlock } from "@/components/copy-block";
import { Table3b } from "@/components/table-3b";

export default function Exercise3bPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Exercise 3b
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        DuckCorp Brand — With Skill
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Now load the <strong>duckcorp-brand</strong> skill and give the agent
        the same prompt. Compare the result to Exercise 3a.
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
                <span>Install the duckcorp-brand skill:</span>
              </li>
            </ol>
            <div className="mt-3">
              <CopyBlock>{`npx skills install baufest/skills --skill duckcorp-brand`}</CopyBlock>
            </div>
            <ol start={2} className="space-y-3 text-muted-foreground mt-4">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  2
                </span>
                <span>
                  Start a <strong className="text-foreground">new</strong>{" "}
                  <a
                    href="https://docs.anthropic.com/en/docs/claude-code"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Claude Code
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://githubnext.com/projects/copilot-cli"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Copilot CLI
                  </a>{" "}
                  session so the skill loads.
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
          <CopyBlock>{`Restyle the data table in src/components/table-3b.tsx
to match the DuckCorp brand. Use the data from
src/data/sample-table.ts.`}</CopyBlock>
        </div>
      </div>

      <Table3b />

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/exercise-3a"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          &larr; Exercise 3a
        </Link>
        <Link href="/" className={buttonVariants()}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
