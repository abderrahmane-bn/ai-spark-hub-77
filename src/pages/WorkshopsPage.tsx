import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import WorkshopCard from "@/components/WorkshopCard";
import { workshops, topics } from "@/data/mockData";
import { departments } from "@/data/mockData";

const WorkshopsPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [deptFilter, setDeptFilter] = useState<string>("all");
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [audienceFilter, setAudienceFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    return workshops.filter((w) => {
      if (search && !w.title.toLowerCase().includes(search.toLowerCase()) && !w.description.toLowerCase().includes(search.toLowerCase())) return false;
      if (statusFilter !== "all" && w.status !== statusFilter) return false;
      if (deptFilter !== "all" && w.department !== deptFilter) return false;
      if (topicFilter !== "all" && w.topic !== topicFilter) return false;
      if (audienceFilter !== "all" && w.targetAudience !== audienceFilter) return false;
      return true;
    });
  }, [search, statusFilter, deptFilter, topicFilter, audienceFilter]);

  const selectClass = "rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="container py-10">
      <h1 className="font-display text-3xl font-bold text-foreground mb-2">Workshops & Activities</h1>
      <p className="text-muted-foreground mb-8">Browse, filter, and register for AI training sessions across all departments.</p>

      {/* Search & Filters */}
      <div className="rounded-xl border border-border bg-card p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search workshops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={selectClass}>
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
          <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)} className={selectClass}>
            <option value="all">All Departments</option>
            {departments.map((d) => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
          </select>
          <select value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)} className={selectClass}>
            <option value="all">All Topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select value={audienceFilter} onChange={(e) => setAudienceFilter(e.target.value)} className={selectClass}>
            <option value="all">All Audiences</option>
            <option value="representatives">Representatives</option>
            <option value="students">Students</option>
            <option value="public">General Public</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{filtered.length} activities found</span>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No workshops match your filters. Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkshopsPage;
