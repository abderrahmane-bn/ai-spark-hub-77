const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download, FileText, Video, Code2, Database, Presentation, Calendar, ArrowUpRight } from "lucide-react";
import { workshops } from "@/data/mockData";

const resourceIcon = (type) => {
  switch (type) {
    case "pdf":
      return FileText;
    case "slides":
      return Presentation;
    case "video":
      return Video;
    case "code":
      return Code2;
    case "dataset":
      return Database;
    default:
      return FileText;
  }
};

const typeBadge = {
  pdf: "bg-primary/10 text-primary",
  slides: "bg-accent/10 text-accent",
  video: "bg-warning/10 text-warning",
  code: "bg-success/10 text-success",
  dataset: "bg-muted text-muted-foreground",
};

const ResourceDetailsPage = () => {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === id);

  if (!workshop) {
    return (
      _jsxDEV('div', { className: "container py-16 text-center"  , children: [
        _jsxDEV('p', { className: "text-muted-foreground mb-4" , children: "Resource set not found."   }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
        , _jsxDEV(Link, { to: "/resources", className: "text-primary font-medium hover:underline"  , children: "← Back to resource library"

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
    );
  }

  const resources =
    workshop.resources ??
    (workshop.resourceUrl
      ? [{ id: `${workshop.id}-legacy`, title: "Session materials", type: "pdf", url: workshop.resourceUrl, size: "—" }]
      : []);

  return (
    _jsxDEV('div', { className: "container py-12 max-w-5xl"  , children: [
      _jsxDEV(Link, {
        to: "/resources",
        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"       ,
 children: [
        _jsxDEV(ArrowLeft, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this ), "Back to resource library"

      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)

      /* Header card */
      , _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card overflow-hidden shadow-card mb-6"      , children: [
        _jsxDEV('div', { className: "h-1.5 w-full gradient-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this )
        , _jsxDEV('div', { className: "p-6 sm:p-8" , children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-3 text-xs text-muted-foreground"     , children: [
            _jsxDEV('span', { className: "font-semibold uppercase tracking-wide text-primary"   , children: workshop.department}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
            , _jsxDEV('span', { children: "•"}, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this)
            , _jsxDEV('span', { children: workshop.topic}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 65}, this)
          , _jsxDEV('h1', { className: "font-display text-3xl font-bold text-foreground mb-3"    , children: workshop.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
          , _jsxDEV('p', { className: "text-muted-foreground leading-relaxed mb-4"  , children: workshop.description}, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this)
          , _jsxDEV('div', { className: "flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/60"        , children: [
            _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [
              _jsxDEV(Calendar, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this )
              , new Date(workshop.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 73}, this)
            , _jsxDEV('span', { children: ["by "
               , _jsxDEV('span', { className: "font-medium text-foreground" , children: workshop.instructor}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 77}, this)
            , _jsxDEV(Link, {
              to: `/sessions/${workshop.id}`,
              className: "ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80"       ,
 children: ["View session details"

              , _jsxDEV(ArrowUpRight, { className: "h-3 w-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 80}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 72}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 64}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)

      /* Resources list */
      , _jsxDEV('div', { className: "flex items-center justify-between mb-4"   , children: 
        _jsxDEV('h2', { className: "font-display text-lg font-semibold text-foreground"   , children: [
          resources.length, " resource" , resources.length === 1 ? "" : "s", " available"
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 93}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this)

      , resources.length === 0 ? (
        _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-12 text-center shadow-card"      , children: 
          _jsxDEV('p', { className: "text-muted-foreground", children: "No downloadable materials are available for this session."       }, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 99}, this)
      ) : (
        _jsxDEV('div', { className: "grid sm:grid-cols-2 gap-4"  , children: 
          resources.map((r) => {
            const Icon = resourceIcon(r.type);
            return (
              _jsxDEV('div', {

                className: "group rounded-2xl border border-border/60 bg-card p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-300"           ,
 children: [
                _jsxDEV('div', { className: "flex items-start gap-4"  , children: [
                  _jsxDEV('div', { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0"       , children: 
                    _jsxDEV(Icon, { className: "h-5 w-5 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this)
                  , _jsxDEV('div', { className: "min-w-0 flex-1" , children: [
                    _jsxDEV('div', { className: "flex items-center gap-2 mb-1"   , children: [
                      _jsxDEV('span', { className: `inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${typeBadge[r.type]}`, children: 
                        r.type
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 117}, this)
                      , r.size && _jsxDEV('span', { className: "text-[11px] text-muted-foreground" , children: r.size}, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 116}, this)
                    , _jsxDEV('h3', { className: "font-display font-semibold text-foreground text-sm leading-snug"    , children: r.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
                    , r.description && _jsxDEV('p', { className: "text-xs text-muted-foreground mt-1 leading-relaxed"   , children: r.description}, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 115}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 111}, this)
                , _jsxDEV('a', {
                  href: r.url,
                  download: true,
                  className: "mt-4 w-full flex items-center justify-center gap-1.5 rounded-xl gradient-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"               ,
 children: [
                  _jsxDEV(Download, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this ), "Download"

                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 126}, this)
              ]}, r.id, true, {fileName: _jsxFileName, lineNumber: 107}, this)
            );
          })
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)
      )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)
  );
};

export default ResourceDetailsPage;
