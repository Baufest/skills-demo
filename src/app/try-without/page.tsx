import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WatchForCard } from "@/_hints/watch-for-card";

export default function TryWithoutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Step 3
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Try Without Skills
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Open your AI coding agent and try to improve the table. No skills
        loaded — just a plain prompt.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  1
                </span>
                <span>
                  Open a terminal in this project directory and launch your AI
                  coding agent (e.g., <code>claude</code> for Claude Code).
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
                  . In Claude Code, you can verify with <code>/skills</code>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  3
                </span>
                <span>
                  Copy and paste the prompt below into your agent.
                </span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <p className="text-sm font-medium">
            Copy this prompt into your agent:
          </p>
          <pre>
            <code>{`Improve the data table in src/components/bad-table.tsx.
Fix any design issues you see — alignment, formatting,
layout, and readability. Use the data from src/data/sample-table.ts.`}</code>
          </pre>
        </div>

        <WatchForCard />
      </div>

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/before"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          &larr; The Problem
        </Link>
        <Link href="/install" className={buttonVariants()}>
          Next: Install Skills <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
