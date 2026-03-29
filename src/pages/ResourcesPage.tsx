import { Download, FileText, Calendar } from "lucide-react";
import { workshops } from "@/data/mockData";

const ResourcesPage = () => {
  const pastWithResources = workshops.filter((w) => w.status === "past" && w.resourceUrl);

  return (
    <div className="container py-10">
      <h1 className="font-display text-3xl font-bold text-foreground mb-2">Resource Library</h1>
      <p className="text-muted-foreground mb-8">
        Materials from past events are automatically available here for download once the session date has passed.
      </p>

      {pastWithResources.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No resources available yet. Check back after upcoming events!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pastWithResources.map((w) => (
            <div key={w.id} className="rounded-xl border border-border bg-card p-5 hover:shadow-glow transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm leading-tight">{w.title}</h3>
                  <span className="text-xs text-muted-foreground">{w.department}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{w.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(w.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <button className="flex items-center gap-1.5 rounded-lg gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105">
                  <Download className="h-3.5 w-3.5" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;
