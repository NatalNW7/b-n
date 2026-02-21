import story from "@/data/story.json";
import TimelineItem from "./TimelineItem";
import RevealObserver from "./RevealObserver";

export default function OurStorySection() {
  return (
    <section className="story" id="story">
      <div className="section-header">
        <h2 className="section-title">NOSSA HISTÓRIA</h2>
        <div className="section-divider" />
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
