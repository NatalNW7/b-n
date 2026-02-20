import story from "@/data/story.json";
import TimelineItem from "./TimelineItem";
import RevealObserver from "./RevealObserver";

export default function OurStorySection() {
  return (
    <section className="story" id="story">
      <div className="section-header">
        <p className="section-label">Nossa História</p>
        <div className="section-divider" />
        <h2 className="section-title">Como Tudo Começou</h2>
        <p className="section-description">
          Cada capítulo nos trouxe até aqui.
        </p>
      </div>

      <RevealObserver>
        <div className="timeline">
          <div className="timeline__connector" />
          {story.map((item, i) => (
            <TimelineItem key={item.title} {...item} index={i} />
          ))}
        </div>
      </RevealObserver>
    </section>
  );
}
