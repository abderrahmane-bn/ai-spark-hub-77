import { partners } from "@/data/mockData";
import { Building2, GraduationCap, Landmark } from "lucide-react";

const iconMap: Record<string, typeof Building2> = {
  industry: Building2,
  rectorate: Landmark,
  academic: GraduationCap,
};

const PartnersPage = () => {
  return (
    <div className="container py-10">
      <h1 className="font-display text-3xl font-bold text-foreground mb-2">Partnership Grid</h1>
      <p className="text-muted-foreground mb-8">
        Collaborations with industry, rectorate, and academic institutions powering the AI House mission.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {partners.map((p) => {
          const Icon = iconMap[p.type] || Building2;
          return (
            <div key={p.id} className="rounded-xl border border-border bg-card p-6 hover:shadow-glow transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg gradient-primary">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{p.name}</h3>
                  <span className="text-xs text-muted-foreground capitalize">{p.type}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersPage;
