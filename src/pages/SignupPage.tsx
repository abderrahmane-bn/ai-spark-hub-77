import { useState } from "react";
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
  const [role, setRole] = useState<"student" | "representative">("student");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    department: departments[0].name,
    aiFocus: topics[0],
    bio: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
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
    <div className="container max-w-xl py-12">
      <Card className="p-8 shadow-card-hover">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-12 w-12 rounded-2xl gradient-primary shadow-glow flex items-center justify-center mb-3">
            <UserPlus className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold">Join AI House</h1>
          <p className="text-sm text-muted-foreground mt-1">Create an account to register for workshops</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`rounded-xl border p-4 text-left transition-all ${
              role === "student"
                ? "border-primary bg-primary/5 shadow-card"
                : "border-border hover:border-primary/40"
            }`}
          >
            <GraduationCap className="h-5 w-5 mb-2 text-primary" />
            <div className="font-semibold text-sm">Student</div>
            <div className="text-xs text-muted-foreground">Attend workshops & seminars</div>
          </button>
          <button
            type="button"
            onClick={() => setRole("representative")}
            className={`rounded-xl border p-4 text-left transition-all ${
              role === "representative"
                ? "border-primary bg-primary/5 shadow-card"
                : "border-border hover:border-primary/40"
            }`}
          >
            <UserCog className="h-5 w-5 mb-2 text-accent" />
            <div className="font-semibold text-sm">Representative</div>
            <div className="text-xs text-muted-foreground">Lead trainings (admin approval)</div>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              required
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              minLength={6}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="At least 6 characters"
            />
          </div>

          {role === "representative" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <select
                    id="department"
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    {departments.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aiFocus">AI Focus</Label>
                  <select
                    id="aiFocus"
                    value={form.aiFocus}
                    onChange={(e) => setForm({ ...form, aiFocus: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Short bio</Label>
                <Textarea
                  id="bio"
                  rows={3}
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  placeholder="Briefly describe your teaching/research background"
                />
              </div>
              <div className="rounded-lg bg-warning/10 border border-warning/30 p-3 text-xs text-foreground">
                You'll start with student access. An admin will review your application before granting representative privileges.
              </div>
            </>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <p className="text-sm text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignupPage;
