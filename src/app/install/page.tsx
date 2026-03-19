import Link from "next/link";

export default function InstallPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
        Step 4
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Install the Data Table Skill
      </h1>
      <p className="text-lg text-muted mb-8">
        Now load the{" "}
        <a
          href="https://github.com/Baufest/skills/tree/main/skills/data-table-design"
          className="text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baufest data-table-design
        </a>{" "}
        skill into your agent. Pick your agent below.
      </p>

      <div className="space-y-6">
        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent-light text-accent text-sm font-medium">
              Claude Code
            </span>
          </div>
          <p className="text-sm text-muted">
            Use the built-in skill installer to add the skill from GitHub:
          </p>
          <pre>
            <code>{`# Install the Baufest skills collection
claude mcp add skills -- npx -y @anthropic-ai/skills-server https://github.com/Baufest/skills

# Verify it's loaded
# Inside Claude Code, type /skills to confirm`}</code>
          </pre>
          <p className="text-sm text-muted">
            Or install using the{" "}
            <a
              href="https://skills.sh"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              skills.sh
            </a>{" "}
            CLI:
          </p>
          <pre>
            <code>{`# Using skills.sh CLI
npx @anthropic-ai/skills-server install baufest/skills`}</code>
          </pre>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent-light text-accent text-sm font-medium">
              Cursor / VS Code / Copilot
            </span>
          </div>
          <p className="text-sm text-muted">
            Clone the skills repo and point your editor to it:
          </p>
          <pre>
            <code>{`# Clone the skills collection
git clone https://github.com/Baufest/skills.git ~/.skills/baufest

# For VS Code / Copilot:
# Copy skills into .github/skills/ in your project
cp -r ~/.skills/baufest/skills/data-table-design .github/skills/

# For Cursor:
# Add to settings.json:
# "chat.agentSkillsLocations": ["~/.skills/baufest/skills"]`}</code>
          </pre>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent-light text-accent text-sm font-medium">
              Any Agent
            </span>
          </div>
          <p className="text-sm text-muted">
            Skills follow the{" "}
            <a
              href="https://agentskills.io/specification"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              agentskills.io specification
            </a>
            . You can also just add the skill content to your project:
          </p>
          <pre>
            <code>{`# Download the skill directly
mkdir -p .skills/data-table-design
curl -o .skills/data-table-design/SKILL.md \\
  https://raw.githubusercontent.com/Baufest/skills/main/skills/data-table-design/SKILL.md
curl -o .skills/data-table-design/references/table-formatting.md \\
  --create-dirs \\
  https://raw.githubusercontent.com/Baufest/skills/main/skills/data-table-design/references/table-formatting.md`}</code>
          </pre>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">What the Skill Contains</h2>
          <p className="text-sm text-muted">
            The <code>data-table-design</code> skill includes detailed
            instructions for:
          </p>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong>Column ordering</strong> — ID first, then most-compared
                dimensions, numbers, actions
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong>Alignment rules</strong> — text left, numbers right,
                status center
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong>Number formatting</strong> — locale separators,
                consistent decimals, right-aligned
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong>Currency formatting</strong> — symbol + amount, proper
                locale rules
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong>Date consistency</strong> — one format throughout, with
                relative date thresholds
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong>Status indicators</strong> — color-coded badges with
                text (never color-only)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">&bull;</span>
              <span>
                <strong>Null handling</strong> — em-dash (&mdash;), not
                &quot;N/A&quot; or blank
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/try-without"
          className="text-sm text-muted hover:text-foreground"
        >
          &larr; Try Without Skills
        </Link>
        <Link
          href="/try-with"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Next: Try With Skills
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
