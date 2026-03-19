import Link from "next/link";
import { BadTable } from "@/components/bad-table";

export default function BeforePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
        Step 2
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        The Problem: A Typical Data Table
      </h1>
      <p className="text-lg text-muted mb-8 max-w-3xl">
        Below is an invoice table — the kind you&apos;d find in any business
        app. It works, but it has issues. Can you spot them?
      </p>

      <BadTable />

      <div className="mt-8 bg-surface border border-border rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">What&apos;s Wrong Here?</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              issue: "Column order",
              detail:
                "ID is buried at the end. Client and project lack a clear hierarchy.",
            },
            {
              issue: "Number alignment",
              detail:
                "Amounts, hours, and rates are left-aligned — making comparison hard.",
            },
            {
              issue: "Inconsistent dates",
              detail:
                'Three different date formats: "2025-01-15", "02/14/2025", "Feb 10, 2025".',
            },
            {
              issue: "Raw currency",
              detail:
                'Amounts show raw numbers (24500) without currency symbols or separators.',
            },
            {
              issue: "No status indicators",
              detail:
                'Statuses are plain text — "paid", "overdue" look the same.',
            },
            {
              issue: "N/A for nulls",
              detail:
                'Missing values show "N/A" instead of an em-dash (—) or being handled gracefully.',
            },
            {
              issue: "Redundant columns",
              detail:
                "Currency is a separate column instead of being merged with amount.",
            },
            {
              issue: "Inconsistent precision",
              detail:
                "Hours show varying decimals: 163.5, 58.33, 100, 210.05.",
            },
          ].map((item) => (
            <div
              key={item.issue}
              className="flex gap-3 p-3 rounded-lg bg-red-50 border border-red-100"
            >
              <span className="text-error text-lg leading-none mt-0.5">
                &times;
              </span>
              <div>
                <p className="font-medium text-sm">{item.issue}</p>
                <p className="text-sm text-muted mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <Link href="/learn" className="text-sm text-muted hover:text-foreground">
          &larr; What Are Skills?
        </Link>
        <Link
          href="/try-without"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Next: Try Without Skills
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
