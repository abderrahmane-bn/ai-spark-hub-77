const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { useState, useMemo } from "react";
import { Search, Users } from "lucide-react";
import RepresentativeCard from "@/components/RepresentativeCard";
import { representatives, departments, topics } from "@/data/mockData";

const RepresentativesPage = () => {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");
  const [focusFilter, setFocusFilter] = useState("all");
  const [validFilter, setValidFilter] = useState("all");

  const filtered = useMemo(() => {
    return representatives.filter((r) => {
      if (search && !r.fullName.toLowerCase().includes(search.toLowerCase())) return false;
      if (deptFilter !== "all" && r.department !== deptFilter) return false;
      if (focusFilter !== "all" && r.aiFocus !== focusFilter) return false;
      if (validFilter === "validated" && !r.validated) return false;
      if (validFilter === "training" && r.validated) return false;
      return true;
    });
  }, [search, deptFilter, focusFilter, validFilter]);

  const selectClass = "rounded-xl border border-border/60 bg-card px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-colors";

  return (
    _jsxDEV('div', { className: "container py-12" , children: [
      _jsxDEV('div', { className: "flex items-center gap-3 mb-2"   , children: [
        _jsxDEV('div', { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10"      , children: 
          _jsxDEV(Users, { className: "h-5 w-5 text-accent"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this)
        , _jsxDEV('h1', { className: "font-display text-3xl font-bold text-foreground"   , children: "AI Representative Network"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)
      , _jsxDEV('p', { className: "text-muted-foreground mb-8 ml-[52px]"  , children: "Faculty members leading the AI transition within their departments at the University of Blida 1."              }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)

      , _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-4 mb-8 shadow-card"      , children: 
        _jsxDEV('div', { className: "flex flex-col md:flex-row gap-3"   , children: [
          _jsxDEV('div', { className: "relative flex-1" , children: [
            _jsxDEV(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this )
            , _jsxDEV('input', {
              type: "text",
              placeholder: "Search by name..."  ,
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "w-full rounded-xl border border-border/60 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-colors"              ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 37}, this)
          , _jsxDEV('select', { value: deptFilter, onChange: (e) => setDeptFilter(e.target.value), className: selectClass, children: [
            _jsxDEV('option', { value: "all", children: "All Departments" }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
            , departments.map((d) => (
              _jsxDEV('option', { value: d.name, children: d.name}, d.id, false, {fileName: _jsxFileName, lineNumber: 50}, this)
            ))
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 47}, this)
          , _jsxDEV('select', { value: focusFilter, onChange: (e) => setFocusFilter(e.target.value), className: selectClass, children: [
            _jsxDEV('option', { value: "all", children: "All AI Focus"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)
            , topics.map((t) => (
              _jsxDEV('option', { value: t, children: t}, t, false, {fileName: _jsxFileName, lineNumber: 56}, this)
            ))
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)
          , _jsxDEV('select', { value: validFilter, onChange: (e) => setValidFilter(e.target.value), className: selectClass, children: [
            _jsxDEV('option', { value: "all", children: "All Status" }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
            , _jsxDEV('option', { value: "validated", children: "Validated"}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this)
            , _jsxDEV('option', { value: "training", children: "In Training" }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 59}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)

      , _jsxDEV('p', { className: "text-sm text-muted-foreground mb-5 font-medium"   , children: [filtered.length, " representatives found"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 67}, this)

      , _jsxDEV('div', { className: "grid md:grid-cols-2 gap-5"  , children: 
        filtered.map((r) => (
          _jsxDEV(RepresentativeCard, { rep: r,}, r.id, false, {fileName: _jsxFileName, lineNumber: 71}, this )
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 26}, this)
  );
};

export default RepresentativesPage;
