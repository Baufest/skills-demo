import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { TableStart } from "@/components/table-start";

export default function StartPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Start
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        The Starting Point
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        This is an invoice table — the kind you&apos;d find in any business app.
        Take a look. What would you improve?
      </p>

      <TableStart />

      <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
        Every exercise starts from an identical copy of this table. The only
        thing that changes is what skills are loaded when the agent runs.
      </p>

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          &larr; Home
        </Link>
        <Link href="/exercise-2a" className={buttonVariants()}>
          Next: Exercise 2a <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
