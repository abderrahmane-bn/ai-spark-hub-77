const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { useAuth } from "@/lib/auth";
import { workshops } from "@/data/mockData";
import WorkshopCard from "@/components/WorkshopCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Calendar, GraduationCap, Sparkles, Users } from "lucide-react";

const RepresentativeDashboard = () => {
  const { user } = useAuth();
  if (!user) return null;

  // Match by instructor name OR by department fallback for newly-approved reps
  const mine = workshops.filter(
    (w) => w.instructor === user.fullName || (user.department && w.department === user.department),
  );
  const upcoming = mine.filter((w) => w.status === "upcoming");
  const past = mine.filter((w) => w.status === "past");
  const totalParticipants = mine.reduce((s, w) => s + w.enrolled, 0);

  return (
    _jsxDEV('div', { className: "space-y-10", children: [
      _jsxDEV('header', { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4"     , children: [
        _jsxDEV('div', { children: [
          _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
            _jsxDEV('p', { className: "text-sm font-medium text-accent uppercase tracking-wider"    , children: "Representative dashboard" }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)
            , _jsxDEV('span', { className: "inline-flex items-center gap-1 text-xs font-medium text-success"     , children: [
              _jsxDEV(BadgeCheck, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this ), " Approved"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 26}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 24}, this)
          , _jsxDEV('h1', { className: "font-display text-3xl md:text-4xl font-bold mt-1"    , children: ["Welcome, " , user.fullName.split(" ")[0]]}, void 0, true, {fileName: _jsxFileName, lineNumber: 30}, this)
          , _jsxDEV('p', { className: "text-muted-foreground mt-1" , children: [
            user.department, " · "  , user.aiFocus
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)
        , _jsxDEV(Button, { children: [
          _jsxDEV(Sparkles, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this ), "Create new session"

        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 35}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 22}, this)

      , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4"   , children: [
        _jsxDEV(StatTile, { icon: Calendar, label: "Upcoming", value: upcoming.length, accent: "bg-primary/10 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this )
        , _jsxDEV(StatTile, { icon: GraduationCap, label: "Past sessions" , value: past.length, accent: "bg-success/10 text-success" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this )
        , _jsxDEV(StatTile, { icon: Users, label: "Participants", value: totalParticipants, accent: "bg-accent/10 text-accent" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this )
        , _jsxDEV(StatTile, { icon: BadgeCheck, label: "Total led" , value: mine.length, accent: "bg-warning/10 text-warning" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 41}, this)

      , _jsxDEV(Section, { title: "Your upcoming sessions"  , subtitle: "Workshops, seminars and competitions you're leading"     , children: 
        upcoming.length === 0 ? (
          _jsxDEV(EmptyState, { message: "You have no upcoming sessions assigned."     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
        ) : (
          _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-5"   , children: 
            upcoming.map((w) => (
              _jsxDEV(WorkshopCard, { workshop: w,}, w.id, false, {fileName: _jsxFileName, lineNumber: 54}, this )
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
        )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)

      , _jsxDEV(Section, { title: "Your past sessions"  , subtitle: "Sessions you previously delivered"   , children: 
        past.length === 0 ? (
          _jsxDEV(EmptyState, { message: "No past sessions yet."   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this )
        ) : (
          _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-5"   , children: 
            past.map((w) => (
              _jsxDEV(WorkshopCard, { workshop: w,}, w.id, false, {fileName: _jsxFileName, lineNumber: 66}, this )
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
        )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 21}, this)
  );
};

const StatTile = ({
  icon: Icon,
  label,
  value,
  accent,
}




) => (
  _jsxDEV(Card, { className: "p-5", children: [
    _jsxDEV('div', { className: `inline-flex h-9 w-9 items-center justify-center rounded-xl ${accent} mb-3`, children: 
      _jsxDEV(Icon, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this)
    , _jsxDEV('div', { className: "font-display text-3xl font-bold"  , children: value}, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
    , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-1 font-medium"   , children: label}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 86}, this)
);

const Section = ({
  title,
  subtitle,
  children,
}



) => (
  _jsxDEV('section', { children: [
    _jsxDEV('div', { className: "mb-4", children: [
      _jsxDEV('h2', { className: "font-display text-xl font-bold"  , children: title}, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
      , subtitle && _jsxDEV('p', { className: "text-sm text-muted-foreground mt-0.5"  , children: subtitle}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 105}, this)
    , children
  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 104}, this)
);

const EmptyState = ({ message }) => (
  _jsxDEV(Card, { className: "p-10 text-center border-dashed"  , children: [
    _jsxDEV(Sparkles, { className: "h-8 w-8 text-muted-foreground mx-auto mb-3"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this )
    , _jsxDEV('p', { className: "text-muted-foreground text-sm" , children: message}, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this)
  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 114}, this)
);

export default RepresentativeDashboard;
