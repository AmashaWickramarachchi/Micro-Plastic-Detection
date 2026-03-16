import SectionHeading from "@/components/SectionHeading";
import { FlaskConical, Camera, FolderOpen, Cpu, Search, ClipboardCheck, ArrowDown } from "lucide-react";

const pipeline = [
  { icon: FlaskConical, label: "Soil Sample Collection" },
  { icon: Camera, label: "Image Acquisition" },
  { icon: FolderOpen, label: "Dataset Preparation" },
  { icon: Cpu, label: "Model Training" },
  { icon: Search, label: "Microplastic Detection" },
  { icon: ClipboardCheck, label: "Result Evaluation" },
];

const models = [
  { name: "YOLO", purpose: "Object Detection", desc: "Real-time detection of microplastic particles with bounding box localization." },
  { name: "Mask R-CNN", purpose: "Instance Segmentation", desc: "Pixel-level segmentation for precise boundary delineation of detected particles." },
  { name: "EfficientNet", purpose: "Classification", desc: "Efficient image classification to categorize detected particles by type." },
];

const Methodology = () => (
  <div className="py-20">
    <div className="container">
      <SectionHeading title="Methodology" subtitle="Research workflow and machine learning pipeline" />

      {/* Pipeline */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="font-display text-xl font-semibold text-foreground text-center mb-8">Research Pipeline</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pipeline.map((step, i) => (
            <div key={step.label} className="relative">
              <div className="bg-card rounded-xl p-6 card-shadow text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-primary font-semibold">Step {i + 1}</span>
                <p className="text-sm font-medium text-foreground mt-1">{step.label}</p>
              </div>
              {i < pipeline.length - 1 && (
                <ArrowDown className="h-4 w-4 text-muted-foreground mx-auto mt-2 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Models */}
      <div className="max-w-4xl mx-auto">
        <h3 className="font-display text-xl font-semibold text-foreground text-center mb-8">Models Used</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m.name} className="bg-card rounded-xl p-6 card-shadow border-t-4 border-primary">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{m.purpose}</span>
              <h4 className="font-display text-xl font-bold text-foreground mt-1 mb-3">{m.name}</h4>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Methodology;
