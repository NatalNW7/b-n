"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  author: string;
}

interface PhotoLightboxProps {
  photo: Photo;
  onClose: () => void;
}

export default function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" aria-label="Fechar">✕</button>
      <Image
        className="lightbox__image"
        src={photo.src}
        alt={photo.alt}
        width={1200}
        height={800}
        sizes="90vw"
        style={{ width: "auto", maxWidth: "90vw", height: "auto", maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      />
      <p className="lightbox__author">{photo.author}</p>
    </div>
  );
}
