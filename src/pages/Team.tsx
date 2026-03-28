import SectionHeading from "@/components/SectionHeading";
import { Users } from "lucide-react";

const members = [
  { name: "W.A.A.Sewwandi", role: "Lead Researcher", image: "/sewwandi.jpeg" },
  { name: "A.H.M.M.Silva", role: "Data Engineer", image: "/silva.jpeg" },
  { name: "M.B.D.N.V.Gunawardhana", role: "ML Engineer", image: "/gunawardhana.jpeg" },
];

const supervisor = { name: "Dr. Nalaka Lankasena", role: "Research Supervisor", image: "/supervisor.jpg" };

const coSupervisor = { name: "Prof. Lanka Undugoda", role: "Research Co-Supervisor", image: "/coSupervisor.jpg" };

const Team = () => (
  <div className="py-20">
    <div className="container">
      <SectionHeading title="Research Team" subtitle="University of Sri Jayewardenepura · Faculty of Technology" />

      {/* Supervisor */}
      <div className="max-w-xs mx-auto mb-12">
        <div className="bg-card rounded-xl p-8 card-shadow text-center border-t-4 border-secondary">
          <img
            src={supervisor.image}
            alt={supervisor.name}
            className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h4 className="font-display font-bold text-foreground">{supervisor.name}</h4>
          <p className="text-sm text-secondary font-medium mt-1">{supervisor.role}</p>
        </div>
      </div>

      {/* Co-Supervisor */}
      <div className="max-w-xs mx-auto mb-12">
        <div className="bg-card rounded-xl p-8 card-shadow text-center border-t-4 border-secondary">
          <img
            src={coSupervisor.image}
            alt={coSupervisor.name}
            className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h4 className="font-display font-bold text-foreground">{coSupervisor.name}</h4>
          <p className="text-sm text-secondary font-medium mt-1">{coSupervisor.role}</p>
        </div>
      </div>

      {/* Students */}
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {members.map((m) => (
          <div key={m.name} className="bg-card rounded-xl p-6 card-shadow text-center">
            <img
              src={m.image}
              alt={m.name}
              className="h-20 w-20 rounded-full mx-auto mb-4 object-cover"
              onError={(e) => {
                // Fallback to icon if image fails to load
                (e.currentTarget as HTMLElement).style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
              }}
            />
            <div className="h-20 w-20 rounded-full bg-muted mx-auto mb-4 items-center justify-center hidden">
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
            <h4 className="font-display font-semibold text-foreground text-sm">{m.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Team;
