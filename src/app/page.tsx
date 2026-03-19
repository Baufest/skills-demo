import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
          Interactive Walkthrough
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Agent Skills Make AI Coding Better
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          See how reusable, shareable skill files transform vague AI output into
          consistent, high-quality code that follows your team&apos;s standards.
        </p>
      </div>

      <div className="grid gap-4">
        {[
          {
            step: "1",
            title: "What Are Skills?",
            desc: "Learn what agent skills are, where to find them, and why they matter.",
            href: "/learn",
          },
          {
            step: "2",
            title: "The Problem",
            desc: "See a data table with common design issues — inconsistent formatting, bad alignment, missing conventions.",
            href: "/before",
          },
          {
            step: "3",
            title: "Try Without Skills",
            desc: "Ask an AI agent to improve the table without any skill loaded. See what happens.",
            href: "/try-without",
          },
          {
            step: "4",
            title: "Install Skills",
            desc: "Load the Baufest data-table-design skill into your agent.",
            href: "/install",
          },
          {
            step: "5",
            title: "Try With Skills",
            desc: "Repeat the exercise — same prompt, same table, dramatically better results.",
            href: "/try-with",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-start gap-4 p-5 rounded-xl border border-border bg-surface hover:border-accent hover:shadow-sm transition-all group"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-light text-accent font-semibold text-sm shrink-0">
              {item.step}
            </span>
            <div>
              <h2 className="font-semibold group-hover:text-accent transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-muted mt-0.5">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Get Started
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
