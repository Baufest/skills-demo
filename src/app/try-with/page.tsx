import Link from "next/link";
import { BadTable } from "@/components/bad-table";

export default function TryWithPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
        Step 5
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Try With Skills Loaded
      </h1>
      <p className="text-lg text-muted mb-8 max-w-3xl">
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
        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Instructions</h2>
          <ol className="space-y-3 text-muted">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0">
                1
              </span>
              <span>
                Confirm the skill is loaded. In Claude Code, type{" "}
                <code>/skills</code> — you should see{" "}
                <code>data-table-design</code> listed.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0">
                2
              </span>
              <span>
                First, reset the table component back to its original state by
                running <code>git checkout src/components/bad-table.tsx</code>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0">
                3
              </span>
              <span>
                Paste the <strong>exact same prompt</strong> you used before:
              </span>
            </li>
          </ol>
        </div>

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

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 space-y-3">
          <h2 className="text-lg font-semibold text-green-900">
            What to Expect This Time
          </h2>
          <p className="text-green-800 text-sm">
            With the skill loaded, the agent now has detailed, opinionated
            instructions. You should see:
          </p>
          <ul className="space-y-2 text-sm text-green-800">
            <li className="flex gap-2">
              <span className="text-green-500">&check;</span>
              <span>ID column moved to the first position</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">&check;</span>
              <span>All numeric columns right-aligned</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">&check;</span>
              <span>
                Consistent date formatting throughout (e.g., Jan 15, 2025)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">&check;</span>
              <span>
                Currency symbols with proper locale formatting ($24,500.00)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">&check;</span>
              <span>
                Color-coded status badges with text labels
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">&check;</span>
              <span>
                Em-dashes (&mdash;) for null/empty values
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">&check;</span>
              <span>
                Currency merged into the amount column
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">&check;</span>
              <span>
                Consistent decimal precision across all number columns
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">The Takeaway</h2>
          <div className="space-y-3 text-muted">
            <p>
              <strong className="text-foreground">Same prompt. Same table. Better result.</strong>{" "}
              The difference is the skill — a shareable, reusable file that
              encodes best practices once and applies them every time.
            </p>
            <p>
              Skills are not magic. They&apos;re structured knowledge. They
              work because they give the agent the same expertise your best
              team member would have — consistently.
            </p>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">What&apos;s Next?</h2>
          <div className="space-y-3 text-muted">
            <p>
              <strong className="text-foreground">Create your own skills.</strong>{" "}
              Read the{" "}
              <a
                href="https://agentskills.io/specification"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                agentskills.io specification
              </a>{" "}
              to learn the format, then package your team&apos;s conventions
              into portable skill files.
            </p>
            <p>
              <strong className="text-foreground">Browse existing skills.</strong>{" "}
              Check{" "}
              <a
                href="https://skills.sh"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                skills.sh
              </a>
              ,{" "}
              <a
                href="https://github.com/Baufest/skills"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baufest/skills
              </a>
              , and{" "}
              <a
                href="https://github.com/anthropics/awesome-claude-code-extensions"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                awesome-claude-code-extensions
              </a>{" "}
              for inspiration.
            </p>
            <p>
              <strong className="text-foreground">Share with your team.</strong>{" "}
              Commit skills to your repo, publish them on GitHub, or contribute
              to the community at{" "}
              <a
                href="https://agentskills.io"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                agentskills.io
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center max-w-3xl">
        <Link
          href="/install"
          className="text-sm text-muted hover:text-foreground"
        >
          &larr; Install Skills
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Back to Start
        </Link>
      </div>
    </div>
  );
}
