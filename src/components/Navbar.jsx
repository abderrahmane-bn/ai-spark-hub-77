const _jsxFileName = "";import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "react/jsx-dev-runtime";import { Link, useLocation, useNavigate } from "react-router-dom";
import { Brain, Calendar, Users, BookOpen, Handshake, Menu, X, LayoutDashboard, LogOut, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home", icon: Brain },
  { to: "/workshops", label: "Workshops", icon: Calendar },
  { to: "/representatives", label: "Network", icon: Users },
  { to: "/resources", label: "Resources", icon: BookOpen },
  { to: "/partners", label: "Partners", icon: Handshake },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const roleLabel = user?.role === "admin" ? "Admin" : user?.role === "representative" ? "Representative" : "Student";

  return (
    _jsxDEV('nav', {
      className: `sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/50 shadow-card"
          : "bg-transparent border-b border-transparent"
      }`,
 children: [
      _jsxDEV('div', { className: "container flex h-16 items-center justify-between"    , children: [
        _jsxDEV(Link, { to: "/", className: "flex items-center gap-2.5 group"   , children: [
          _jsxDEV('div', { className: "flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-glow transition-transform group-hover:scale-110"         , children: 
            _jsxDEV(Brain, { className: "h-5 w-5 text-primary-foreground"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
          , _jsxDEV('div', { className: "flex flex-col" , children: [
            _jsxDEV('span', { className: "font-display text-base font-bold tracking-tight text-foreground leading-tight"     , children: "AI House"

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)
            , _jsxDEV('span', { className: "text-[10px] font-medium text-muted-foreground leading-none tracking-wider uppercase"     , children: "Blida 1"

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 48}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)

        /* Desktop nav */
        , _jsxDEV('div', { className: "hidden md:flex items-center gap-0.5 rounded-xl bg-muted/60 p-1"      , children: 
          navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              _jsxDEV(Link, {

                to: item.to,
                className: `flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-card text-foreground shadow-card"
                    : "text-muted-foreground hover:text-foreground"
                }`,
 children: [
                _jsxDEV(item.icon, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this )
                , item.label
              ]}, item.to, true, {fileName: _jsxFileName, lineNumber: 63}, this)
            );
          })
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)

        /* Desktop auth */
        , _jsxDEV('div', { className: "hidden md:flex items-center gap-2"   , children: 
          user ? (
            _jsxDEV(_Fragment, { children: [
              _jsxDEV(Link, {
                to: "/dashboard",
                className: "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition"          ,
 children: [
                _jsxDEV(LayoutDashboard, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this )
                , _jsxDEV('span', { className: "hidden lg:inline" , children: "Dashboard"}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 83}, this)
              , _jsxDEV('div', { className: "flex items-center gap-2 rounded-xl border border-border/60 bg-card px-2.5 py-1.5"        , children: [
                _jsxDEV('div', { className: "h-7 w-7 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground text-xs font-semibold"         , children: 
                  user.fullName.charAt(0)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
                , _jsxDEV('div', { className: "hidden lg:block leading-tight"  , children: [
                  _jsxDEV('div', { className: "text-xs font-semibold" , children: user.fullName.split(" ")[0]}, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this)
                  , _jsxDEV('div', { className: "text-[10px] text-muted-foreground uppercase tracking-wider"   , children: roleLabel}, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 94}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 90}, this)
              , _jsxDEV(Button, { variant: "ghost", size: "icon", onClick: handleLogout, title: "Sign out" , children: 
                _jsxDEV(LogOut, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 99}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 82}, this)
          ) : (
            _jsxDEV(_Fragment, { children: [
              _jsxDEV(Button, { asChild: true, variant: "ghost", size: "sm", children: 
                _jsxDEV(Link, { to: "/login", children: [
                  _jsxDEV(LogIn, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this ), "Sign in"

                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 105}, this)
              , _jsxDEV(Button, { asChild: true, size: "sm", children: 
                _jsxDEV(Link, { to: "/signup", children: "Sign up" }, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 104}, this)
          )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this)

        /* Mobile toggle */
        , _jsxDEV('button', {
          className: "md:hidden p-2 rounded-xl hover:bg-muted transition-colors"    ,
          onClick: () => setMobileOpen(!mobileOpen),
 children: 
          mobileOpen ? _jsxDEV(X, { className: "h-5 w-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this ) : _jsxDEV(Menu, { className: "h-5 w-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)

      /* Mobile menu */
      , mobileOpen && (
        _jsxDEV('div', { className: "md:hidden glass border-t border-border/50 p-3 space-y-0.5"     , children: [
          navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              _jsxDEV(Link, {

                to: item.to,
                onClick: () => setMobileOpen(false),
                className: `flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`,
 children: [
                _jsxDEV(item.icon, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 143}, this )
                , item.label
              ]}, item.to, true, {fileName: _jsxFileName, lineNumber: 133}, this)
            );
          })
          , _jsxDEV('div', { className: "border-t border-border/50 mt-2 pt-2 space-y-0.5"    , children: 
            user ? (
              _jsxDEV(_Fragment, { children: [
                _jsxDEV(Link, {
                  to: "/dashboard",
                  onClick: () => setMobileOpen(false),
                  className: "flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted"         ,
 children: [
                  _jsxDEV(LayoutDashboard, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 156}, this ), "Dashboard ("
                   , roleLabel, ")"
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 151}, this)
                , _jsxDEV('button', {
                  onClick: () => {
                    handleLogout();
                    setMobileOpen(false);
                  },
                  className: "w-full flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted"          ,
 children: [
                  _jsxDEV(LogOut, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 166}, this ), "Sign out"

                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 159}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 150}, this)
            ) : (
              _jsxDEV(_Fragment, { children: [
                _jsxDEV(Link, {
                  to: "/login",
                  onClick: () => setMobileOpen(false),
                  className: "flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted"        ,
 children: [
                  _jsxDEV(LogIn, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 177}, this ), "Sign in"

                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 172}, this)
                , _jsxDEV(Link, {
                  to: "/signup",
                  onClick: () => setMobileOpen(false),
                  className: "flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium text-primary hover:bg-primary/10"         ,
 children: "Sign up"

                }, void 0, false, {fileName: _jsxFileName, lineNumber: 180}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 171}, this)
            )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 129}, this)
      )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
  );
};

export default Navbar;
