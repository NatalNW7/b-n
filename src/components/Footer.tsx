import Countdown from "./Countdown";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="section-label">FALTAM</p>
      <Countdown />
      <div className="footer__ornament" />
      <p className="footer__text">
        Feito com <span className="footer__heart">♥</span> por Bárbara &amp; Natanael
      </p>
      <p className="footer__subtext">
        Obrigado por fazer parte deste momento especial
      </p>
    </footer>
  );
}
