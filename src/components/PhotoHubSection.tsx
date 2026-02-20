import photos from "@/data/photos.json";
import PhotoGallery from "./PhotoGallery";
import PhotoUpload from "./PhotoUpload";
import RevealObserver from "./RevealObserver";

export default function PhotoHubSection() {
  return (
    <section className="photo-hub" id="photos">
      <div className="section-header section-header--dark">
        <p className="section-label section-label--dark">Galeria</p>
        <div className="section-divider section-divider--dark" />
        <h2 className="section-title section-title--dark">Nossas Fotos</h2>
        <p className="section-description section-description--dark">
          Compartilhe os melhores momentos conosco.
        </p>
      </div>

      <RevealObserver>
        <PhotoGallery photos={photos} />
      </RevealObserver>
      <PhotoUpload />
    </section>
  );
}
