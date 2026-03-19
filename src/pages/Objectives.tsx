import SectionHeading from "@/components/SectionHeading";
import { Target, CheckCircle2 } from "lucide-react";

const specificObjectives = [
  "To capture macro and microscope images of soil filter papers covering the 0.5 mm - 5 mm microplastic size range.",
  "To create a manually labeled training dataset by spiking filter papers with known microplastics and non-plastic materials.",
  "To train and evaluate AI models (YOLOv8, EfficientNet, and Mask R-CNN) for detection and classification of microplastic types (fiber, film, fragment) usingstitched macro images and direct microscope images.",
  "To calculate total microplastic concentration (particles/kg) and percentage composition per sample.",
  "To validate macro image detections through cross-scale comparison with microscope ground-truth data.",
  "To develop a laboratory-oriented software tool for image upload, automated analysis, and report generation.",
];

const Objectives = () => (
  <div className="py-20">
    <div className="container max-w-3xl">
      <SectionHeading title="Research Objectives" />

      <div className="bg-card rounded-xl p-8 card-shadow mb-8">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">Main Objective</h3>
            <p className="text-muted-foreground">
              To design, develop, and validate a low-cost AI-based dual-imaging laboratory system that 
              integrates stitched macro images and direct microscope images to automatically detect, 
              classify, and quantify microplastics in soil samples, and to implement the system as a 
              practical software tool for routine laboratory analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl p-8 card-shadow">
        <h3 className="font-display font-semibold text-lg text-foreground mb-5">Specific Objectives</h3>
        <div className="space-y-4">
          {specificObjectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-muted-foreground">{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Objectives;
