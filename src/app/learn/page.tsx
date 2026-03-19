import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const resources = [
  {
    name: "Baufest Skills",
    url: "https://github.com/Baufest/skills",
    desc: "Curated skills for data tables, API design, architecture decisions, and more.",
  },
  {
    name: "agentskills.io",
    url: "https://agentskills.io",
    desc: "The open specification for portable agent skills. Learn how to create your own.",
  },
  {
    name: "skills.sh",
    url: "https://skills.sh",
    desc: "A community directory to discover and share agent skills.",
  },
  {
    name: "awesome-claude-code-extensions",
    url: "https://github.com/anthropics/awesome-claude-code-extensions",
    desc: "A curated list of awesome Claude Code extensions including skills and MCP servers.",
  },
];

const agents = [
  "Claude Code",
  "Cursor",
  "VS Code / Copilot",
  "Codex",
  "Gemini CLI",
];

export default function LearnPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Step 1
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        What Are Agent Skills?
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Agent skills are <strong>reusable instruction files</strong> that tell
        AI coding agents <em>how</em> to do specific tasks well. Think of them
        as expert knowledge, packaged into a portable format that any agent can
        load.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>The Problem They Solve</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Without skills, every AI interaction starts from zero. You get
              generic output that doesn&apos;t match your team&apos;s
              conventions. You spend time re-prompting, correcting alignment,
              fixing formats — doing the work you asked the AI to do.
            </p>
            <p>
              Skills encode best practices once and apply them everywhere.
              Consistent data tables, proper API designs, branded deliverables —
              automatically.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How They Work</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  n: "1",
                  title: "Discovery",
                  desc: "The agent sees the skill name and description — just enough to know when it's relevant.",
                },
                {
                  n: "2",
                  title: "Trigger",
                  desc: "When a matching task is detected, the full instructions load into context.",
                },
                {
                  n: "3",
                  title: "Reference",
                  desc: "Supporting docs, templates, and scripts are pulled in on-demand as needed.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0 mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Anatomy</CardTitle>
          </CardHeader>
          <CardContent>
            <pre>
              <code>{`skill-name/
├── SKILL.md          # Instructions (YAML frontmatter + markdown)
├── references/       # Supporting docs, loaded on-demand
├── scripts/          # Executable helpers
└── assets/           # Templates, images, static files`}</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-3">
              The <code>SKILL.md</code> file is the only required file.
              Everything else is optional and loaded progressively.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Where to Find Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {resources.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-start p-4 rounded-lg border hover:border-primary hover:bg-secondary/50 transition-all"
                >
                  <div>
                    <p className="font-medium text-primary">{r.name}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {r.desc}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-sm shrink-0 ml-4">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Agent Compatibility</CardTitle>
            <CardDescription>
              Skills built on the{" "}
              <a
                href="https://agentskills.io"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                agentskills.io specification
              </a>{" "}
              work across multiple agents:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {agents.map((agent) => (
                <Badge key={agent} variant="secondary">
                  {agent}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" })
          )}
        >
          &larr; Home
        </Link>
        <Link href="/before" className={buttonVariants()}>
          Next: See the Problem <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
