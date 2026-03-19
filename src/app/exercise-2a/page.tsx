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
import { Table2a } from "@/components/table-2a";

export default function Exercise2aPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Exercise 2a
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Improve Without Skills
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Open{" "}
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
          href="https://github.com/features/copilot/cli"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copilot CLI
        </a>{" "}
        with no skills loaded. Paste the prompt below and see what it does.
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
                  Open a terminal in this project and run{" "}
                  <code>claude</code> or <code>copilot-cli</code>.
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
          <CopyBlock>{`Improve the data table in src/components/table-2a.tsx.
Fix any design issues you see — alignment, formatting,
layout, and readability. Use the data from src/data/sample-table.ts.`}</CopyBlock>
        </div>
      </div>

      <Table2a />

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/start"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          &larr; 1
        </Link>
        <Link href="/exercise-2b" className={buttonVariants()}>
          Next: Exercise 2b <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
