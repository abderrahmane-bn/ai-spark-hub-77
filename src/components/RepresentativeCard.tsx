import { Representative } from "@/data/types";
import { CheckCircle, XCircle, BookOpen } from "lucide-react";

const focusColors: Record<string, string> = {
  "Python for Research": "bg-success/10 text-success border-success/20",
  "Data Science": "bg-primary/10 text-primary border-primary/20",
  "Automation": "bg-accent/10 text-accent border-accent/20",
  "AI Pedagogy": "bg-warning/10 text-warning border-warning/20",
};

const RepresentativeCard = ({ rep }: { rep: Representative }) => {
  const initials = rep.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:shadow-glow hover:border-primary/30">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full gradient-navy text-navy-foreground font-display font-bold text-lg">
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-display font-semibold text-foreground truncate">
              {rep.fullName}
            </h3>
            {rep.validated ? (
              <CheckCircle className="h-4 w-4 shrink-0 text-success" />
            ) : (
              <XCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
            )}
          </div>
          <p className="text-xs text-muted-foreground mb-2">{rep.title}</p>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-foreground">
              {rep.department}
            </span>
            <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${focusColors[rep.aiFocus] || "bg-muted text-muted-foreground"}`}>
              {rep.aiFocus}
            </span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {rep.bio}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" />
              {rep.workshopsLed} workshops led
            </div>
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                rep.validated
                  ? "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {rep.validated ? "Validated Trainer" : "In Training"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeCard;
