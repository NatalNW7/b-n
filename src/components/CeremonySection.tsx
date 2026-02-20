import ceremony from "@/data/ceremony.json";
import CeremonyCard from "./CeremonyCard";
import RevealObserver from "./RevealObserver";

interface CeremonyItem {
  icon: string;
  title: string;
  details: string[];
}

export default function CeremonySection() {
  return (
    <section className="ceremony" id="ceremony">
      <div className="section-header">
        <p className="section-label">Cerimônia</p>
        <div className="section-divider" />
        <h2 className="section-title">Informações</h2>
        <p className="section-description">
          Tudo o que você precisa saber para celebrar conosco.
        </p>
      </div>

      <RevealObserver className="ceremony__cards">
        {(ceremony as CeremonyItem[]).map((item, i) => (
          <CeremonyCard key={item.title} {...item} index={i} />
        ))}
      </RevealObserver>
    </section>
  );
}
