import SectionHeading from "@/components/SectionHeading";
import { Leaf, FlaskConical, Coins } from "lucide-react";

const impacts = [
  {
    icon: Leaf,
    title: "Environmental Benefits",
    desc: "Better monitoring of soil microplastic pollution, enabling data-driven environmental policy decisions and ecosystem protection.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Contribution",
    desc: "Provides a computational approach for environmental analysis, bridging machine learning and soil science disciplines.",
  },
  {
    icon: Coins,
    title: "Accessibility",
    desc: "Machine learning approaches may support lower-cost detection compared with traditional spectroscopy methods such as FTIR and Raman analysis.",
  },
];

const Impact = () => (
  <div className="py-20">
    <div className="container">
      <SectionHeading title="Research Impact" subtitle="How this work contributes to science and society" />
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {impacts.map((imp) => (
          <div key={imp.title} className="bg-card rounded-xl p-8 card-shadow text-center">
            <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5">
              <imp.icon className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-3">{imp.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{imp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Impact;
