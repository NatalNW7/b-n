import RsvpForm from "./RsvpForm";

export default function RsvpSection() {
  return (
    <section className="rsvp" id="rsvp">
      <div className="section-header">
        <p className="section-label">Presença</p>
        <div className="section-divider" />
        <h2 className="section-title">Confirme sua Presença</h2>
        <p className="section-description">
          Será uma alegria enorme contar com você nesse dia tão especial.
        </p>
      </div>
      <RsvpForm />
    </section>
  );
}
