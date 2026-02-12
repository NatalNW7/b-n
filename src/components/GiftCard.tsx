"use client";

import Image from "next/image";
import { useState } from "react";

interface GiftCardProps {
  name: string;
  price: string;
  image: string;
  link: string;
  index: number;
}

export default function GiftCard({
  name,
  price,
  image,
  link,
  index,
}: GiftCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="gift-card"
      style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
    >
      <div className={`gift-card__image${loaded ? " loaded" : ""}`}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
          style={{ objectFit: "cover" }}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </div>
      <div className="gift-card__body">
        <h3 className="gift-card__name">{name}</h3>
        <p className="gift-card__price">{price}</p>
        <span className="gift-card__action">Ver na Loja</span>
      </div>
    </a>
  );
}
