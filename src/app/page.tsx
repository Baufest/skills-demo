import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { Callout } from "@/components/callout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const exercises = [
  {
    step: "1",
    title: "The Starting Point",
    desc: "See the invoice table as-is. Spot what you'd improve.",
    href: "/start",
  },
  {
    step: "2a",
    title: "Improve Without Skills",
    desc: "Ask an AI agent to fix the table — no skills loaded.",
    href: "/exercise-2a",
  },
  {
    step: "2b",
    title: "Improve With a Data Table Skill",
    desc: "Same prompt, but with the data-table-design skill loaded.",
    href: "/exercise-2b",
  },
  {
    step: "3a",
    title: "DuckCorp Brand — Without Skill",
    desc: "Ask the agent to apply DuckCorp branding — no skill loaded.",
    href: "/exercise-3a",
  },
  {
    step: "3b",
    title: "DuckCorp Brand — With Skill",
    desc: "Same prompt, but with the duckcorp-brand skill loaded.",
    href: "/exercise-3b",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
          Interactive Walkthrough
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Agent Skills Make AI Coding Better
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Five exercises, one table. See how reusable skill files transform
          vague AI output into consistent, opinionated code.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Before You Start</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Skills work with a variety of AI coding agents and can be
              installed in different ways. For this demo, we&apos;ll assume
              you have{" "}
              <a
                href="https://docs.anthropic.com/en/docs/claude-code"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Claude Code
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/features/copilot/cli"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Copilot CLI
              </a>{" "}
              installed, and we&apos;ll install skills using{" "}
              <code>npx skills</code>.
            </p>
            <p>
              <code>npx skills</code> is a lightweight CLI that downloads
              skill files into your project. The skills themselves are just
              markdown files — <code>npx</code> is simply a convenient runner.
              Your project doesn&apos;t need to be Node-based; the command
              works in any project and simply writes files to disk.
            </p>
          </CardContent>
        </Card>

        <Callout variant="info">
          <p>
            <strong className="text-foreground">
              Skills work across all agents
            </strong>{" "}
            — the{" "}
            <a
              href="https://agentskills.io/specification"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              agentskills.io specification
            </a>{" "}
            is an open standard supported by Claude Code, Cursor, VS Code
            Copilot, Codex, and more. That said, how skills are exposed to each
            agent is still a bit clunky — some agents look in{" "}
            <code>.agents/</code>, others use product-specific directories like{" "}
            <code>.github/skills/</code> or editor settings. The{" "}
            <code>npx skills install</code> command handles
            this for you, placing files where your agent expects them.
          </p>
        </Callout>
      </div>

      <div className="grid gap-4">
        {exercises.map((item) => (
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
        <Link href="/start" className={buttonVariants({ size: "lg" })}>
          Get Started <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
