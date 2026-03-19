import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
        Step 1
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-6">
        What Are Agent Skills?
      </h1>

      <div className="prose max-w-none space-y-6 text-foreground">
        <p className="text-lg text-muted">
          Agent skills are <strong>reusable instruction files</strong> that tell
          AI coding agents <em>how</em> to do specific tasks well. Think of them
          as expert knowledge, packaged into a portable format that any agent can
          load.
        </p>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">The Problem They Solve</h2>
          <p className="text-muted">
            Without skills, every AI interaction starts from zero. You get
            generic output that doesn&apos;t match your team&apos;s conventions.
            You spend time re-prompting, correcting alignment, fixing formats —
            doing the work you asked the AI to do.
          </p>
          <p className="text-muted">
            Skills encode best practices once and apply them everywhere.
            Consistent data tables, proper API designs, branded deliverables —
            automatically.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">How They Work</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0 mt-0.5">
                1
              </span>
              <div>
                <p className="font-medium">Discovery</p>
                <p className="text-sm text-muted">
                  The agent sees the skill name and description — just enough to
                  know when it&apos;s relevant.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0 mt-0.5">
                2
              </span>
              <div>
                <p className="font-medium">Trigger</p>
                <p className="text-sm text-muted">
                  When a matching task is detected, the full instructions load
                  into context.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold shrink-0 mt-0.5">
                3
              </span>
              <div>
                <p className="font-medium">Reference</p>
                <p className="text-sm text-muted">
                  Supporting docs, templates, and scripts are pulled in
                  on-demand as needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Skill Anatomy</h2>
          <pre>
            <code>{`skill-name/
├── SKILL.md          # Instructions (YAML frontmatter + markdown)
├── references/       # Supporting docs, loaded on-demand
├── scripts/          # Executable helpers
└── assets/           # Templates, images, static files`}</code>
          </pre>
          <p className="text-sm text-muted">
            The <code>SKILL.md</code> file is the only required file. Everything
            else is optional and loaded progressively.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Where to Find Skills</h2>
          <div className="grid gap-3">
            {[
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
                name: "awesome-copilot-extensions",
                url: "https://github.com/anthropics/awesome-claude-code-extensions",
                desc: "A curated list of awesome Claude Code extensions including skills and MCP servers.",
              },
            ].map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start p-4 rounded-lg border border-border hover:border-accent hover:bg-accent-light/30 transition-all"
              >
                <div>
                  <p className="font-medium text-accent">{resource.name}</p>
                  <p className="text-sm text-muted mt-0.5">{resource.desc}</p>
                </div>
                <span className="text-muted text-sm shrink-0 ml-4">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Agent Compatibility</h2>
          <p className="text-muted">
            Skills built on the{" "}
            <a
              href="https://agentskills.io"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              agentskills.io specification
            </a>{" "}
            work across multiple agents:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Claude Code",
              "Cursor",
              "VS Code / Copilot",
              "Codex",
              "Gemini CLI",
            ].map((agent) => (
              <span
                key={agent}
                className="px-3 py-1 rounded-full bg-accent-light text-accent text-sm font-medium"
              >
                {agent}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          &larr; Home
        </Link>
        <Link
          href="/before"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Next: See the Problem
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
