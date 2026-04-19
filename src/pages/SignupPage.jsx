const _jsxFileName = "";import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "react/jsx-dev-runtime";import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { departments, topics } from "@/data/mockData";
import { toast } from "sonner";
import { GraduationCap, UserCog, UserPlus } from "lucide-react";

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    department: departments[0].name,
    aiFocus: topics[0],
    bio: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    const res = signup({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      password: form.password,
      role,
      department: role === "representative" ? form.department : undefined,
      aiFocus: role === "representative" ? form.aiFocus : undefined,
      bio: role === "representative" ? form.bio.trim() : undefined,
    });
    setLoading(false);
    if (!res.ok) {
      toast.error(res.error ?? "Sign up failed");
      return;
    }
    if (role === "representative") {
      toast.success("Account created! Awaiting admin approval — you can browse as a student meanwhile.");
    } else {
      toast.success("Welcome aboard!");
    }
    navigate("/dashboard");
  };

  return (
    _jsxDEV('div', { className: "container max-w-xl py-12"  , children: 
      _jsxDEV(Card, { className: "p-8 shadow-card-hover" , children: [
        _jsxDEV('div', { className: "flex flex-col items-center text-center mb-6"    , children: [
          _jsxDEV('div', { className: "h-12 w-12 rounded-2xl gradient-primary shadow-glow flex items-center justify-center mb-3"        , children: 
            _jsxDEV(UserPlus, { className: "h-5 w-5 text-primary-foreground"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
          , _jsxDEV('h1', { className: "font-display text-2xl font-bold"  , children: "Join AI House"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-1"  , children: "Create an account to register for workshops"      }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 59}, this)

        , _jsxDEV('div', { className: "grid grid-cols-2 gap-3 mb-6"   , children: [
          _jsxDEV('button', {
            type: "button",
            onClick: () => setRole("student"),
            className: `rounded-xl border p-4 text-left transition-all ${
              role === "student"
                ? "border-primary bg-primary/5 shadow-card"
                : "border-border hover:border-primary/40"
            }`,
 children: [
            _jsxDEV(GraduationCap, { className: "h-5 w-5 mb-2 text-primary"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this )
            , _jsxDEV('div', { className: "font-semibold text-sm" , children: "Student"}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this)
            , _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: "Attend workshops & seminars"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 68}, this)
          , _jsxDEV('button', {
            type: "button",
            onClick: () => setRole("representative"),
            className: `rounded-xl border p-4 text-left transition-all ${
              role === "representative"
                ? "border-primary bg-primary/5 shadow-card"
                : "border-border hover:border-primary/40"
            }`,
 children: [
            _jsxDEV(UserCog, { className: "h-5 w-5 mb-2 text-accent"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this )
            , _jsxDEV('div', { className: "font-semibold text-sm" , children: "Representative"}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
            , _jsxDEV('div', { className: "text-xs text-muted-foreground" , children: "Lead trainings (admin approval)"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 81}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 67}, this)

        , _jsxDEV('form', { onSubmit: onSubmit, className: "space-y-4", children: [
          _jsxDEV('div', { className: "space-y-2", children: [
            _jsxDEV(Label, { htmlFor: "fullName", children: "Full name" }, void 0, false, {fileName: _jsxFileName, lineNumber: 98}, this)
            , _jsxDEV(Input, {
              id: "fullName",
              required: true,
              value: form.fullName,
              onChange: (e) => setForm({ ...form, fullName: e.target.value }),}, void 0, false, {fileName: _jsxFileName, lineNumber: 99}, this
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 97}, this)
          , _jsxDEV('div', { className: "space-y-2", children: [
            _jsxDEV(Label, { htmlFor: "email", children: "Email"}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this)
            , _jsxDEV(Input, {
              id: "email",
              type: "email",
              required: true,
              value: form.email,
              onChange: (e) => setForm({ ...form, email: e.target.value }),}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)
          , _jsxDEV('div', { className: "space-y-2", children: [
            _jsxDEV(Label, { htmlFor: "password", children: "Password"}, void 0, false, {fileName: _jsxFileName, lineNumber: 117}, this)
            , _jsxDEV(Input, {
              id: "password",
              type: "password",
              required: true,
              minLength: 6,
              value: form.password,
              onChange: (e) => setForm({ ...form, password: e.target.value }),
              placeholder: "At least 6 characters"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 116}, this)

          , role === "representative" && (
            _jsxDEV(_Fragment, { children: [
              _jsxDEV('div', { className: "grid grid-cols-2 gap-3"  , children: [
                _jsxDEV('div', { className: "space-y-2", children: [
                  _jsxDEV(Label, { htmlFor: "department", children: "Department"}, void 0, false, {fileName: _jsxFileName, lineNumber: 133}, this)
                  , _jsxDEV('select', {
                    id: "department",
                    value: form.department,
                    onChange: (e) => setForm({ ...form, department: e.target.value }),
                    className: "flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"        ,
 children: 
                    departments.map((d) => (
                      _jsxDEV('option', { value: d.name, children: 
                        d.name
                      }, d.id, false, {fileName: _jsxFileName, lineNumber: 141}, this)
                    ))
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 134}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 132}, this)
                , _jsxDEV('div', { className: "space-y-2", children: [
                  _jsxDEV(Label, { htmlFor: "aiFocus", children: "AI Focus" }, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)
                  , _jsxDEV('select', {
                    id: "aiFocus",
                    value: form.aiFocus,
                    onChange: (e) => setForm({ ...form, aiFocus: e.target.value }),
                    className: "flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"        ,
 children: 
                    topics.map((t) => (
                      _jsxDEV('option', { value: t, children: 
                        t
                      }, t, false, {fileName: _jsxFileName, lineNumber: 156}, this)
                    ))
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 147}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 131}, this)
              , _jsxDEV('div', { className: "space-y-2", children: [
                _jsxDEV(Label, { htmlFor: "bio", children: "Short bio" }, void 0, false, {fileName: _jsxFileName, lineNumber: 164}, this)
                , _jsxDEV(Textarea, {
                  id: "bio",
                  rows: 3,
                  value: form.bio,
                  onChange: (e) => setForm({ ...form, bio: e.target.value }),
                  placeholder: "Briefly describe your teaching/research background"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 165}, this
                )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 163}, this)
              , _jsxDEV('div', { className: "rounded-lg bg-warning/10 border border-warning/30 p-3 text-xs text-foreground"      , children: "You'll start with student access. An admin will review your application before granting representative privileges."

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 130}, this)
          )

          , _jsxDEV(Button, { type: "submit", className: "w-full", disabled: loading, children: 
            loading ? "Creating account..." : "Create account"
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 179}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 96}, this)

        , _jsxDEV('p', { className: "text-sm text-center text-muted-foreground mt-6"   , children: ["Already have an account?"
             , " "
          , _jsxDEV(Link, { to: "/login", className: "text-primary font-medium hover:underline"  , children: "Sign in"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 186}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 184}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this)
  );
};

export default SignupPage;
