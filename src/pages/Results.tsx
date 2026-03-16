import SectionHeading from "@/components/SectionHeading";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ImageIcon } from "lucide-react";

const data = [
  { model: "YOLO", Accuracy: 92, Precision: 90, Recall: 91 },
  { model: "Mask R-CNN", Accuracy: 94, Precision: 93, Recall: 92 },
];

const Results = () => (
  <div className="py-20">
    <div className="container">
      <SectionHeading title="Results" subtitle="Model performance evaluation and detection outcomes" />

      {/* Chart */}
      <div className="max-w-3xl mx-auto bg-card rounded-xl p-6 md:p-8 card-shadow mb-12">
        <h3 className="font-display font-semibold text-lg text-foreground mb-6 text-center">Model Performance Comparison</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,20%,90%)" />
            <XAxis dataKey="model" tick={{ fontSize: 13 }} />
            <YAxis domain={[80, 100]} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Accuracy" fill="hsl(210,80%,42%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Precision" fill="hsl(155,50%,42%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Recall" fill="hsl(195,70%,45%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="max-w-2xl mx-auto bg-card rounded-xl overflow-hidden card-shadow mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary/5">
              <th className="px-6 py-4 text-left font-display font-semibold text-foreground">Model</th>
              <th className="px-6 py-4 text-center font-display font-semibold text-foreground">Accuracy</th>
              <th className="px-6 py-4 text-center font-display font-semibold text-foreground">Precision</th>
              <th className="px-6 py-4 text-center font-display font-semibold text-foreground">Recall</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.model} className="border-t">
                <td className="px-6 py-4 font-medium text-foreground">{d.model}</td>
                <td className="px-6 py-4 text-center text-muted-foreground">{d.Accuracy}%</td>
                <td className="px-6 py-4 text-center text-muted-foreground">{d.Precision}%</td>
                <td className="px-6 py-4 text-center text-muted-foreground">{d.Recall}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detection examples placeholder */}
      <div className="max-w-3xl mx-auto">
        <h3 className="font-display font-semibold text-lg text-foreground text-center mb-6">Detection Examples</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-card rounded-xl p-8 card-shadow flex flex-col items-center justify-center aspect-video">
              <ImageIcon className="h-12 w-12 text-muted-foreground/40 mb-3" />
              <p className="text-sm text-muted-foreground">Detection Sample {i}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Microplastic particles highlighted</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Results;
