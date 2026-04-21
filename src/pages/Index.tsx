import { Link, Navigate } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar, Brain, Activity, Clock, ExternalLink } from "lucide-react";
import heroImage from "@/assets/landing-hero.jpg";
import { workshops } from "@/data/mockData";
import { useAuth } from "@/lib/auth";

const Index = () => {
  const { user } = useAuth();
  if (user) return <Navigate to="/dashboard" replace />;

  const upcoming = workshops.filter((w) => w.status === "upcoming").slice(0, 3);
  const featured = upcoming[0];
  const secondary = upcoming.slice(1, 3);

  const formatDay = (date: string) =>
    new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-primary mb-7">
              <Sparkles className="h-3 w-3" />
              University of Blida 1
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
              AI House: The{" "}
              <span className="text-primary">Future</span>{" "}
              of Scholarly Intelligence.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
              A dedicated research hub at the Faculty of Science, driving innovation through collaborative
              artificial intelligence and state-of-the-art computational frameworks.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/workshops"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:scale-[1.02]"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/representatives"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                Research Directory
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted shadow-card-hover">
              <img
                src={heroImage}
                alt="Neural network visualization representing AI research at AI House"
                className="w-full h-full object-cover"
                width={1024}
                height={1024}
              />
            </div>
            {/* Floating live status card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 rounded-2xl bg-card border border-border/60 shadow-card-hover p-4 max-w-[230px]">
              <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
                Live Status
              </div>
              <p className="text-sm font-semibold text-foreground leading-snug">
                3 Active Clusters
                <br />
                Processing Ethics AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-muted/40 border-y border-border/60">
        <div className="container py-14">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                value: "42+",
                label: "Workshops Hosted",
                desc: "Regular specialized training sessions covering Generative AI and Deep Learning architectures.",
              },
              {
                value: "12",
                label: "Departments Involved",
                desc: "Interdisciplinary collaboration spanning Computer Science, Mathematics, and Bio-Engineering.",
              },
              {
                value: "85",
                label: "Representatives",
                desc: "Dedicated faculty members and research leads driving the digital transformation agenda.",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-card border border-border/60 p-7 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="font-display text-5xl font-bold text-foreground tracking-tight mb-2">
                  {s.value}
                </div>
                <div className="text-[11px] font-bold tracking-widest text-primary uppercase mb-3">
                  {s.label}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming workshops */}
      <section className="container py-16 md:py-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
              Upcoming Workshops
            </h2>
            <p className="text-muted-foreground">
              Join our upcoming collaborative sessions led by industry experts.
            </p>
          </div>
          <Link
            to="/workshops"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition"
          >
            View All Calendar
            <Calendar className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Featured large card */}
          {featured && (
            <Link
              to={`/sessions/${featured.id}`}
              className="group relative overflow-hidden rounded-3xl gradient-navy text-navy-foreground p-8 min-h-[440px] flex flex-col justify-between shadow-card-hover hover:scale-[1.005] transition-transform"
            >
              <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/40 blur-[80px]" />
                <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/30 blur-[60px]" />
              </div>
              <div className="relative">
                <span className="inline-flex items-center rounded-full bg-success/20 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-success">
                  Featured Series
                </span>
              </div>
              <div className="relative">
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm text-navy-foreground/70 leading-relaxed mb-6 max-w-md line-clamp-2">
                  {featured.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-navy-foreground/80">
                    <Clock className="h-3.5 w-3.5" />
                    {formatDay(featured.date)} · {featured.time}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-card text-foreground px-4 py-2 text-xs font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Register Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Secondary stack */}
          <div className="grid gap-5">
            {secondary[0] && (
              <Link
                to={`/sessions/${secondary[0].id}`}
                className="group rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-card-hover transition-all p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Brain className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                    {formatDay(secondary[0].date)}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {secondary[0].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5">
                  {secondary[0].description}
                </p>
                <div className="mt-auto flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">
                    {secondary[0].maxParticipants - secondary[0].enrolled} Seats Remaining
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            )}

            <div className="grid grid-cols-2 gap-5">
              {secondary.slice(0, 2).map((w, i) => (
                <Link
                  key={w.id + i}
                  to={`/sessions/${w.id}`}
                  className="group rounded-2xl bg-muted/40 border border-border/60 p-5 hover:bg-card hover:shadow-card transition-all flex flex-col aspect-[4/5]"
                >
                  <div className="flex-1 rounded-xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 mb-4 flex items-center justify-center">
                    <Activity className="h-8 w-8 text-primary/40" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-1 line-clamp-1">
                    {w.title}
                  </h4>
                  <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                    {formatDay(w.date)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-muted/30">
        <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-display font-bold text-foreground">AI House</div>
            <p className="text-xs text-muted-foreground mt-0.5">
              © 2026 University of Blida 1 · Scholarly Intelligence Framework
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition">Privacy Policy</Link>
            <Link to="/" className="hover:text-foreground transition">Terms of Service</Link>
            <Link to="/" className="hover:text-foreground transition">Contact</Link>
            <Link to="/" className="hover:text-foreground transition">Ethics AI</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
      {/* Hero */}
      <section className="relative overflow-hidden gradient-navy min-h-[520px] flex items-center">
        <img
          src={heroBanner}
          alt="AI Neural Network"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen"
          width={1920}
          height={800}
        />
        {/* Decorative orbs */}
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-accent/15 rounded-full blur-[80px]" />

        <div className="relative container py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 mb-6 animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              University of Blida 1
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground mb-6 leading-[1.1] animate-fade-in" style={{ animationDelay: "100ms" }}>
              AI House
              <span className="block text-gradient mt-1">Training Hub</span>
            </h1>
            <p className="text-lg text-navy-foreground/60 mb-10 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
              Spreading AI literacy across every department. From workshops to hackathons, we empower faculty and students to harness the power of artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Link
                to="/workshops"
                className="inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-lg"
              >
                <Calendar className="h-4 w-4" />
                Browse Workshops
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/representatives"
                className="inline-flex items-center gap-2 rounded-xl border border-navy-foreground/20 bg-navy-foreground/5 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-all hover:bg-navy-foreground/10 hover:border-navy-foreground/30"
              >
                <Users className="h-4 w-4" />
                Meet the Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container -mt-10 relative z-10">
        <StatsBar />
      </section>

      {/* Vision */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Our Three Pillars
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A comprehensive ecosystem for AI education and collaboration
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
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
            <div
              key={item.title}
              className="group rounded-2xl border border-border/60 bg-card p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color} mb-5 transition-transform group-hover:scale-110`}>
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heatmap */}
      <section className="container pb-20">
        <TrainingHeatmap />
      </section>

      {/* Upcoming Workshops */}
      <section className="container pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">Upcoming Workshops</h2>
            <p className="text-sm text-muted-foreground">Register for the latest AI training sessions</p>
          </div>
          <Link to="/workshops" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingWorkshops.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      </section>

      {/* Featured Representatives */}
      <section className="container pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">Featured Representatives</h2>
            <p className="text-sm text-muted-foreground">Meet the faculty members leading AI adoption</p>
          </div>
          <Link to="/representatives" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredReps.map((r) => (
            <RepresentativeCard key={r.id} rep={r} />
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="container pb-24">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Partnership Grid</h2>
          <p className="text-sm text-muted-foreground">Our collaborators in the AI literacy mission</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p.id} className="rounded-2xl border border-border/60 bg-card p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
              <span className="inline-flex items-center rounded-lg bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                {p.type}
              </span>
              <h4 className="font-display font-semibold text-foreground mb-1.5">{p.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card/50">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg gradient-primary">
              <Zap className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold text-foreground font-display">AI House Blida 1</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 AI House — University of Blida 1. Empowering AI literacy across departments.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
