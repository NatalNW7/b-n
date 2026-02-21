export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p
          className="hero__pretext animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          SAVE THE DATE
        </p>

        <h1
          className="hero__title animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="hero__name">Bárbara</span>
          <span className="hero__ampersand">&amp;</span>
          <span className="hero__name">Natanael</span>
        </h1>

        <div
          className="hero__divider animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        />

        <p
          className="hero__date animate-fade-up"
          style={{ animationDelay: "1.0s" }}
        >
          07 de Setembro de 2026
        </p>

        <p
          className="hero__subtitle animate-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e os dois se tornarão uma só carne.
        </p>
        <p
          className="hero__subtitle animate-fade-up"
          style={{ animationDelay: "1.4s" }}
        >
          Gênesis 2:24
        </p>
      </div>
    </header>
  );
}
