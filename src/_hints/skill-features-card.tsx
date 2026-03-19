import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillFeatures } from "./skill-features";

export function SkillFeaturesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What the Skill Contains</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          The <code>data-table-design</code> skill includes detailed
          instructions for:
        </p>
        <ul className="space-y-2">
          {skillFeatures.map((f) => (
            <li key={f.label} className="flex gap-2 text-sm">
              <span className="text-primary mt-0.5">&bull;</span>
              <span>
                <strong>{f.label}</strong>
                <span className="text-muted-foreground"> — {f.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
