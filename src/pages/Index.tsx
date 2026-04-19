import { Link } from "react-router-dom";
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
    <div className="min-h-screen">
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
