const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { useAuth } from "@/lib/auth";
import { workshops, representatives } from "@/data/mockData";
import WorkshopCard from "@/components/WorkshopCard";
import RepresentativeCard from "@/components/RepresentativeCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, CheckCircle2, Clock, Sparkles } from "lucide-react";

const StudentDashboard = () => {
  const { user } = useAuth();
  if (!user) return null;

  const enrolled = workshops.filter((w) => user.enrolledWorkshopIds.includes(w.id));
  const upcoming = enrolled.filter((w) => w.status === "upcoming");
  const past = enrolled.filter((w) => w.status === "past");
  const featuredReps = representatives.filter((r) => r.validated).slice(0, 3);
  const isPendingRep = user.repStatus === "pending";

  return (
    _jsxDEV('div', { className: "space-y-10", children: [
      _jsxDEV('header', { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4"     , children: [
        _jsxDEV('div', { children: [
          _jsxDEV('p', { className: "text-sm font-medium text-primary uppercase tracking-wider"    , children: "Student dashboard" }, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this)
          , _jsxDEV('h1', { className: "font-display text-3xl md:text-4xl font-bold mt-1"    , children: ["Hello, " , user.fullName.split(" ")[0], " 👋" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 25}, this)
          , _jsxDEV('p', { className: "text-muted-foreground mt-1" , children: "Track your trainings and discover new sessions."      }, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)
        , _jsxDEV(Button, { asChild: true, children: 
          _jsxDEV(Link, { to: "/workshops", children: "Browse workshops" }, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 22}, this)

      , isPendingRep && (
        _jsxDEV(Card, { className: "p-5 border-warning/40 bg-warning/5 flex items-start gap-3"     , children: [
          _jsxDEV(Clock, { className: "h-5 w-5 text-warning shrink-0 mt-0.5"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
          , _jsxDEV('div', { children: [
            _jsxDEV('p', { className: "font-semibold text-sm" , children: "Representative application pending"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
            , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-1"  , children: "An admin is reviewing your application. You can keep using the platform as a student in the meantime."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
      )

      , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-4"   , children: [
        _jsxDEV(StatTile, { icon: Calendar, label: "Upcoming", value: upcoming.length, accent: "bg-primary/10 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this )
        , _jsxDEV(StatTile, { icon: CheckCircle2, label: "Completed", value: past.length, accent: "bg-success/10 text-success" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this )
        , _jsxDEV(StatTile, { icon: BookOpen, label: "Total enrollments" , value: enrolled.length, accent: "bg-accent/10 text-accent" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)

      , _jsxDEV(Section, { title: "Your upcoming workshops"  , subtitle: "Sessions you're registered for"   , children: 
        upcoming.length === 0 ? (
          _jsxDEV(EmptyState, { message: "You haven't registered for any upcoming sessions yet."       , cta: true,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this )
        ) : (
          _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-5"   , children: 
            upcoming.map((w) => (
              _jsxDEV(WorkshopCard, { workshop: w,}, w.id, false, {fileName: _jsxFileName, lineNumber: 57}, this )
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
        )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)

      , _jsxDEV(Section, { title: "Past sessions" , subtitle: "Sessions you attended"  , children: 
        past.length === 0 ? (
          _jsxDEV(EmptyState, { message: "No completed sessions yet."   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this )
        ) : (
          _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-5"   , children: 
            past.map((w) => (
              _jsxDEV(WorkshopCard, { workshop: w,}, w.id, false, {fileName: _jsxFileName, lineNumber: 69}, this )
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this)
        )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)

      , _jsxDEV(Section, {
        title: "Meet your representatives"  ,
        subtitle: "Faculty members leading the AI transition"     ,
        action: 
          _jsxDEV(Button, { asChild: true, variant: "ghost", size: "sm", children: 
            _jsxDEV(Link, { to: "/representatives", children: "View all" }, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this)
        ,
 children: 
        _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-5"   , children: 
          featuredReps.map((r) => (
            _jsxDEV(RepresentativeCard, { rep: r,}, r.id, false, {fileName: _jsxFileName, lineNumber: 86}, this )
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)
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
      _jsxDEV(Icon, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
    , _jsxDEV('div', { className: "font-display text-3xl font-bold"  , children: value}, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this)
    , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-1 font-medium"   , children: label}, void 0, false, {fileName: _jsxFileName, lineNumber: 110}, this)
  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 105}, this)
);

const Section = ({
  title,
  subtitle,
  action,
  children,
}




) => (
  _jsxDEV('section', { children: [
    _jsxDEV('div', { className: "flex items-end justify-between mb-4"   , children: [
      _jsxDEV('div', { children: [
        _jsxDEV('h2', { className: "font-display text-xl font-bold"  , children: title}, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
        , subtitle && _jsxDEV('p', { className: "text-sm text-muted-foreground mt-0.5"  , children: subtitle}, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 127}, this)
      , action
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 126}, this)
    , children
  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 125}, this)
);

const EmptyState = ({ message, cta }) => (
  _jsxDEV(Card, { className: "p-10 text-center border-dashed"  , children: [
    _jsxDEV(Sparkles, { className: "h-8 w-8 text-muted-foreground mx-auto mb-3"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this )
    , _jsxDEV('p', { className: "text-muted-foreground text-sm" , children: message}, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
    , cta && (
      _jsxDEV(Button, { asChild: true, className: "mt-4", size: "sm", children: 
        _jsxDEV(Link, { to: "/workshops", children: "Find a workshop"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 143}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 142}, this)
    )
  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)
);

export default StudentDashboard;
