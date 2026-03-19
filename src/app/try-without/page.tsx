import Link from "next/link";

export default function TryWithoutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
        Step 3
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Try Without Skills
      </h1>
      <p className="text-lg text-muted mb-8">
        Open your AI coding agent and try to improve the table. No skills
        loaded — just a plain prompt.
      </p>

      <div className="space-y-6">
        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Instructions</h2>
          <ol className="space-y-3 text-muted">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0">
                1
              </span>
              <span>
                Open a terminal in this project directory and launch your AI
                coding agent (e.g., <code>claude</code> for Claude Code).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0">
                2
              </span>
              <span>
                Make sure <strong>no skills are loaded</strong>. In Claude Code,
                you can verify with <code>/skills</code>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0">
                3
              </span>
              <span>Copy and paste the prompt below into your agent.</span>
            </li>
          </ol>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">
            Copy this prompt into your agent:
          </p>
          <div className="relative">
            <pre className="!bg-[#1e1e2e] !text-[#cdd6f4]">
              <code>{`Improve the data table in src/components/bad-table.tsx.
Fix any design issues you see — alignment, formatting,
layout, and readability. Use the data from src/data/sample-table.ts.`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
          <h2 className="text-lg font-semibold text-amber-900">
            What to Watch For
          </h2>
          <p className="text-amber-800 text-sm">
            Without a skill, the agent will make improvements — but they&apos;ll
            be inconsistent and incomplete. Pay attention to:
          </p>
          <ul className="space-y-2 text-sm text-amber-800">
            <li className="flex gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>
                Does it right-align all numeric columns? Or just some?
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>
                Does it pick a consistent date format? Which one?
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>
                Does it format currencies with locale-appropriate symbols and
                separators?
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>
                Does it use em-dashes for null values? Or something else?
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>
                Does it reorder columns logically (ID first)?
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>
                Does it add visual status indicators with color?
              </span>
            </li>
          </ul>
          <p className="text-amber-800 text-sm font-medium">
            Take a screenshot or note what the agent did. You&apos;ll compare
            it later.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/before"
          className="text-sm text-muted hover:text-foreground"
        >
          &larr; The Problem
        </Link>
        <Link
          href="/install"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Next: Install Skills
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
