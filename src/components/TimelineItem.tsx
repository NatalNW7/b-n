import Image from "next/image";

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
          <Image
            src={image}
            alt={title}
            width={450}
            height={450}
            sizes="(max-width: 900px) 80vw, 400px"
            style={{ width: "100%", height: "auto" }}
          />
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
