import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { BadTable } from "@/components/bad-table";
import { IssueCards } from "@/_hints/issue-cards";

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

      <IssueCards />

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
