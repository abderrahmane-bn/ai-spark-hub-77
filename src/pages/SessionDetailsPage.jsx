const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Monitor,
  Users,
  Tag,
  CheckCircle2,
  ListChecks,
  GraduationCap,
  ArrowUpRight,
  Download,
  FileText,
  Video,
  Code2,
  Database,
  Presentation,
} from "lucide-react";
import { workshops, representatives } from "@/data/mockData";
import { useAuth } from "@/lib/auth";

const typeColors = {
  workshop: "bg-primary/10 text-primary",
  seminar: "bg-accent/10 text-accent",
  competition: "bg-warning/10 text-warning",
};

const audienceLabels = {
  representatives: "Department Representatives",
  students: "Students",
  public: "General Public",
};

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

const SessionDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, toggleEnrollment } = useAuth();
  const workshop = workshops.find((w) => w.id === id);

  if (!workshop) {
    return (
      _jsxDEV('div', { className: "container py-16 text-center"  , children: [
        _jsxDEV('p', { className: "text-muted-foreground mb-4" , children: "Session not found."  }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
        , _jsxDEV(Link, { to: "/workshops", className: "text-primary font-medium hover:underline"  , children: "← Back to all sessions"

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)
    );
  }

  const isPast = workshop.status === "past";
  const fillPercent = Math.round((workshop.enrolled / workshop.maxParticipants) * 100);
  const enrolled = user?.enrolledWorkshopIds.includes(workshop.id) ?? false;
  const rep = workshop.instructorId ? representatives.find((r) => r.id === workshop.instructorId) : undefined;
  const sessionResources =
    workshop.resources ??
    (workshop.resourceUrl
      ? [{ id: `${workshop.id}-legacy`, title: "Session materials", type: "pdf", url: workshop.resourceUrl, size: "—" }]
      : []);
  const hasResources = sessionResources.length > 0;

  const handleRegister = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    toggleEnrollment(workshop.id);
  };

  return (
    _jsxDEV('div', { className: "container py-12 max-w-6xl"  , children: [
      _jsxDEV(Link, {
        to: "/workshops",
        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"       ,
 children: [
        _jsxDEV(ArrowLeft, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this ), "Back to all sessions"

      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 91}, this)

      , _jsxDEV('div', { className: "grid lg:grid-cols-3 gap-6"  , children: [
        /* Main column */
        _jsxDEV('div', { className: "lg:col-span-2 space-y-6" , children: [
          /* Hero */
          _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card overflow-hidden shadow-card"     , children: [
            _jsxDEV('div', { className: "h-1.5 w-full gradient-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this )
            , _jsxDEV('div', { className: "p-6 sm:p-8" , children: [
              _jsxDEV('div', { className: "flex flex-wrap items-center gap-2 mb-4"    , children: [
                _jsxDEV('span', { className: `inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${typeColors[workshop.type]}`, children: 
                  workshop.type
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this)
                , _jsxDEV('span', { className: "flex items-center gap-1 text-[11px] text-muted-foreground font-medium"     , children: [
                  _jsxDEV(Tag, { className: "h-3 w-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this )
                  , workshop.topic
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 110}, this)
                , _jsxDEV('span', {
                  className: `inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold ${
                    isPast ? "bg-muted text-muted-foreground" : "bg-success/10 text-success"
                  }`,
 children: 
                  isPast ? "Completed" : "Upcoming"
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 114}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)

              , _jsxDEV('h1', { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight"      , children: 
                workshop.title
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
              , _jsxDEV('p', { className: "text-base text-muted-foreground leading-relaxed"  , children: workshop.description}, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)

              /* Meta grid */
              , _jsxDEV('div', { className: "grid sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-border/60"      , children: [
                _jsxDEV('div', { className: "flex items-start gap-3"  , children: [
                  _jsxDEV('div', { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 shrink-0"       , children: 
                    _jsxDEV(Calendar, { className: "h-4 w-4 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this)
                  , _jsxDEV('div', { children: [
                    _jsxDEV('div', { className: "text-[11px] uppercase text-muted-foreground font-semibold"   , children: "Date"}, void 0, false, {fileName: _jsxFileName, lineNumber: 135}, this)
                    , _jsxDEV('div', { className: "text-sm font-medium text-foreground"  , children: 
                      new Date(workshop.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 136}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 134}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 130}, this)
                , _jsxDEV('div', { className: "flex items-start gap-3"  , children: [
                  _jsxDEV('div', { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 shrink-0"       , children: 
                    _jsxDEV(Clock, { className: "h-4 w-4 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 143}, this )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 142}, this)
                  , _jsxDEV('div', { children: [
                    _jsxDEV('div', { className: "text-[11px] uppercase text-muted-foreground font-semibold"   , children: "Time"}, void 0, false, {fileName: _jsxFileName, lineNumber: 146}, this)
                    , _jsxDEV('div', { className: "text-sm font-medium text-foreground"  , children: workshop.time}, void 0, false, {fileName: _jsxFileName, lineNumber: 147}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 145}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 141}, this)
                , _jsxDEV('div', { className: "flex items-start gap-3"  , children: [
                  _jsxDEV('div', { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 shrink-0"       , children: 
                    workshop.location === "webinar" ? (
                      _jsxDEV(Monitor, { className: "h-4 w-4 text-accent"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 153}, this )
                    ) : (
                      _jsxDEV(MapPin, { className: "h-4 w-4 text-accent"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this )
                    )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 151}, this)
                  , _jsxDEV('div', { children: [
                    _jsxDEV('div', { className: "text-[11px] uppercase text-muted-foreground font-semibold"   , children: "Location"}, void 0, false, {fileName: _jsxFileName, lineNumber: 159}, this)
                    , _jsxDEV('div', { className: "text-sm font-medium text-foreground"  , children: 
                      workshop.location === "webinar" ? "Online Webinar" : workshop.venue
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 160}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 158}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 150}, this)
                , _jsxDEV('div', { className: "flex items-start gap-3"  , children: [
                  _jsxDEV('div', { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-muted shrink-0"       , children: 
                    _jsxDEV(Users, { className: "h-4 w-4 text-muted-foreground"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 167}, this )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 166}, this)
                  , _jsxDEV('div', { children: [
                    _jsxDEV('div', { className: "text-[11px] uppercase text-muted-foreground font-semibold"   , children: "Audience"}, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this)
                    , _jsxDEV('div', { className: "text-sm font-medium text-foreground"  , children: audienceLabels[workshop.targetAudience]}, void 0, false, {fileName: _jsxFileName, lineNumber: 171}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 169}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 165}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 129}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 105}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 103}, this)

          /* Agenda */
          , workshop.agenda && workshop.agenda.length > 0 && (
            _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-6 shadow-card"     , children: [
              _jsxDEV('div', { className: "flex items-center gap-2 mb-4"   , children: [
                _jsxDEV(ListChecks, { className: "h-5 w-5 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this )
                , _jsxDEV('h2', { className: "font-display text-lg font-semibold text-foreground"   , children: "Agenda"}, void 0, false, {fileName: _jsxFileName, lineNumber: 183}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 181}, this)
              , _jsxDEV('ul', { className: "space-y-3", children: 
                workshop.agenda.map((step, i) => (
                  _jsxDEV('li', { className: "flex gap-4 items-start"  , children: [
                    _jsxDEV('span', { className: "text-xs font-mono font-semibold text-primary bg-primary/10 rounded-md px-2 py-1 min-w-[60px] text-center"         , children: 
                      step.time
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 188}, this)
                    , _jsxDEV('span', { className: "text-sm text-foreground pt-1"  , children: step.item}, void 0, false, {fileName: _jsxFileName, lineNumber: 191}, this)
                  ]}, i, true, {fileName: _jsxFileName, lineNumber: 187}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 185}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 180}, this)
          )

          /* Prerequisites */
          , workshop.prerequisites && workshop.prerequisites.length > 0 && (
            _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-6 shadow-card"     , children: [
              _jsxDEV('div', { className: "flex items-center gap-2 mb-4"   , children: [
                _jsxDEV(CheckCircle2, { className: "h-5 w-5 text-success"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 202}, this )
                , _jsxDEV('h2', { className: "font-display text-lg font-semibold text-foreground"   , children: "Prerequisites"}, void 0, false, {fileName: _jsxFileName, lineNumber: 203}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 201}, this)
              , _jsxDEV('ul', { className: "space-y-2", children: 
                workshop.prerequisites.map((p, i) => (
                  _jsxDEV('li', { className: "flex items-start gap-2 text-sm text-muted-foreground"    , children: [
                    _jsxDEV('span', { className: "text-success mt-1" , children: "•"}, void 0, false, {fileName: _jsxFileName, lineNumber: 208}, this)
                    , _jsxDEV('span', { children: p}, void 0, false, {fileName: _jsxFileName, lineNumber: 209}, this)
                  ]}, i, true, {fileName: _jsxFileName, lineNumber: 207}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 205}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 200}, this)
          )

          /* Resources from the representative */
          , _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-6 shadow-card"     , children: [
            _jsxDEV('div', { className: "flex items-center justify-between mb-1"   , children: [
              _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                _jsxDEV(Download, { className: "h-5 w-5 text-success"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 220}, this )
                , _jsxDEV('h2', { className: "font-display text-lg font-semibold text-foreground"   , children: "Resources from the representative"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 221}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 219}, this)
              , hasResources && (
                _jsxDEV(Link, {
                  to: `/resources/${workshop.id}`,
                  className: "flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80"      ,
 children: ["View all"

                  , _jsxDEV(ArrowUpRight, { className: "h-3 w-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 229}, this )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 224}, this)
              )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 218}, this)
            , _jsxDEV('p', { className: "text-xs text-muted-foreground mb-4"  , children: ["Materials shared by "
                 , workshop.instructor, " for this session."
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 233}, this)

            , hasResources ? (
              _jsxDEV('div', { className: "grid sm:grid-cols-2 gap-3"  , children: 
                sessionResources.map((r) => {
                  const Icon = resourceIcon(r.type);
                  return (
                    _jsxDEV('div', {

                      className: "group rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:bg-muted/40 transition-all"       ,
 children: [
                      _jsxDEV('div', { className: "flex items-start gap-3"  , children: [
                        _jsxDEV('div', { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0"       , children: 
                          _jsxDEV(Icon, { className: "h-4 w-4 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 248}, this )
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 247}, this)
                        , _jsxDEV('div', { className: "min-w-0 flex-1" , children: [
                          _jsxDEV('div', { className: "flex items-center gap-2 mb-0.5"   , children: [
                            _jsxDEV('span', { className: "inline-flex items-center rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"          , children: 
                              r.type
                            }, void 0, false, {fileName: _jsxFileName, lineNumber: 252}, this)
                            , r.size && _jsxDEV('span', { className: "text-[10px] text-muted-foreground" , children: r.size}, void 0, false, {fileName: _jsxFileName, lineNumber: 255}, this)
                          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 251}, this)
                          , _jsxDEV('div', { className: "text-sm font-medium text-foreground leading-snug"   , children: r.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 257}, this)
                          , r.description && (
                            _jsxDEV('div', { className: "text-[11px] text-muted-foreground mt-1 leading-relaxed line-clamp-2"    , children: r.description}, void 0, false, {fileName: _jsxFileName, lineNumber: 259}, this)
                          )
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 250}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 246}, this)
                      , _jsxDEV('a', {
                        href: r.url,
                        download: true,
                        className: "mt-3 w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-3 py-1.5 text-[11px] font-semibold transition-all"               ,
 children: [
                        _jsxDEV(Download, { className: "h-3 w-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 268}, this ), "Download"

                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 263}, this)
                    ]}, r.id, true, {fileName: _jsxFileName, lineNumber: 242}, this)
                  );
                })
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 238}, this)
            ) : (
              _jsxDEV('div', { className: "rounded-xl border border-dashed border-border/60 p-6 text-center"     , children: 
                _jsxDEV('p', { className: "text-sm text-muted-foreground" , children: 
                  isPast
                    ? "No materials have been uploaded for this session yet."
                    : "Resources will be uploaded by the representative after the session."
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 277}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 276}, this)
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 217}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 101}, this)

        /* Side column */
        , _jsxDEV('div', { className: "space-y-6", children: [
          /* CTA card */
          _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-6 shadow-card sticky top-24"       , children: [
            _jsxDEV('div', { className: "mb-4", children: [
              _jsxDEV('div', { className: "flex justify-between text-xs mb-2"   , children: [
                _jsxDEV('span', { className: "text-muted-foreground font-medium" , children: "Enrollment"}, void 0, false, {fileName: _jsxFileName, lineNumber: 293}, this)
                , _jsxDEV('span', { className: "font-semibold text-foreground" , children: [
                  workshop.enrolled, "/", workshop.maxParticipants
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 294}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 292}, this)
              , _jsxDEV('div', { className: "h-2 rounded-full bg-muted overflow-hidden"   , children: 
                _jsxDEV('div', { className: "h-full rounded-full gradient-primary transition-all duration-500"    , style: { width: `${fillPercent}%` },}, void 0, false, {fileName: _jsxFileName, lineNumber: 299}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 298}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 291}, this)

            , !isPast ? (
              _jsxDEV('button', {
                onClick: handleRegister,
                className: `w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  enrolled
                    ? "bg-muted text-foreground hover:bg-muted/80"
                    : "gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02]"
                }`,
 children: [
                enrolled ? "Unregister" : "Register for this session"
                , !enrolled && _jsxDEV(ArrowUpRight, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 313}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 304}, this)
            ) : hasResources ? (
              _jsxDEV(Link, {
                to: `/resources/${workshop.id}`,
                className: "w-full flex items-center justify-center gap-2 rounded-xl gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-all"              ,
 children: [
                _jsxDEV(Download, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 320}, this ), "Open resource library"

              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 316}, this)
            ) : (
              _jsxDEV('div', { className: "text-center text-xs text-muted-foreground py-2"   , children: "This session has ended."   }, void 0, false, {fileName: _jsxFileName, lineNumber: 324}, this)
            )

            , _jsxDEV('div', { className: "mt-4 pt-4 border-t border-border/60 space-y-2 text-xs"     , children: [
              _jsxDEV('div', { className: "flex justify-between" , children: [
                _jsxDEV('span', { className: "text-muted-foreground", children: "Department"}, void 0, false, {fileName: _jsxFileName, lineNumber: 329}, this)
                , _jsxDEV('span', { className: "font-medium text-foreground" , children: workshop.department}, void 0, false, {fileName: _jsxFileName, lineNumber: 330}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 328}, this)
              , _jsxDEV('div', { className: "flex justify-between" , children: [
                _jsxDEV('span', { className: "text-muted-foreground", children: "Topic"}, void 0, false, {fileName: _jsxFileName, lineNumber: 333}, this)
                , _jsxDEV('span', { className: "font-medium text-foreground" , children: workshop.topic}, void 0, false, {fileName: _jsxFileName, lineNumber: 334}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 332}, this)
              , _jsxDEV('div', { className: "flex justify-between" , children: [
                _jsxDEV('span', { className: "text-muted-foreground", children: "Format"}, void 0, false, {fileName: _jsxFileName, lineNumber: 337}, this)
                , _jsxDEV('span', { className: "font-medium text-foreground capitalize"  , children: workshop.location === "webinar" ? "Online" : "In-person"}, void 0, false, {fileName: _jsxFileName, lineNumber: 338}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 336}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 327}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 290}, this)

          /* Instructor card */
          , _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-6 shadow-card"     , children: [
            _jsxDEV('div', { className: "flex items-center gap-2 mb-4"   , children: [
              _jsxDEV(GraduationCap, { className: "h-5 w-5 text-accent"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 346}, this )
              , _jsxDEV('h2', { className: "font-display text-sm font-semibold text-foreground uppercase tracking-wide"     , children: "Led by" }, void 0, false, {fileName: _jsxFileName, lineNumber: 347}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 345}, this)
            , _jsxDEV('div', { className: "flex items-start gap-3"  , children: [
              _jsxDEV('div', { className: "flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-primary-foreground font-display font-bold shrink-0"          , children: 
                workshop.instructor
                  .split(" ")
                  .filter((p) => !p.endsWith("."))
                  .slice(0, 2)
                  .map((p) => p[0])
                  .join("")
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 350}, this)
              , _jsxDEV('div', { className: "min-w-0", children: [
                _jsxDEV('div', { className: "font-display font-semibold text-foreground text-sm"   , children: workshop.instructor}, void 0, false, {fileName: _jsxFileName, lineNumber: 359}, this)
                , rep && _jsxDEV('div', { className: "text-xs text-muted-foreground mt-0.5"  , children: rep.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 360}, this)
                , rep && (
                  _jsxDEV(Link, {
                    to: "/representatives",
                    className: "inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 mt-2"       ,
 children: ["View profile"

                    , _jsxDEV(ArrowUpRight, { className: "h-3 w-3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 367}, this )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 362}, this)
                )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 358}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 349}, this)
            , rep?.bio && _jsxDEV('p', { className: "text-xs text-muted-foreground mt-4 leading-relaxed"   , children: rep.bio}, void 0, false, {fileName: _jsxFileName, lineNumber: 372}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 344}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 288}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 99}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 90}, this)
  );
};

export default SessionDetailsPage;
