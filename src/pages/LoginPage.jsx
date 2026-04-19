const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { LogIn } from "lucide-react";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const res = login(email.trim(), password);
    setLoading(false);
    if (!res.ok) {
      toast.error(res.error ?? "Login failed");
      return;
    }
    toast.success("Welcome back!");
    navigate("/dashboard");
  };

  return (
    _jsxDEV('div', { className: "container max-w-md py-16"  , children: 
      _jsxDEV(Card, { className: "p-8 shadow-card-hover" , children: [
        _jsxDEV('div', { className: "flex flex-col items-center text-center mb-6"    , children: [
          _jsxDEV('div', { className: "h-12 w-12 rounded-2xl gradient-primary shadow-glow flex items-center justify-center mb-3"        , children: 
            _jsxDEV(LogIn, { className: "h-5 w-5 text-primary-foreground"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
          , _jsxDEV('h1', { className: "font-display text-2xl font-bold"  , children: "Welcome back" }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-1"  , children: "Sign in to access your dashboard"     }, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)

        , _jsxDEV('form', { onSubmit: onSubmit, className: "space-y-4", children: [
          _jsxDEV('div', { className: "space-y-2", children: [
            _jsxDEV(Label, { htmlFor: "email", children: "Email"}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
            , _jsxDEV(Input, {
              id: "email",
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "you@univ-blida.dz",}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
          , _jsxDEV('div', { className: "space-y-2", children: [
            _jsxDEV(Label, { htmlFor: "password", children: "Password"}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
            , _jsxDEV(Input, {
              id: "password",
              type: "password",
              required: true,
              value: password,
              onChange: (e) => setPassword(e.target.value),
              placeholder: "••••••••",}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
          , _jsxDEV(Button, { type: "submit", className: "w-full", disabled: loading, children: 
            loading ? "Signing in..." : "Sign in"
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 42}, this)

        , _jsxDEV('p', { className: "text-sm text-center text-muted-foreground mt-6"   , children: ["No account?"
           , " "
          , _jsxDEV(Link, { to: "/signup", className: "text-primary font-medium hover:underline"  , children: "Create one"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 70}, this)

        , _jsxDEV('div', { className: "mt-6 rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground"     , children: [
          _jsxDEV('p', { className: "font-medium text-foreground mb-1"  , children: "Demo admin" }, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this)
          , _jsxDEV('p', { children: "admin@univ-blida.dz / admin123"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 77}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)
  );
};

export default LoginPage;
