export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p
          className="hero__pretext animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Celebre conosco
        </p>

        <h1
          className="hero__title animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="hero__name">Maria</span>
          <span className="hero__ampersand">&amp;</span>
          <span className="hero__name">João</span>
        </h1>

        <div
          className="hero__divider animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        />

        <p
          className="hero__date animate-fade-up"
          style={{ animationDelay: "1.0s" }}
        >
          15 de Março de 2026
        </p>

        <p
          className="hero__subtitle animate-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          Nossa Lista de Presentes
        </p>

        <a
          href="#gifts"
          className="hero__cta animate-fade-up"
          style={{ animationDelay: "1.5s" }}
        >
          Ver Presentes
        </a>
      </div>
    </header>
  );
}
