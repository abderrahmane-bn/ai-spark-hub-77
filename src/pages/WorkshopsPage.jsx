const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { useState, useMemo } from "react";
import { Search, Filter, Calendar } from "lucide-react";
import WorkshopCard from "@/components/WorkshopCard";
import { workshops, topics, departments } from "@/data/mockData";

const WorkshopsPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [deptFilter, setDeptFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const [audienceFilter, setAudienceFilter] = useState("all");

  const filtered = useMemo(() => {
    return workshops.filter((w) => {
      if (search && !w.title.toLowerCase().includes(search.toLowerCase()) && !w.description.toLowerCase().includes(search.toLowerCase())) return false;
      if (statusFilter !== "all" && w.status !== statusFilter) return false;
      if (deptFilter !== "all" && w.department !== deptFilter) return false;
      if (topicFilter !== "all" && w.topic !== topicFilter) return false;
      if (audienceFilter !== "all" && w.targetAudience !== audienceFilter) return false;
      return true;
    });
  }, [search, statusFilter, deptFilter, topicFilter, audienceFilter]);

  const selectClass = "rounded-xl border border-border/60 bg-card px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-colors";

  return (
    _jsxDEV('div', { className: "container py-12" , children: [
      _jsxDEV('div', { className: "flex items-center gap-3 mb-2"   , children: [
        _jsxDEV('div', { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"      , children: 
          _jsxDEV(Calendar, { className: "h-5 w-5 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
        , _jsxDEV('h1', { className: "font-display text-3xl font-bold text-foreground"   , children: "Workshops & Activities"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 28}, this)
      , _jsxDEV('p', { className: "text-muted-foreground mb-8 ml-[52px]"  , children: "Browse, filter, and register for AI training sessions across all departments."          }, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this)

      /* Filters */
      , _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-4 mb-8 shadow-card"      , children: 
        _jsxDEV('div', { className: "flex flex-col md:flex-row gap-3"   , children: [
          _jsxDEV('div', { className: "relative flex-1" , children: [
            _jsxDEV(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )
            , _jsxDEV('input', {
              type: "text",
              placeholder: "Search workshops..." ,
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "w-full rounded-xl border border-border/60 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-colors"              ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 39}, this)
          , _jsxDEV('select', { value: statusFilter, onChange: (e) => setStatusFilter(e.target.value), className: selectClass, children: [
            _jsxDEV('option', { value: "all", children: "All Status" }, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
            , _jsxDEV('option', { value: "upcoming", children: "Upcoming"}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
            , _jsxDEV('option', { value: "past", children: "Past"}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)
          , _jsxDEV('select', { value: deptFilter, onChange: (e) => setDeptFilter(e.target.value), className: selectClass, children: [
            _jsxDEV('option', { value: "all", children: "All Departments" }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
            , departments.map((d) => (
              _jsxDEV('option', { value: d.name, children: d.name}, d.id, false, {fileName: _jsxFileName, lineNumber: 57}, this)
            ))
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
          , _jsxDEV('select', { value: topicFilter, onChange: (e) => setTopicFilter(e.target.value), className: selectClass, children: [
            _jsxDEV('option', { value: "all", children: "All Topics" }, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this)
            , topics.map((t) => (
              _jsxDEV('option', { value: t, children: t}, t, false, {fileName: _jsxFileName, lineNumber: 63}, this)
            ))
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 60}, this)
          , _jsxDEV('select', { value: audienceFilter, onChange: (e) => setAudienceFilter(e.target.value), className: selectClass, children: [
            _jsxDEV('option', { value: "all", children: "All Audiences" }, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this)
            , _jsxDEV('option', { value: "representatives", children: "Representatives"}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
            , _jsxDEV('option', { value: "students", children: "Students"}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)
            , _jsxDEV('option', { value: "public", children: "General Public" }, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 66}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)

      , _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
        _jsxDEV(Filter, { className: "h-3.5 w-3.5 text-muted-foreground"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 76}, this )
        , _jsxDEV('span', { className: "text-sm text-muted-foreground font-medium"  , children: [filtered.length, " activities found"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 77}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 75}, this)

      , filtered.length === 0 ? (
        _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-16 text-center shadow-card"      , children: 
          _jsxDEV('p', { className: "text-muted-foreground", children: "No workshops match your filters. Try adjusting your search criteria."         }, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 81}, this)
      ) : (
        _jsxDEV('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"   , children: 
          filtered.map((w) => (
            _jsxDEV(WorkshopCard, { workshop: w,}, w.id, false, {fileName: _jsxFileName, lineNumber: 87}, this )
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this)
      )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)
  );
};

export default WorkshopsPage;
