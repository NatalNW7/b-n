import Image from "next/image";
import ceremony from "@/data/ceremony.json";
import RevealObserver from "./RevealObserver";

interface VenueData {
  name: string;
  address: string;
  date: string;
  time: string;
  photo: string;
  observations: { icon: string; text: string }[];
  mapEmbedUrl: string;
}

export default function CeremonySection() {
  const venue = ceremony.venue as VenueData;

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

      {/* Venue map, photo & details */}
      <RevealObserver className="ceremony__venue">
        {/* Map + Photo side by side */}
        <div className="ceremony__media reveal">
          {/* Google Maps embed */}
          <div className="ceremony__map">
            <iframe
              src={venue.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da cerimônia — Villa Vezzane"
            />
          </div>

          {/* Venue photo */}
          <div className="ceremony__photo">
            <Image
              src={venue.photo}
              alt={`${venue.name} — local da cerimônia`}
              width={900}
              height={600}
              quality={85}
              sizes="(max-width: 900px) 100vw, 450px"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Venue details */}
        <div className="ceremony__details reveal">
          <h3 className="ceremony__venue-name">{venue.name}</h3>
          <p className="ceremony__venue-address">{venue.address}</p>
          <div className="ceremony__venue-divider" />
          <p className="ceremony__venue-date">{venue.date}</p>
          <p className="ceremony__venue-time">{venue.time}</p>

          {/* Observations */}
          <div className="ceremony__observations">
            {venue.observations.map((obs, i) => (
              <div
                key={obs.text}
                className="ceremony__obs-card reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <span className="ceremony__obs-icon">{obs.icon}</span>
                <p className="ceremony__obs-text">{obs.text}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealObserver>
    </section>
  );
}
