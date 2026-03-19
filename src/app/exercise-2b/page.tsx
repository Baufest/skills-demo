import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table2b } from "@/components/table-2b";

export default function Exercise2bPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Exercise 2b
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Improve With a Data Table Skill
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Load the{" "}
        <a
          href="https://github.com/Baufest/skills/tree/main/skills/data-table-design"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          data-table-design
        </a>{" "}
        skill, then paste the same kind of prompt. Compare the result to
        Exercise 2a.
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
                <span>Install the skill:</span>
              </li>
            </ol>
            <pre className="mt-3">
              <code>{`claude mcp add skills -- \\
  npx -y @anthropic-ai/skills-server \\
  https://github.com/Baufest/skills`}</code>
            </pre>
            <ol start={2} className="space-y-3 text-muted-foreground mt-4">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  2
                </span>
                <span>
                  Start a <strong className="text-foreground">new</strong>{" "}
                  Claude Code session so the skill loads.
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
            <code>{`Improve the data table in src/components/table-2b.tsx.
Fix any design issues you see — alignment, formatting,
layout, and readability. Use the data from src/data/sample-table.ts.`}</code>
          </pre>
        </div>
      </div>

      <Table2b />

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/exercise-2a"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          &larr; Exercise 2a
        </Link>
        <Link href="/exercise-3a" className={buttonVariants()}>
          Next: Exercise 3a <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
