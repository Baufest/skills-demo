import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillFeaturesCard } from "@/_hints/skill-features-card";

export default function InstallPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
        Step 4
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Install the Data Table Skill
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Now load the{" "}
        <a
          href="https://github.com/Baufest/skills/tree/main/skills/data-table-design"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baufest data-table-design
        </a>{" "}
        skill into your agent. Pick your agent below.
      </p>

      <div className="space-y-6">
        <Tabs defaultValue="claude" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="claude">Claude Code</TabsTrigger>
            <TabsTrigger value="editor">Cursor / VS Code</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>

          <TabsContent value="claude">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Claude Code
                  <Badge variant="secondary">Recommended</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Use the built-in skill installer to add the skill from GitHub:
                </p>
                <pre>
                  <code>{`# Install the Baufest skills collection
claude mcp add skills -- \\
  npx -y @anthropic-ai/skills-server \\
  https://github.com/Baufest/skills

# Verify it's loaded — inside Claude Code, type:
/skills`}</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  Or install using the{" "}
                  <a
                    href="https://skills.sh"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    skills.sh
                  </a>{" "}
                  CLI:
                </p>
                <pre>
                  <code>{`npx @anthropic-ai/skills-server install baufest/skills`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="editor">
            <Card>
              <CardHeader>
                <CardTitle>Cursor / VS Code / Copilot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Clone the skills repo and point your editor to it:
                </p>
                <pre>
                  <code>{`# Clone the skills collection
git clone https://github.com/Baufest/skills.git \\
  ~/.skills/baufest

# For VS Code / Copilot — copy into your project:
cp -r ~/.skills/baufest/skills/data-table-design \\
  .github/skills/

# For Cursor — add to settings.json:
# "chat.agentSkillsLocations": [
#   "~/.skills/baufest/skills"
# ]`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manual">
            <Card>
              <CardHeader>
                <CardTitle>Any Agent (Manual)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Skills follow the{" "}
                  <a
                    href="https://agentskills.io/specification"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    agentskills.io specification
                  </a>
                  . Download directly:
                </p>
                <pre>
                  <code>{`mkdir -p .skills/data-table-design/references

curl -o .skills/data-table-design/SKILL.md \\
  https://raw.githubusercontent.com/Baufest/skills/\\
main/skills/data-table-design/SKILL.md

curl -o .skills/data-table-design/references/\\
table-formatting.md \\
  https://raw.githubusercontent.com/Baufest/skills/\\
main/skills/data-table-design/references/\\
table-formatting.md`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <SkillFeaturesCard />
      </div>

      <div className="mt-10 flex justify-between items-center">
        <Link
          href="/try-without"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          &larr; Try Without Skills
        </Link>
        <Link href="/try-with" className={buttonVariants()}>
          Next: Try With Skills <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
