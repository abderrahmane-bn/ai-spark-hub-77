import { Workshop } from "@/data/types";
import { Calendar, MapPin, Users, Clock, Monitor, Download, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const typeColors: Record<string, string> = {
  workshop: "bg-primary/10 text-primary border-primary/20",
  seminar: "bg-accent/10 text-accent border-accent/20",
  competition: "bg-warning/10 text-warning border-warning/20",
};

const audienceLabels: Record<string, string> = {
  representatives: "Dept. Representatives",
  students: "Students",
  public: "General Public",
};

const WorkshopCard = ({ workshop }: { workshop: Workshop }) => {
  const isPast = workshop.status === "past";
  const fillPercent = Math.round((workshop.enrolled / workshop.maxParticipants) * 100);

  return (
    <div className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:shadow-glow hover:border-primary/30">
      {/* Status indicator */}
      <div className="absolute top-4 right-4">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            isPast
              ? "bg-muted text-muted-foreground"
              : "bg-success/10 text-success"
          }`}
        >
          {isPast ? "Completed" : "Upcoming"}
        </span>
      </div>

      {/* Type badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium capitalize ${typeColors[workshop.type]}`}>
          {workshop.type}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Tag className="h-3 w-3" />
          {workshop.topic}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-foreground mb-2 pr-20 leading-tight">
        {workshop.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {workshop.description}
      </p>

      {/* Meta info */}
      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-primary" />
          {new Date(workshop.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-primary" />
          {workshop.time}
        </span>
        <span className="flex items-center gap-1.5">
          {workshop.location === "webinar" ? (
            <Monitor className="h-3.5 w-3.5 text-accent" />
          ) : (
            <MapPin className="h-3.5 w-3.5 text-accent" />
          )}
          {workshop.location === "webinar" ? "Online Webinar" : workshop.venue}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5 text-primary" />
          {audienceLabels[workshop.targetAudience]}
        </span>
      </div>

      {/* Enrollment bar */}
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-muted-foreground">Enrolled</span>
          <span className="font-medium text-foreground">{workshop.enrolled}/{workshop.maxParticipants}</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full gradient-primary transition-all"
            style={{ width: `${fillPercent}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <span className="text-xs text-muted-foreground">by {workshop.instructor}</span>
        {isPast && workshop.resourceUrl && (
          <button className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
            <Download className="h-3.5 w-3.5" />
            Resources
          </button>
        )}
        {!isPast && (
          <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
            Register →
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkshopCard;
