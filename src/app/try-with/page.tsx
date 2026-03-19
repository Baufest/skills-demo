import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadTable } from "@/components/bad-table";
import { ExpectationsCard } from "@/_hints/expectations-card";

export default function TryWithPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Step 5
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Try With Skills Loaded
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Now repeat the exact same exercise — same table, same prompt — but with
        the data-table-design skill loaded.
      </p>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">
          The Same Table, One More Time
        </h2>
        <BadTable />
      </div>

      <div className="space-y-6 max-w-3xl">
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
                  Confirm the skill is loaded. In Claude Code, type{" "}
                  <code>/skills</code> — you should see{" "}
                  <code>data-table-design</code> listed.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  2
                </span>
                <span>
                  Reset the table component back to its original state:{" "}
                  <code>git checkout src/components/bad-table.tsx</code>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                  3
                </span>
                <span>
                  Paste the{" "}
                  <strong className="text-foreground">
                    exact same prompt
                  </strong>{" "}
                  you used before:
                </span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <p className="text-sm font-medium">
            Same prompt as before — paste it again:
          </p>
          <pre>
            <code>{`Improve the data table in src/components/bad-table.tsx.
Fix any design issues you see — alignment, formatting,
layout, and readability. Use the data from src/data/sample-table.ts.`}</code>
          </pre>
        </div>

        <ExpectationsCard />

        <Card>
          <CardHeader>
            <CardTitle>The Takeaway</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">
                Same prompt. Same table. Better result.
              </strong>{" "}
              The difference is the skill — a shareable, reusable file that
              encodes best practices once and applies them every time.
            </p>
            <p>
              Skills are not magic. They&apos;re structured knowledge. They
              work because they give the agent the same expertise your best team
              member would have — consistently.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What&apos;s Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">
                Create your own skills.
              </strong>{" "}
              Read the{" "}
              <a
                href="https://agentskills.io/specification"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                agentskills.io specification
              </a>{" "}
              to learn the format, then package your team&apos;s conventions
              into portable skill files.
            </p>
            <p>
              <strong className="text-foreground">
                Browse existing skills.
              </strong>{" "}
              Check{" "}
              <a
                href="https://skills.sh"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                skills.sh
              </a>
              ,{" "}
              <a
                href="https://github.com/Baufest/skills"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baufest/skills
              </a>
              , and{" "}
              <a
                href="https://github.com/anthropics/awesome-claude-code-extensions"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                awesome-claude-code-extensions
              </a>{" "}
              for inspiration.
            </p>
            <p>
              <strong className="text-foreground">
                Share with your team.
              </strong>{" "}
              Commit skills to your repo, publish them on GitHub, or contribute
              to the community at{" "}
              <a
                href="https://agentskills.io"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                agentskills.io
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex justify-between items-center max-w-3xl">
        <Link
          href="/install"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          &larr; Install Skills
        </Link>
        <Link href="/" className={buttonVariants()}>
          Back to Start
        </Link>
      </div>
    </div>
  );
}
