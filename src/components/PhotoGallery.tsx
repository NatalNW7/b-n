"use client";

import { useState } from "react";
import PhotoLightbox from "./PhotoLightbox";

interface Photo {
  src: string;
  alt: string;
  author: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <>
      <div className="photo-hub__gallery">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="photo-hub__item reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
            onClick={() => setSelected(photo)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span className="photo-hub__author">{photo.author}</span>
          </div>
        ))}
      </div>

      {selected && (
        <PhotoLightbox photo={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
