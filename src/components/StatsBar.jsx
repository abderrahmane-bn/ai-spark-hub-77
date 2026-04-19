const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { departments } from "@/data/mockData";
import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react";

const StatsBar = () => {
  const totalWorkshops = departments.reduce((s, d) => s + d.workshopCount, 0);
  const totalReps = departments.reduce((s, d) => s + d.representativeCount, 0);
  const totalParticipants = departments.reduce((s, d) => s + d.participantCount, 0);

  const stats = [
    { label: "Workshops Held", value: totalWorkshops, icon: BookOpen, accent: "bg-primary/10 text-primary" },
    { label: "Active Departments", value: departments.length, icon: GraduationCap, accent: "bg-accent/10 text-accent" },
    { label: "Representatives", value: totalReps, icon: Users, accent: "bg-success/10 text-success" },
    { label: "Trained Participants", value: totalParticipants, icon: TrendingUp, accent: "bg-warning/10 text-warning" },
  ];

  return (
    _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-3"   , children: 
      stats.map((stat, i) => (
        _jsxDEV('div', {

          className: "rounded-2xl border border-border/60 bg-card p-5 shadow-card hover:shadow-card-hover transition-all duration-300"        ,
          style: { animationDelay: `${i * 100}ms` },
 children: [
          _jsxDEV('div', { className: `inline-flex h-9 w-9 items-center justify-center rounded-xl ${stat.accent} mb-3`, children: 
            _jsxDEV(stat.icon, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this)
          , _jsxDEV('div', { className: "font-display text-3xl font-bold text-foreground tracking-tight"    , children: stat.value}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this)
          , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-1 font-medium"   , children: stat.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this)
        ]}, stat.label, true, {fileName: _jsxFileName, lineNumber: 19}, this)
      ))
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 17}, this)
  );
};

export default StatsBar;
