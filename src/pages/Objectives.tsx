import SectionHeading from "@/components/SectionHeading";
import { Target, CheckCircle2 } from "lucide-react";

const specificObjectives = [
  "Create a labeled soil microplastic image dataset",
  "Train deep learning models for detection and classification",
  "Evaluate model performance using accuracy metrics",
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
              Develop a machine learning-based approach for detecting microplastic particles in soil images.
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
