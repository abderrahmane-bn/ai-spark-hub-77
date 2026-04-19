const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Calendar, BookOpen, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import StatsBar from "@/components/StatsBar";
import TrainingHeatmap from "@/components/TrainingHeatmap";
import WorkshopCard from "@/components/WorkshopCard";
import RepresentativeCard from "@/components/RepresentativeCard";
import { workshops, representatives, partners } from "@/data/mockData";

const Index = () => {
  const upcomingWorkshops = workshops.filter((w) => w.status === "upcoming").slice(0, 3);
  const featuredReps = representatives.filter((r) => r.validated).slice(0, 3);

  return (
    _jsxDEV('div', { className: "min-h-screen", children: [
      /* Hero */
      _jsxDEV('section', { className: "relative overflow-hidden gradient-navy min-h-[520px] flex items-center"     , children: [
        _jsxDEV('img', {
          src: heroBanner,
          alt: "AI Neural Network"  ,
          className: "absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen"      ,
          width: 1920,
          height: 800,}, void 0, false, {fileName: _jsxFileName, lineNumber: 18}, this
        )
        /* Decorative orbs */
        , _jsxDEV('div', { className: "absolute top-20 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"       ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
        , _jsxDEV('div', { className: "absolute bottom-10 left-1/4 w-64 h-64 bg-accent/15 rounded-full blur-[80px]"       ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this )

        , _jsxDEV('div', { className: "relative container py-20 md:py-28"   , children: 
          _jsxDEV('div', { className: "max-w-2xl", children: [
            _jsxDEV('div', { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 mb-6 animate-fade-in"             , children: [
              _jsxDEV(Sparkles, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this ), "University of Blida 1"

            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
            , _jsxDEV('h1', { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground mb-6 leading-[1.1] animate-fade-in"        , style: { animationDelay: "100ms" }, children: ["AI House"

              , _jsxDEV('span', { className: "block text-gradient mt-1"  , children: "Training Hub" }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 35}, this)
            , _jsxDEV('p', { className: "text-lg text-navy-foreground/60 mb-10 max-w-lg leading-relaxed animate-fade-in"     , style: { animationDelay: "200ms" }, children: "Spreading AI literacy across every department. From workshops to hackathons, we empower faculty and students to harness the power of artificial intelligence."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this)
            , _jsxDEV('div', { className: "flex flex-wrap gap-3 animate-fade-in"   , style: { animationDelay: "300ms" }, children: [
              _jsxDEV(Link, {
                to: "/workshops",
                className: "inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-lg"             ,
 children: [
                _jsxDEV(Calendar, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this ), "Browse Workshops"

                , _jsxDEV(ArrowRight, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
              , _jsxDEV(Link, {
                to: "/representatives",
                className: "inline-flex items-center gap-2 rounded-xl border border-navy-foreground/20 bg-navy-foreground/5 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy-foreground/10 hover:border-navy-foreground/30"              ,
 children: [
                _jsxDEV(Users, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this ), "Meet the Network"

              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 42}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 30}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 17}, this)

      /* Stats */
      , _jsxDEV('section', { className: "container -mt-10 relative z-10"   , children: 
        _jsxDEV(StatsBar, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)

      /* Vision */
      , _jsxDEV('section', { className: "container py-20" , children: [
        _jsxDEV('div', { className: "text-center mb-12" , children: [
          _jsxDEV('h2', { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-3"     , children: "Our Three Pillars"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this)
          , _jsxDEV('p', { className: "text-muted-foreground max-w-lg mx-auto"  , children: "A comprehensive ecosystem for AI education and collaboration"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 70}, this)
        , _jsxDEV('div', { className: "grid md:grid-cols-3 gap-5"  , children: 
          [
            {
              icon: Calendar,
              title: "Training Hub",
              desc: "A centralized database of all past and future workshops, seminars, and competitions with full scheduling.",
              color: "bg-primary/10 text-primary",
            },
            {
              icon: Users,
              title: "Human Network",
              desc: "Profiles of department representatives, instructors, and participants driving AI adoption across faculties.",
              color: "bg-accent/10 text-accent",
            },
            {
              icon: BookOpen,
              title: "Resource Library",
              desc: "Automated access to materials from past events — slides, code, and datasets available for download.",
              color: "bg-success/10 text-success",
            },
          ].map((item) => (
            _jsxDEV('div', {

              className: "group rounded-2xl border border-border/60 bg-card p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"          ,
 children: [
              _jsxDEV('div', { className: `inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color} mb-5 transition-transform group-hover:scale-110`, children: 
                _jsxDEV(item.icon, { className: "h-5 w-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)
              , _jsxDEV('h3', { className: "font-display text-lg font-semibold text-foreground mb-2"    , children: item.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
              , _jsxDEV('p', { className: "text-sm text-muted-foreground leading-relaxed"  , children: item.desc}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this)
            ]}, item.title, true, {fileName: _jsxFileName, lineNumber: 99}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 69}, this)

      /* Heatmap */
      , _jsxDEV('section', { className: "container pb-20" , children: 
        _jsxDEV(TrainingHeatmap, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 114}, this)

      /* Upcoming Workshops */
      , _jsxDEV('section', { className: "container pb-20" , children: [
        _jsxDEV('div', { className: "flex items-end justify-between mb-8"   , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "font-display text-2xl font-bold text-foreground mb-1"    , children: "Upcoming Workshops" }, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
            , _jsxDEV('p', { className: "text-sm text-muted-foreground" , children: "Register for the latest AI training sessions"      }, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 121}, this)
          , _jsxDEV(Link, { to: "/workshops", className: "text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"       , children: ["View all "
              , _jsxDEV(ArrowRight, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 125}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 120}, this)
        , _jsxDEV('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"   , children: 
          upcomingWorkshops.map((w) => (
            _jsxDEV(WorkshopCard, { workshop: w,}, w.id, false, {fileName: _jsxFileName, lineNumber: 131}, this )
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 119}, this)

      /* Featured Representatives */
      , _jsxDEV('section', { className: "container pb-20" , children: [
        _jsxDEV('div', { className: "flex items-end justify-between mb-8"   , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('h2', { className: "font-display text-2xl font-bold text-foreground mb-1"    , children: "Featured Representatives" }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
            , _jsxDEV('p', { className: "text-sm text-muted-foreground" , children: "Meet the faculty members leading AI adoption"      }, void 0, false, {fileName: _jsxFileName, lineNumber: 141}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 139}, this)
          , _jsxDEV(Link, { to: "/representatives", className: "text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"       , children: ["View all "
              , _jsxDEV(ArrowRight, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 144}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 143}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)
        , _jsxDEV('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"   , children: 
          featuredReps.map((r) => (
            _jsxDEV(RepresentativeCard, { rep: r,}, r.id, false, {fileName: _jsxFileName, lineNumber: 149}, this )
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 147}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 137}, this)

      /* Partners */
      , _jsxDEV('section', { className: "container pb-24" , children: [
        _jsxDEV('div', { className: "text-center mb-8" , children: [
          _jsxDEV('h2', { className: "font-display text-2xl font-bold text-foreground mb-2"    , children: "Partnership Grid" }, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground" , children: "Our collaborators in the AI literacy mission"      }, void 0, false, {fileName: _jsxFileName, lineNumber: 158}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 156}, this)
        , _jsxDEV('div', { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4"   , children: 
          partners.map((p) => (
            _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"         , children: [
              _jsxDEV('span', { className: "inline-flex items-center rounded-lg bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-3"           , children: 
                p.type
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 163}, this)
              , _jsxDEV('h4', { className: "font-display font-semibold text-foreground mb-1.5"   , children: p.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 166}, this)
              , _jsxDEV('p', { className: "text-xs text-muted-foreground leading-relaxed"  , children: p.description}, void 0, false, {fileName: _jsxFileName, lineNumber: 167}, this)
            ]}, p.id, true, {fileName: _jsxFileName, lineNumber: 162}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 160}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 155}, this)

      /* Footer */
      , _jsxDEV('footer', { className: "border-t border-border/60 bg-card/50"  , children: 
        _jsxDEV('div', { className: "container py-10 flex flex-col md:flex-row items-center justify-between gap-4"       , children: [
          _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
            _jsxDEV('div', { className: "flex h-7 w-7 items-center justify-center rounded-lg gradient-primary"      , children: 
              _jsxDEV(Zap, { className: "h-3.5 w-3.5 text-primary-foreground"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 178}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 177}, this)
            , _jsxDEV('span', { className: "text-sm font-semibold text-foreground font-display"   , children: "AI House Blida 1"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 180}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 176}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground" , children: "© 2026 AI House — University of Blida 1. Empowering AI literacy across departments."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 175}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 174}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 15}, this)
  );
};

export default Index;
