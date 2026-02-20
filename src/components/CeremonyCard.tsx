interface CeremonyCardProps {
  icon: string;
  title: string;
  details: string[];
  index: number;
}

export default function CeremonyCard({ icon, title, details, index }: CeremonyCardProps) {
  return (
    <div
      className="ceremony__card reveal"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <span className="ceremony__icon">{icon}</span>
      <h3 className="ceremony__card-title">{title}</h3>
      {details.map((line) => (
        <p key={line} className="ceremony__card-detail">{line}</p>
      ))}
    </div>
  );
}
