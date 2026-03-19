import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadTable } from "@/components/bad-table";

const issues = [
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
      "Amounts show raw numbers (24500) without currency symbols or separators.",
  },
  {
    issue: "No status indicators",
    detail: 'Statuses are plain text — "paid", "overdue" look the same.',
  },
  {
    issue: "N/A for nulls",
    detail:
      'Missing values show "N/A" instead of an em-dash (\u2014) or being handled gracefully.',
  },
  {
    issue: "Redundant columns",
    detail:
      "Currency is a separate column instead of being merged with amount.",
  },
  {
    issue: "Inconsistent precision",
    detail: "Hours show varying decimals: 163.5, 58.33, 100, 210.05.",
  },
];

export default function BeforePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Step 2
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        The Problem: A Typical Data Table
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Below is an invoice table — the kind you&apos;d find in any business
        app. It works, but it has issues. Can you spot them?
      </p>

      <BadTable />

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

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/learn"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          &larr; What Are Skills?
        </Link>
        <Link href="/try-without" className={buttonVariants()}>
          Next: Try Without Skills <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
