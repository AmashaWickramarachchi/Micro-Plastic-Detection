interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="mb-12 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-hero-gradient" />
  </div>
);

export default SectionHeading;
