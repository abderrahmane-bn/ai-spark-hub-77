const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";
import { Calendar, MapPin, Users, Clock, Monitor, Download, Tag, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const typeColors = {
  workshop: "bg-primary/10 text-primary",
  seminar: "bg-accent/10 text-accent",
  competition: "bg-warning/10 text-warning",
};

const audienceLabels = {
  representatives: "Dept. Representatives",
  students: "Students",
  public: "General Public",
};

const WorkshopCard = ({ workshop }) => {
  const isPast = workshop.status === "past";
  const fillPercent = Math.round((workshop.enrolled / workshop.maxParticipants) * 100);

  return (
    _jsxDEV(Link, {
      to: `/sessions/${workshop.id}`,
      className: "group relative block rounded-2xl border border-border/60 bg-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-0.5"            ,
 children: [
      /* Subtle top gradient accent */
      _jsxDEV('div', { className: "h-1 w-full gradient-primary opacity-60 group-hover:opacity-100 transition-opacity"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this )

      , _jsxDEV('div', { className: "p-5", children: [
        /* Header row */
        _jsxDEV('div', { className: "flex items-start justify-between mb-3"   , children: [
          _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
            _jsxDEV('span', { className: `inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${typeColors[workshop.type]}`, children: 
              workshop.type
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
            , _jsxDEV('span', { className: "flex items-center gap-1 text-[11px] text-muted-foreground font-medium"     , children: [
              _jsxDEV(Tag, { className: "h-3 w-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this )
              , workshop.topic
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)
          , _jsxDEV('span', {
            className: `inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold ${
              isPast
                ? "bg-muted text-muted-foreground"
                : "bg-success/10 text-success"
            }`,
 children: 
            isPast ? "Completed" : "Upcoming"
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)

        /* Title */
        , _jsxDEV('h3', { className: "font-display text-base font-semibold text-foreground mb-1.5 leading-snug group-hover:text-primary transition-colors"       , children: 
          workshop.title
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)

        , _jsxDEV('p', { className: "text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed"    , children: 
          workshop.description
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this)

        /* Meta grid */
        , _jsxDEV('div', { className: "grid grid-cols-2 gap-2.5 mb-4"   , children: 
          [
            { icon: Calendar, text: new Date(workshop.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), color: "text-primary" },
            { icon: Clock, text: workshop.time, color: "text-primary" },
            { icon: workshop.location === "webinar" ? Monitor : MapPin, text: workshop.location === "webinar" ? "Online Webinar" : workshop.venue, color: "text-accent" },
            { icon: Users, text: audienceLabels[workshop.targetAudience], color: "text-muted-foreground" },
          ].map((meta, i) => (
            _jsxDEV('span', { className: "flex items-center gap-1.5 text-xs text-muted-foreground"    , children: [
              _jsxDEV(meta.icon, { className: `h-3.5 w-3.5 ${meta.color} shrink-0`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this )
              , _jsxDEV('span', { className: "truncate", children: meta.text}, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this)
            ]}, i, true, {fileName: _jsxFileName, lineNumber: 69}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)

        /* Enrollment */
        , _jsxDEV('div', { className: "mb-4", children: [
          _jsxDEV('div', { className: "flex justify-between text-xs mb-1.5"   , children: [
            _jsxDEV('span', { className: "text-muted-foreground font-medium" , children: "Enrollment"}, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this)
            , _jsxDEV('span', { className: "font-semibold text-foreground" , children: [workshop.enrolled, "/", workshop.maxParticipants]}, void 0, true, {fileName: _jsxFileName, lineNumber: 80}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 78}, this)
          , _jsxDEV('div', { className: "h-2 rounded-full bg-muted overflow-hidden"   , children: 
            _jsxDEV('div', {
              className: "h-full rounded-full gradient-primary transition-all duration-500"    ,
              style: { width: `${fillPercent}%` },}, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this
            )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 77}, this)

        /* Footer */
        , _jsxDEV('div', { className: "flex items-center justify-between pt-3 border-t border-border/60"     , children: [
          _jsxDEV('span', { className: "text-xs text-muted-foreground" , children: ["by "
             , _jsxDEV('span', { className: "font-medium text-foreground" , children: workshop.instructor}, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 92}, this)
          , isPast && (workshop.resources?.length || workshop.resourceUrl) && (
            _jsxDEV('span', { className: "flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-primary/80 transition-colors"       , children: [
              _jsxDEV(Download, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this ), "Resources"

            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 96}, this)
          )
          , !isPast && (
            _jsxDEV('span', { className: "flex items-center gap-1 rounded-lg gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow transition-all group-hover:scale-105"            , children: ["View details"

              , _jsxDEV(ArrowUpRight, { className: "h-3 w-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 102}, this)
          )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 91}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 29}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 22}, this)
  );
};

export default WorkshopCard;
