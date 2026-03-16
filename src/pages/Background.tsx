import SectionHeading from "@/components/SectionHeading";
import { AlertTriangle, Layers, Lightbulb } from "lucide-react";

const sections = [
  {
    icon: AlertTriangle,
    title: "Microplastic Pollution",
    content: "Microplastics are plastic particles smaller than 5mm that originate from the degradation of larger plastics, synthetic textiles, and industrial processes. They accumulate in soil, water, and air, posing threats to ecosystems and human health through food chain contamination and soil degradation.",
  },
  {
    icon: Layers,
    title: "Challenges in Soil Detection",
    content: "Soil matrices contain mineral grains, organic matter, and biological debris that visually resemble plastic fragments. Traditional identification methods rely on expensive spectroscopy equipment (FTIR, Raman) and require significant manual effort, making large-scale monitoring impractical.",
  },
  {
    icon: Lightbulb,
    title: "Research Motivation",
    content: "The growing scale of microplastic contamination demands automated, cost-effective detection methods. Machine learning and computer vision can analyze microscopic images rapidly, potentially enabling widespread soil monitoring without specialized laboratory infrastructure.",
  },
];

const Background = () => (
  <div className="py-20">
    <div className="container">
      <SectionHeading
        title="Research Background"
        subtitle="Understanding the environmental challenge of microplastic pollution in soil ecosystems"
      />
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {sections.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-8 card-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Background;
