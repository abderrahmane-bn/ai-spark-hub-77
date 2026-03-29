import { departments } from "@/data/mockData";
import { Users, BookOpen, GraduationCap } from "lucide-react";

const StatsBar = () => {
  const totalWorkshops = departments.reduce((s, d) => s + d.workshopCount, 0);
  const totalReps = departments.reduce((s, d) => s + d.representativeCount, 0);
  const totalParticipants = departments.reduce((s, d) => s + d.participantCount, 0);

  const stats = [
    { label: "Workshops Held", value: totalWorkshops, icon: BookOpen, color: "text-primary" },
    { label: "Departments Active", value: departments.length, icon: GraduationCap, color: "text-accent" },
    { label: "Representatives", value: totalReps, icon: Users, color: "text-success" },
    { label: "Participants Trained", value: totalParticipants, icon: Users, color: "text-warning" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
          <stat.icon className={`h-5 w-5 mx-auto mb-2 ${stat.color}`} />
          <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
