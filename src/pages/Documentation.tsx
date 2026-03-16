import SectionHeading from "@/components/SectionHeading";
import { FileText, Download } from "lucide-react";

const docs = [
  { title: "Research Proposal", desc: "Initial project proposal and scope definition" },
  { title: "Progress Presentation 1", desc: "First progress review presentation" },
  { title: "Progress Presentation 2", desc: "Second progress review presentation" },
  { title: "Final Thesis", desc: "Complete undergraduate thesis document" },
  { title: "Research Poster", desc: "Summary poster for academic presentation" },
  { title: "Research Paper", desc: "Published or submitted research paper" },
];

const Documentation = () => (
  <div className="py-20">
    <div className="container max-w-3xl">
      <SectionHeading title="Documentation" subtitle="Download research documents and publications" />
      <div className="space-y-4">
        {docs.map((d) => (
          <div
            key={d.title}
            className="bg-card rounded-xl p-5 card-shadow flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm">{d.title}</h4>
                <p className="text-xs text-muted-foreground">{d.desc}</p>
              </div>
            </div>
            <button className="shrink-0 h-9 w-9 rounded-lg border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Documentation;
