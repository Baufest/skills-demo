import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const faqs = [
  {
    question: "What's the difference between MCP servers and skills?",
    answer:
      "MCP (Model Context Protocol) servers expose tools, resources, and prompts that an AI agent can call at runtime — think of them as live integrations (databases, APIs, browser automation). Skills, on the other hand, are static instruction files (Markdown) that shape how the agent thinks and writes code. An MCP server gives the agent new capabilities; a skill gives the agent expert knowledge and opinionated guidance. They're complementary: you might use an MCP server to query a database and a skill to ensure the generated SQL follows your team's conventions.",
  },
  {
    question: "What's the difference between CLAUDE.md and skills?",
    answer:
      "CLAUDE.md is a project-level instruction file that applies to every conversation in a repository. It sets global rules — coding standards, forbidden patterns, repo structure notes. Skills are modular, reusable instruction sets that can be installed, shared, and selectively loaded across projects. Think of CLAUDE.md as your project's constitution, and skills as specialist advisors you bring in for specific tasks. A CLAUDE.md file might say \"use Tailwind for styling\"; a data-table skill would describe exactly how to build a great data table with Tailwind.",
  },
  {
    question:
      "How should I decide whether to build my own skills or use open-source ones?",
    answer:
      "Start with open-source skills for general best practices (data tables, forms, accessibility). Build your own when the guidance is specific to your organization — brand guidelines, internal API patterns, proprietary architecture decisions, or domain-specific conventions that wouldn't make sense outside your team. A good rule of thumb: if the knowledge would be useful to any developer, look for an existing skill first. If it encodes institutional knowledge, build it yourself.",
  },
  {
    question:
      "Should we have skills review and governance at the client or team level?",
    answer:
      "Yes. Skills directly influence the code your AI agent produces, so they deserve the same scrutiny as shared libraries or CI configurations. Consider: (1) a curated list of approved skills for your team or client, (2) a lightweight review process before adding new skills to projects, (3) version-pinning skills so updates don't silently change agent behavior, and (4) periodic audits to retire outdated skills. The goal isn't bureaucracy — it's ensuring consistency and preventing conflicting instructions across teams.",
  },
  {
    question: "How do I know if a skill is too big or too small?",
    answer:
      "A skill is too big if it tries to cover multiple unrelated concerns (e.g., \"frontend-everything\" covering forms, tables, animations, and routing). Break it into focused skills instead. A skill is too small if it only encodes a single trivial rule that belongs in CLAUDE.md (e.g., \"use semicolons\"). The sweet spot: a skill should represent a coherent area of expertise that a human specialist would own — \"data table design,\" \"brand compliance,\" \"API error handling.\" If you can't describe the skill's purpose in one sentence, it's probably too broad.",
  },
  {
    question: "Can I use multiple skills at the same time?",
    answer:
      "Absolutely. Skills are designed to compose. You might load a data-table skill, a brand skill, and an accessibility skill in the same session. The agent merges their guidance to produce output that satisfies all three. Just watch for conflicts — if two skills give contradictory advice (e.g., different color systems), the agent may produce inconsistent results. This is another reason governance matters.",
  },
  {
    question: "Where do skills live and how are they loaded?",
    answer:
      "Skills are Markdown files that can live in your project directory, in a shared repository, or installed from a registry. In Claude Code, they appear as slash commands (e.g., /data-table-design) that you can invoke to load them into the current session. They can also be referenced in CLAUDE.md to auto-load for every conversation in a project.",
  },
  {
    question: "How do I write a good skill?",
    answer:
      "A good skill is opinionated, specific, and example-driven. Start with a clear purpose statement. Include concrete do/don't examples — agents learn better from examples than abstract rules. Specify the exact patterns, components, and conventions to use. Cover edge cases. Keep it focused on one area of expertise. Test it by running the same prompt with and without the skill and comparing the output quality.",
  },
  {
    question: "What happens when a skill conflicts with CLAUDE.md?",
    answer:
      "CLAUDE.md instructions generally take precedence since they represent project-level decisions. However, skills can provide more specific guidance within that framework. Think of it as specificity — CLAUDE.md says \"use Tailwind,\" and a skill says \"use these specific Tailwind patterns for data tables.\" If there's a genuine conflict, the agent may produce inconsistent results. Keep CLAUDE.md and your skills aligned by treating them as parts of the same system.",
  },
  {
    question:
      "How do teams update skills over time and coordinate changes?",
    answer:
      "Treat skills like shared code — store them in a version-controlled repository, use pull requests for changes, and tag releases so consumers can pin to a known version. When a skill changes, communicate updates the same way you would a library upgrade: changelogs, migration notes, and a grace period for teams to adopt. For larger organizations, designate skill owners who monitor relevance and accuracy over time. If a skill is used across multiple teams, coordinate through a shared channel or working group before making breaking changes. Automated checks can help too — a CI step that runs a standard prompt against updated skills and diffs the output catches regressions before they reach developers.",
  },
  {
    question: "Are skills only for Claude Code, or do they work with other AI coding tools?",
    answer:
      "The concept of instruction files that guide AI agents is universal, but the specific format and loading mechanism varies by tool. Skills as demonstrated here are designed for Claude Code. That said, the underlying Markdown files contain transferable knowledge — you could adapt them for other tools that support system prompts or instruction files. The investment in writing good skills pays off across tools.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
          Reference
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground">
          Common questions about agent skills, MCP servers, and how to use them
          effectively.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-base leading-snug">
                {faq.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
