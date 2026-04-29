import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { departments, topics } from "@/data/mockData";
import { toast } from "sonner";
import { GraduationCap, UserCog, ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/signup-hero.jpg";

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
    bio: ""
  });
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please agree to the AI House Ethics Policy.");
      return;
    }
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
      bio: role === "representative" ? form.bio.trim() : undefined
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
    <div className="min-h-[calc(100vh-4rem)] bg-muted/30 py-8 md:py-12">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-end mb-6 text-sm">
          <span className="text-muted-foreground mr-3">Already have an account?</span>
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Portal Login
          </Link>
        </div>

        <div className="grid md:grid-cols-[340px_1fr] rounded-2xl overflow-hidden bg-card shadow-card-hover border border-border">
          {/* Left brand panel */}
          <aside
            className="relative hidden md:flex flex-col justify-between p-8 text-white"
            style={{
              backgroundImage: `linear-gradient(180deg, hsl(220 60% 8% / 0.85), hsl(220 60% 6% / 0.95)), url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight">
                The Digital<br />Curator
              </h2>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                Join the University of Blida 1 elite research ecosystem. Empower your intellectual journey with autonomous AI insights.
              </p>
            </div>

            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center">
                  <BadgeCheck className="h-4 w-4 text-success" />
                </div>
                <span className="text-sm font-medium">Verified Academic Network</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium">AI-Powered Research Discovery</span>
              </div>
            </div>
          </aside>

          {/* Right form panel */}
          <section className="p-6 md:p-10">
            <h1 className="font-display text-3xl font-bold">Create your account</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Select your role to personalize your AI House experience.
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-3">
                ACADEMIC ROLE
              </p>
              <div className="grid grid-cols-2 gap-3">
                <RoleCard
                  active={role === "student"}
                  onClick={() => setRole("student")}
                  icon={<GraduationCap className="h-4 w-4 text-primary" />}
                  title="Student"
                  desc="Attend workshops & seminars" />
                
                <RoleCard
                  active={role === "representative"}
                  onClick={() => setRole("representative")}
                  icon={<UserCog className="h-4 w-4 text-accent" />}
                  title="Representative"
                  desc="Lead trainings (needs approval)" />
                
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    required
                    placeholder="Dr. Researcher"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                  
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">
                    {role === "representative" ? "Department" : "Faculty"}
                  </Label>
                  <select
                    id="department"
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    
                    {departments.map((d) =>
                    <option key={d.id} value={d.name}>{d.name}</option>
                    )}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Institutional Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="name@univ-blida.dz"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Secure Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })} />
                  
                </div>
              </div>

              {role === "representative" &&
              <div className="space-y-4 rounded-xl bg-muted/40 border border-border p-4">
                  <div className="space-y-2">
                    <Label htmlFor="aiFocus">AI Focus Area</Label>
                    <select
                    id="aiFocus"
                    value={form.aiFocus}
                    onChange={(e) => setForm({ ...form, aiFocus: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                    
                      {topics.map((t) =>
                    <option key={t} value={t}>{t}</option>
                    )}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Short bio</Label>
                    <Textarea
                    id="bio"
                    rows={3}
                    value={form.bio}
                    onChange={(e) => setForm({ ...form, bio: e.target.value })}
                    placeholder="Briefly describe your teaching/research background" />
                  
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You'll start with student access. An admin will review your application before granting representative privileges.
                  </p>
                </div>
              }

              <div className="flex items-start gap-2">
                <Checkbox
                  id="agree"
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(v === true)}
                  className="mt-0.5" />
                
                <Label htmlFor="agree" className="text-sm font-normal text-muted-foreground leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="text-primary font-medium hover:underline">
                    AI House Ethics Policy
                  </a>
                  .
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                {loading ? "Creating account..." : "Initialize Membership"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          </section>
        </div>
      </div>
    </div>);

};

const RoleCard = ({
  active,
  onClick,
  icon,
  title,
  desc






}) =>
<button
  type="button"
  onClick={onClick}
  className={`rounded-xl border p-4 text-left transition-all ${
  active ?
  "border-primary bg-primary/5 ring-2 ring-primary/30 shadow-card" :
  "border-border bg-muted/30 hover:border-primary/40"}`
  }>
  
    <div className="h-9 w-9 rounded-lg bg-background border border-border flex items-center justify-center mb-3">
      {icon}
    </div>
    <div className="font-semibold text-sm">{title}</div>
    <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
  </button>;


export default SignupPage;