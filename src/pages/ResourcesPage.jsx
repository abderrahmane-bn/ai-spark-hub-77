const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { Link } from "react-router-dom";
import { Download, FileText, Calendar, BookOpen, ArrowUpRight } from "lucide-react";
import { workshops } from "@/data/mockData";

const ResourcesPage = () => {
  const pastWithResources = workshops.filter(
    (w) => w.status === "past" && ((w.resources && w.resources.length > 0) || w.resourceUrl),
  );

  return (
    _jsxDEV('div', { className: "container py-12" , children: [
      _jsxDEV('div', { className: "flex items-center gap-3 mb-2"   , children: [
        _jsxDEV('div', { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-success/10"      , children: 
          _jsxDEV(BookOpen, { className: "h-5 w-5 text-success"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 14}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this)
        , _jsxDEV('h1', { className: "font-display text-3xl font-bold text-foreground"   , children: "Resource Library" }, void 0, false, {fileName: _jsxFileName, lineNumber: 16}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 12}, this)
      , _jsxDEV('p', { className: "text-muted-foreground mb-8 ml-[52px]"  , children: "Materials from past events are automatically available here once the session date has passed."

      }, void 0, false, {fileName: _jsxFileName, lineNumber: 18}, this)

      , pastWithResources.length === 0 ? (
        _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-16 text-center shadow-card"      , children: 
          _jsxDEV('p', { className: "text-muted-foreground", children: "No resources available yet. Check back after upcoming events!"        }, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this)
      ) : (
        _jsxDEV('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"   , children: 
          pastWithResources.map((w) => {
            const count = w.resources?.length ?? (w.resourceUrl ? 1 : 0);
            return (
              _jsxDEV(Link, {

                to: `/resources/${w.id}`,
                className: "group block rounded-2xl border border-border/60 bg-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"            ,
 children: [
                _jsxDEV('div', { className: "h-1 w-full gradient-primary opacity-40 group-hover:opacity-100 transition-opacity"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this )
                , _jsxDEV('div', { className: "p-5", children: [
                  _jsxDEV('div', { className: "flex items-center gap-3 mb-4"   , children: [
                    _jsxDEV('div', { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shrink-0"       , children: 
                      _jsxDEV(FileText, { className: "h-5 w-5 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this)
                    , _jsxDEV('div', { className: "min-w-0", children: [
                      _jsxDEV('h3', { className: "font-display font-semibold text-foreground text-sm leading-tight truncate"     , children: w.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
                      , _jsxDEV('span', { className: "text-[11px] text-muted-foreground font-medium"  , children: w.department}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 42}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)
                  , _jsxDEV('p', { className: "text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed"    , children: w.description}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
                  , _jsxDEV('div', { className: "flex items-center justify-between pt-3 border-t border-border/60"     , children: [
                    _jsxDEV('span', { className: "flex items-center gap-1.5 text-xs text-muted-foreground"    , children: [
                      _jsxDEV(Calendar, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
                      , new Date(w.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)
                    , _jsxDEV('span', { className: "flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow group-hover:scale-105 transition-transform"            , children: [
                      _jsxDEV(Download, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this )
                      , count, " file" , count === 1 ? "" : "s"
                      , _jsxDEV(ArrowUpRight, { className: "h-3 w-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this )
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 48}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 37}, this)
              ]}, w.id, true, {fileName: _jsxFileName, lineNumber: 31}, this)
            );
          })
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this)
      )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 11}, this)
  );
};

export default ResourcesPage;
