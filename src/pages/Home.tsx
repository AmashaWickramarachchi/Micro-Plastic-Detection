import { ArrowRight, Brain, Database, Search, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";

const contributions = [
  { icon: Brain, title: "Automated Detection", desc: "Deep learning-powered microplastic identification in soil images" },
  { icon: Database, title: "Image Dataset", desc: "Development of a labeled soil microplastic image dataset" },
  { icon: Search, title: "Detection & Classification", desc: "Object detection and classification model application" },
  { icon: BarChart3, title: "Improved Efficiency", desc: "Enhanced analysis efficiency for environmental studies" },
];

const team = [
  { name: "W.A.A.Sewwandi", role: "Lead Researcher", image: "/sewwandi.jpeg" },
  { name: "A.H.M.M.Silva", role: "Data Engineer", image: "/silva.jpeg" },
  { name: "M.B.D.N.V.Gunawardhana", role: "ML Engineer", image: "/gunawardhana.jpeg" },
  { name: "Dr. Nalaka Lankasena", role: "Research Supervisor", image: "/supervisor.jpg" },
  { name: "Prof. Lanka Undugoda", role: "Research Co-Supervisor", image: "/coSupervisor.jpg" },
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Microplastic research visualization" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container py-24 md:py-36 text-center text-white">
        <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-4">
          University of Sri Jayewardenepura · Faculty of Technology
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight mb-6 drop-shadow-lg">
          Machine Learning-Based Microplastic Detection in Soil Matrices
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          An intelligent approach for detecting microplastics in soil environments using deep learning techniques.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/methodology"
            className="inline-flex items-center gap-2 rounded-lg bg-card px-6 py-3 font-semibold text-primary shadow-lg hover:shadow-xl transition-all"
          >
            Explore Methodology <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/results"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            View Results
          </Link>
        </div>
      </div>
    </section>

    {/* Motivation */}
    <section className="bg-section-gradient py-20">
      <div className="container max-w-3xl text-center">
        <SectionHeading title="Research Motivation" />
        <p className="text-muted-foreground leading-relaxed">
          Soil microplastic contamination is a growing environmental concern. Current detection methods require expensive laboratory equipment such as FTIR and Raman spectroscopy, limiting widespread monitoring. This research explores affordable, automated alternatives using machine learning.
        </p>
      </div>
    </section>

    {/* About */}
    <section className="py-20">
      <div className="container max-w-3xl text-center">
        <SectionHeading title="About the Research" />
        <p className="text-muted-foreground leading-relaxed">
          Microplastics are increasingly found in terrestrial ecosystems. Detecting them in soil is challenging because soil particles often resemble plastic fragments. This research explores machine learning techniques to improve microplastic identification accuracy.
        </p>
      </div>
    </section>

    {/* Key Contributions */}
    <section className="bg-section-gradient py-20">
      <div className="container">
        <SectionHeading title="Key Contributions" subtitle="Core deliverables of this research project" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributions.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Preview */}
    <section className="py-20">
      <div className="container">
        <SectionHeading title="Research Team" subtitle="Meet the people behind the project" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((m) => (
            <div key={m.name} className="bg-card rounded-xl p-6 text-center card-shadow">
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
        <div className="text-center mt-8">
          <Link to="/team" className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1">
            View Full Team <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
