import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
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
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
          Interactive Walkthrough
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Agent Skills Make AI Coding Better
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how reusable, shareable skill files transform vague AI output into
          consistent, high-quality code that follows your team&apos;s standards.
        </p>
      </div>

      <div className="grid gap-4">
        {steps.map((item) => (
          <Link key={item.href} href={item.href} className="group">
            <Card className="transition-all hover:border-primary hover:shadow-sm">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm shrink-0">
                  {item.step}
                </span>
                <div className="space-y-1">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/learn" className={buttonVariants({ size: "lg" })}>
          Get Started <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
