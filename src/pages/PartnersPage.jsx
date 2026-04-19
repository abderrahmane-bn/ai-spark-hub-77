const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { partners } from "@/data/mockData";
import { Building2, GraduationCap, Landmark, Handshake } from "lucide-react";

const iconMap = {
  industry: Building2,
  rectorate: Landmark,
  academic: GraduationCap,
};

const typeColors = {
  industry: "bg-primary/10 text-primary",
  rectorate: "bg-accent/10 text-accent",
  academic: "bg-success/10 text-success",
};

const PartnersPage = () => {
  return (
    _jsxDEV('div', { className: "container py-12" , children: [
      _jsxDEV('div', { className: "flex items-center gap-3 mb-2"   , children: [
        _jsxDEV('div', { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-warning/10"      , children: 
          _jsxDEV(Handshake, { className: "h-5 w-5 text-warning"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 21}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this)
        , _jsxDEV('h1', { className: "font-display text-3xl font-bold text-foreground"   , children: "Partnership Grid" }, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 19}, this)
      , _jsxDEV('p', { className: "text-muted-foreground mb-8 ml-[52px]"  , children: "Collaborations with industry, rectorate, and academic institutions powering the AI House mission."

      }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)

      , _jsxDEV('div', { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"   , children: 
        partners.map((p) => {
          const Icon = iconMap[p.type] || Building2;
          const colorClass = typeColors[p.type] || "bg-muted text-muted-foreground";
          return (
            _jsxDEV('div', { className: "group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"          , children: [
              _jsxDEV('div', { className: "h-1 w-full gradient-primary opacity-30 group-hover:opacity-100 transition-opacity"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
              , _jsxDEV('div', { className: "p-6", children: [
                _jsxDEV('div', { className: "flex items-center gap-3 mb-4"   , children: [
                  _jsxDEV('div', { className: `flex h-11 w-11 items-center justify-center rounded-xl ${colorClass} transition-transform group-hover:scale-110`, children: 
                    _jsxDEV(Icon, { className: "h-5 w-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
                  , _jsxDEV('div', { children: [
                    _jsxDEV('h3', { className: "font-display font-semibold text-foreground"  , children: p.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)
                    , _jsxDEV('span', { className: "text-[11px] text-muted-foreground font-semibold uppercase tracking-wide"    , children: p.type}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 41}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 37}, this)
                , _jsxDEV('p', { className: "text-sm text-muted-foreground leading-relaxed"  , children: p.description}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
            ]}, p.id, true, {fileName: _jsxFileName, lineNumber: 34}, this)
          );
        })
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 18}, this)
  );
};

export default PartnersPage;
