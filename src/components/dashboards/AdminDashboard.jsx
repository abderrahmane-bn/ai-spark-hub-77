const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { useAuth } from "@/lib/auth";
import { workshops, representatives, departments } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrainingHeatmap from "@/components/TrainingHeatmap";
import { BadgeCheck, BookOpen, Building2, Check, GraduationCap, ShieldCheck, UserCog, Users, X } from "lucide-react";
import { toast } from "sonner";

const AdminDashboard = () => {
  const { users, approveRep, rejectRep } = useAuth();

  const pendingReps = users.filter((u) => u.repStatus === "pending");
  const approvedReps = users.filter((u) => u.role === "representative");
  const studentUsers = users.filter((u) => u.role === "student" && u.repStatus !== "pending");

  const totalWorkshops = workshops.length;
  const totalUpcoming = workshops.filter((w) => w.status === "upcoming").length;
  const totalParticipants = workshops.reduce((s, w) => s + w.enrolled, 0);

  return (
    _jsxDEV('div', { className: "space-y-10", children: [
      _jsxDEV('header', { children: [
        _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
          _jsxDEV(ShieldCheck, { className: "h-5 w-5 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this )
          , _jsxDEV('p', { className: "text-sm font-medium text-primary uppercase tracking-wider"    , children: "Admin dashboard" }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)
        , _jsxDEV('h1', { className: "font-display text-3xl md:text-4xl font-bold mt-1"    , children: "Platform overview" }, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this)
        , _jsxDEV('p', { className: "text-muted-foreground mt-1" , children: "Monitor activity, manage representatives and review applications."      }, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 22}, this)

      , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4"   , children: [
        _jsxDEV(StatTile, { icon: BookOpen, label: "Total sessions" , value: totalWorkshops, accent: "bg-primary/10 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this )
        , _jsxDEV(StatTile, { icon: GraduationCap, label: "Upcoming", value: totalUpcoming, accent: "bg-accent/10 text-accent" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this )
        , _jsxDEV(StatTile, { icon: Users, label: "Trained participants" , value: totalParticipants, accent: "bg-success/10 text-success" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this )
        , _jsxDEV(StatTile, { icon: Building2, label: "Departments", value: departments.length, accent: "bg-warning/10 text-warning" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)

      , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-4"   , children: [
        _jsxDEV(UserStatTile, { icon: UserCog, label: "Active representatives" , value: approvedReps.length + representatives.filter((r) => r.validated).length, hint: "Including seeded faculty"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this )
        , _jsxDEV(UserStatTile, { icon: GraduationCap, label: "Registered students" , value: studentUsers.length, hint: "Sign-ups via the app"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )
        , _jsxDEV(UserStatTile, { icon: BadgeCheck, label: "Pending applications" , value: pendingReps.length, hint: "Awaiting your review"  , highlight: pendingReps.length > 0,}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)

      , _jsxDEV('section', { children: [
        _jsxDEV('div', { className: "mb-4", children: [
          _jsxDEV('h2', { className: "font-display text-xl font-bold"  , children: "Representative applications" }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-0.5"  , children: "Approve or reject pending requests."    }, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
        , _jsxDEV(Card, { className: "overflow-hidden", children: 
          pendingReps.length === 0 ? (
            _jsxDEV('div', { className: "p-10 text-center text-sm text-muted-foreground"   , children: "No pending applications right now."    }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
          ) : (
            _jsxDEV('div', { className: "divide-y divide-border" , children: 
              pendingReps.map((u) => (
                _jsxDEV('div', { className: "p-5 flex flex-col md:flex-row md:items-center gap-4"     , children: [
                  _jsxDEV('div', { className: "flex-1 min-w-0" , children: [
                    _jsxDEV('div', { className: "font-semibold", children: u.fullName}, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this)
                    , _jsxDEV('div', { className: "text-sm text-muted-foreground" , children: u.email}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this)
                    , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-1"  , children: [
                      u.department, " · "  , u.aiFocus
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 59}, this)
                    , u.bio && _jsxDEV('p', { className: "text-sm mt-2 text-foreground/80"  , children: u.bio}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 56}, this)
                  , _jsxDEV('div', { className: "flex gap-2" , children: [
                    _jsxDEV(Button, {
                      size: "sm",
                      onClick: () => {
                        approveRep(u.id);
                        toast.success(`${u.fullName} approved as representative`);
                      },
 children: [
                      _jsxDEV(Check, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this ), " Approve"
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 65}, this)
                    , _jsxDEV(Button, {
                      size: "sm",
                      variant: "outline",
                      onClick: () => {
                        rejectRep(u.id);
                        toast.message(`${u.fullName} rejected`);
                      },
 children: [
                      _jsxDEV(X, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this ), " Reject"
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 74}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 64}, this)
                ]}, u.id, true, {fileName: _jsxFileName, lineNumber: 55}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
          )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)

      , _jsxDEV('section', { children: [
        _jsxDEV('div', { className: "mb-4", children: [
          _jsxDEV('h2', { className: "font-display text-xl font-bold"  , children: "Training activity by department"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 94}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-0.5"  , children: "Where AI literacy is growing fastest."     }, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 93}, this)
        , _jsxDEV(TrainingHeatmap, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 92}, this)

      , _jsxDEV('section', { children: [
        _jsxDEV('div', { className: "mb-4", children: [
          _jsxDEV('h2', { className: "font-display text-xl font-bold"  , children: "Registered users" }, void 0, false, {fileName: _jsxFileName, lineNumber: 102}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-0.5"  , children: "All accounts created on the platform."     }, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 101}, this)
        , _jsxDEV(Card, { className: "overflow-hidden", children: 
          _jsxDEV('div', { className: "overflow-x-auto", children: 
            _jsxDEV('table', { className: "w-full text-sm" , children: [
              _jsxDEV('thead', { className: "bg-muted/50 text-muted-foreground" , children: 
                _jsxDEV('tr', { children: [
                  _jsxDEV('th', { className: "text-left font-medium px-4 py-3"   , children: "Name"}, void 0, false, {fileName: _jsxFileName, lineNumber: 110}, this)
                  , _jsxDEV('th', { className: "text-left font-medium px-4 py-3"   , children: "Email"}, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this)
                  , _jsxDEV('th', { className: "text-left font-medium px-4 py-3"   , children: "Role"}, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this)
                  , _jsxDEV('th', { className: "text-left font-medium px-4 py-3"   , children: "Status"}, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 109}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this)
              , _jsxDEV('tbody', { className: "divide-y divide-border" , children: 
                users.map((u) => (
                  _jsxDEV('tr', { children: [
                    _jsxDEV('td', { className: "px-4 py-3 font-medium"  , children: u.fullName}, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this)
                    , _jsxDEV('td', { className: "px-4 py-3 text-muted-foreground"  , children: u.email}, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this)
                    , _jsxDEV('td', { className: "px-4 py-3 capitalize"  , children: u.role}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
                    , _jsxDEV('td', { className: "px-4 py-3" , children: 
                      _jsxDEV(RoleBadge, { status: u.repStatus, role: u.role,}, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this )
                    }, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
                  ]}, u.id, true, {fileName: _jsxFileName, lineNumber: 118}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 105}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 100}, this)
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
      _jsxDEV(Icon, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this )
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)
    , _jsxDEV('div', { className: "font-display text-3xl font-bold"  , children: value}, void 0, false, {fileName: _jsxFileName, lineNumber: 151}, this)
    , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-1 font-medium"   , children: label}, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this)
  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 147}, this)
);

const UserStatTile = ({
  icon: Icon,
  label,
  value,
  hint,
  highlight,
}





) => (
  _jsxDEV(Card, { className: `p-5 ${highlight ? "border-warning/50 bg-warning/5" : ""}`, children: 
    _jsxDEV('div', { className: "flex items-start justify-between"  , children: [
      _jsxDEV('div', { children: [
        _jsxDEV('div', { className: "text-xs text-muted-foreground font-medium uppercase tracking-wider"    , children: label}, void 0, false, {fileName: _jsxFileName, lineNumber: 172}, this)
        , _jsxDEV('div', { className: "font-display text-3xl font-bold mt-2"   , children: value}, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this)
        , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-1"  , children: hint}, void 0, false, {fileName: _jsxFileName, lineNumber: 174}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 171}, this)
      , _jsxDEV('div', { className: "h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center"       , children: 
        _jsxDEV(Icon, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 177}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 176}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 170}, this)
  }, void 0, false, {fileName: _jsxFileName, lineNumber: 169}, this)
);

const RoleBadge = ({ status, role }) => {
  if (role === "admin")
    return _jsxDEV('span', { className: "inline-flex items-center rounded-full bg-primary/10 text-primary text-xs px-2 py-0.5 font-medium"        , children: "Admin"}, void 0, false, {fileName: _jsxFileName, lineNumber: 185}, this);
  if (status === "pending")
    return _jsxDEV('span', { className: "inline-flex items-center rounded-full bg-warning/15 text-warning text-xs px-2 py-0.5 font-medium"        , children: "Pending"}, void 0, false, {fileName: _jsxFileName, lineNumber: 187}, this);
  if (status === "rejected")
    return _jsxDEV('span', { className: "inline-flex items-center rounded-full bg-destructive/10 text-destructive text-xs px-2 py-0.5 font-medium"        , children: "Rejected"}, void 0, false, {fileName: _jsxFileName, lineNumber: 189}, this);
  if (status === "approved")
    return _jsxDEV('span', { className: "inline-flex items-center rounded-full bg-success/10 text-success text-xs px-2 py-0.5 font-medium"        , children: "Approved"}, void 0, false, {fileName: _jsxFileName, lineNumber: 191}, this);
  return _jsxDEV('span', { className: "inline-flex items-center rounded-full bg-muted text-muted-foreground text-xs px-2 py-0.5 font-medium"        , children: "Student"}, void 0, false, {fileName: _jsxFileName, lineNumber: 192}, this);
};

export default AdminDashboard;
