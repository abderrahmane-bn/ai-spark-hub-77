import { departments } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const colors = [
  "hsl(210, 100%, 45%)",
  "hsl(190, 95%, 55%)",
  "hsl(175, 70%, 41%)",
  "hsl(152, 60%, 45%)",
  "hsl(38, 92%, 50%)",
  "hsl(210, 80%, 55%)",
  "hsl(195, 85%, 50%)",
  "hsl(160, 65%, 45%)",
  "hsl(220, 70%, 50%)",
  "hsl(180, 60%, 48%)",
];

const TrainingHeatmap = () => {
  const data = departments
    .sort((a, b) => b.workshopCount - a.workshopCount)
    .map((d) => ({
      name: d.name.length > 12 ? d.name.slice(0, 12) + "…" : d.name,
      fullName: d.name,
      workshops: d.workshopCount,
      participants: d.participantCount,
    }));

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
        Training Activity Heatmap
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Workshop count by department — see which faculties lead AI adoption
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: 10, right: 20 }}>
          <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
          <YAxis
            dataKey="name"
            type="category"
            width={100}
            tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }}
          />
          <Tooltip
            cursor={{ fill: "hsl(210, 100%, 45%, 0.05)" }}
            contentStyle={{
              background: "hsl(0, 0%, 100%)",
              border: "1px solid hsl(220, 15%, 88%)",
              borderRadius: "8px",
              fontSize: "13px",
            }}
            formatter={(value: number, name: string) => [value, name === "workshops" ? "Workshops" : "Participants"]}
            labelFormatter={(label: string) => {
              const item = data.find((d) => d.name === label);
              return item?.fullName || label;
            }}
          />
          <Bar dataKey="workshops" radius={[0, 6, 6, 0]} barSize={20}>
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrainingHeatmap;
