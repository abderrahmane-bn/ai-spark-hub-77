import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Calendar, BookOpen } from "lucide-react";
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
      <section className="relative overflow-hidden gradient-navy">
        <img
          src={heroBanner}
          alt="AI Neural Network"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
          width={1920}
          height={800}
        />
        <div className="relative container py-20 md:py-32">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground mb-6">
              <Sparkles className="h-4 w-4" />
              University of Blida 1
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground mb-6 leading-tight">
              AI House
              <span className="block text-gradient">Training Hub</span>
            </h1>
            <p className="text-lg text-navy-foreground/70 mb-8 max-w-lg">
              Spreading AI literacy across every department. From workshops to hackathons, we empower faculty and students to harness the power of artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/workshops"
                className="inline-flex items-center gap-2 rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                <Calendar className="h-4 w-4" />
                Browse Workshops
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/representatives"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-foreground/20 bg-navy-foreground/5 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                <Users className="h-4 w-4" />
                Meet the Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container -mt-8 relative z-10">
        <StatsBar />
      </section>

      {/* Vision Section */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Calendar,
              title: "Training Hub",
              desc: "A centralized database of all past and future workshops, seminars, and competitions with full scheduling.",
            },
            {
              icon: Users,
              title: "Human Network",
              desc: "Profiles of department representatives, instructors, and participants driving AI adoption across faculties.",
            },
            {
              icon: BookOpen,
              title: "Resource Library",
              desc: "Automated access to materials from past events — slides, code, and datasets available for download.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-6 hover:shadow-glow transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary mb-4">
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heatmap */}
      <section className="container pb-16">
        <TrainingHeatmap />
      </section>

      {/* Upcoming Workshops */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-foreground">Upcoming Workshops</h2>
          <Link to="/workshops" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingWorkshops.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      </section>

      {/* Featured Representatives */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-foreground">Featured Representatives</h2>
          <Link to="/representatives" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredReps.map((r) => (
            <RepresentativeCard key={r.id} rep={r} />
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="container pb-20">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Partnership Grid</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p.id} className="rounded-xl border border-border bg-card p-5 hover:shadow-glow transition-shadow">
              <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground capitalize mb-3">
                {p.type}
              </span>
              <h4 className="font-display font-semibold text-foreground mb-1">{p.name}</h4>
              <p className="text-xs text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 AI House — University of Blida 1. Empowering AI literacy across departments.
        </div>
      </footer>
    </div>
  );
};

export default Index;
