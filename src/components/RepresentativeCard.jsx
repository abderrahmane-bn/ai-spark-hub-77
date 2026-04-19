const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";
import { CheckCircle, XCircle, BookOpen } from "lucide-react";

const focusColors = {
  "Python for Research": "bg-success/10 text-success",
  "Data Science": "bg-primary/10 text-primary",
  "Automation": "bg-accent/10 text-accent",
  "AI Pedagogy": "bg-warning/10 text-warning",
};

const RepresentativeCard = ({ rep }) => {
  const initials = rep.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    _jsxDEV('div', { className: "group rounded-2xl border border-border/60 bg-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-0.5"          , children: 
      _jsxDEV('div', { className: "p-5", children: 
        _jsxDEV('div', { className: "flex items-start gap-4"  , children: [
          /* Avatar */
          _jsxDEV('div', { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gradient-navy text-navy-foreground font-display font-bold text-sm shadow-card"            , children: 
            initials
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this)

          , _jsxDEV('div', { className: "flex-1 min-w-0" , children: [
            _jsxDEV('div', { className: "flex items-center gap-2 mb-0.5"   , children: [
              _jsxDEV('h3', { className: "font-display font-semibold text-foreground truncate text-[15px]"    , children: 
                rep.fullName
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
              , rep.validated ? (
                _jsxDEV(CheckCircle, { className: "h-4 w-4 shrink-0 text-success"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this )
              ) : (
                _jsxDEV(XCircle, { className: "h-4 w-4 shrink-0 text-muted-foreground/50"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
              )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 28}, this)
            , _jsxDEV('p', { className: "text-xs text-muted-foreground mb-3"  , children: rep.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)

            , _jsxDEV('div', { className: "flex flex-wrap items-center gap-1.5 mb-3"    , children: [
              _jsxDEV('span', { className: "inline-flex items-center rounded-lg bg-muted px-2.5 py-1 text-[11px] font-semibold text-foreground"        , children: 
                rep.department
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
              , _jsxDEV('span', { className: `inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold ${focusColors[rep.aiFocus] || "bg-muted text-muted-foreground"}`, children: 
                rep.aiFocus
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 40}, this)

            , _jsxDEV('p', { className: "text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed"    , children: 
              rep.bio
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)

            , _jsxDEV('div', { className: "flex items-center justify-between pt-3 border-t border-border/60"     , children: [
              _jsxDEV('div', { className: "flex items-center gap-1.5 text-xs text-muted-foreground"    , children: [
                _jsxDEV(BookOpen, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this )
                , _jsxDEV('span', { className: "font-medium", children: rep.workshopsLed}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this), " workshops led"
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
              , _jsxDEV('span', {
                className: `inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold ${
                  rep.validated
                    ? "bg-success/10 text-success"
                    : "bg-warning/10 text-warning"
                }`,
 children: 
                rep.validated ? "✓ Validated" : "In Training"
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 21}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this)
  );
};

export default RepresentativeCard;
