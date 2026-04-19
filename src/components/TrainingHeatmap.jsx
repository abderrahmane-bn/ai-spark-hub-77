const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { departments } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Activity } from "lucide-react";

const colors = [
  "hsl(217, 91%, 60%)",
  "hsl(190, 95%, 55%)",
  "hsl(172, 66%, 50%)",
  "hsl(160, 84%, 39%)",
  "hsl(38, 92%, 50%)",
  "hsl(210, 80%, 55%)",
  "hsl(195, 85%, 50%)",
  "hsl(165, 65%, 45%)",
  "hsl(220, 70%, 50%)",
  "hsl(180, 60%, 48%)",
];

const TrainingHeatmap = () => {
  const data = departments
    .sort((a, b) => b.workshopCount - a.workshopCount)
    .map((d) => ({
      name: d.name.length > 14 ? d.name.slice(0, 14) + "…" : d.name,
      fullName: d.name,
      workshops: d.workshopCount,
      participants: d.participantCount,
    }));

  return (
    _jsxDEV('div', { className: "rounded-2xl border border-border/60 bg-card p-6 shadow-card"     , children: [
      _jsxDEV('div', { className: "flex items-center gap-3 mb-1"   , children: [
        _jsxDEV('div', { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10"      , children: 
          _jsxDEV(Activity, { className: "h-4 w-4 text-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this)
        , _jsxDEV('div', { children: [
          _jsxDEV('h3', { className: "font-display text-lg font-semibold text-foreground"   , children: "Training Heatmap"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
          , _jsxDEV('p', { className: "text-xs text-muted-foreground" , children: "Workshop activity by department"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 30}, this)

      , _jsxDEV('div', { className: "mt-6", children: 
        _jsxDEV(ResponsiveContainer, { width: "100%", height: 300, children: 
          _jsxDEV(BarChart, { data: data, layout: "vertical", margin: { left: 10, right: 20 }, children: [
            _jsxDEV(XAxis, { type: "number", tick: { fontSize: 11, fill: "hsl(220, 9%, 46%)" }, axisLine: false, tickLine: false,}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this )
            , _jsxDEV(YAxis, {
              dataKey: "name",
              type: "category",
              width: 110,
              tick: { fontSize: 11, fill: "hsl(220, 9%, 46%)" },
              axisLine: false,
              tickLine: false,}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this
            )
            , _jsxDEV(Tooltip, {
              cursor: { fill: "hsl(217, 91%, 60%, 0.04)" },
              contentStyle: {
                background: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "12px",
                fontSize: "12px",
                boxShadow: "0 10px 40px -10px hsl(222, 47%, 11%, 0.1)",
                padding: "8px 12px",
              },
              formatter: (value, name) => [value, name === "workshops" ? "Workshops" : "Participants"],
              labelFormatter: (label) => {
                const item = data.find((d) => d.name === label);
                return item?.fullName || label;
              },}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this
            )
            , _jsxDEV(Bar, { dataKey: "workshops", radius: [0, 8, 8, 0], barSize: 18, children: 
              data.map((_, index) => (
                _jsxDEV(Cell, { fill: colors[index % colors.length],}, index, false, {fileName: _jsxFileName, lineNumber: 74}, this )
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 29}, this)
  );
};

export default TrainingHeatmap;
