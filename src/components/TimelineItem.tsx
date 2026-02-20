interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  image: string | null;
  index: number;
}

export default function TimelineItem({ date, title, description, image, index }: TimelineItemProps) {
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <div
      className={`timeline__item timeline__item--${side} reveal`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="timeline__dot" />

      {image && (
        <div className="timeline__image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}

      <div className="timeline__content">
        <span className="timeline__date">{date}</span>
        <h3 className="timeline__title">{title}</h3>
        <p className="timeline__description">{description}</p>
      </div>
    </div>
  );
}
