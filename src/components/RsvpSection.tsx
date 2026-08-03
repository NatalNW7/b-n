import RsvpForm from "./RsvpForm";

export default function RsvpSection() {
  return (
    <section className="rsvp" id="rsvp">
      <div className="section-header">
        <p className="section-label">Presença</p>
        <div className="section-divider" />
        <h2 className="section-title">Lista Encerrada</h2>
        <p className="section-description">
          Agradecemos a todos que confirmaram!
        </p>
      <span className="rsvp__confirmation-icon">✨</span>
      </div>
      <RsvpForm />
    </section>
  );
}
