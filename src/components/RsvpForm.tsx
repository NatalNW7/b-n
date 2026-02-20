"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  guests: number;
  dietary: string;
  attending: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Por favor, insira seu nome completo.";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Por favor, insira um email válido.";
  }
  return errors;
}

export default function RsvpForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    guests: 1,
    dietary: "",
    attending: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormData, value: string | number | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (field in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Mock: just show confirmation
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rsvp__confirmation">
        <span className="rsvp__confirmation-icon">💛</span>
        <h3 className="rsvp__confirmation-title">Obrigado!</h3>
        <p className="rsvp__confirmation-text">
          Sua presença foi confirmada. Mal podemos esperar!
        </p>
      </div>
    );
  }

  return (
    <form className="rsvp__form" onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div className="rsvp__field">
        <label className="rsvp__label" htmlFor="rsvp-name">Nome</label>
        <input
          id="rsvp-name"
          type="text"
          className={`rsvp__input${errors.name ? " rsvp__input--error" : ""}`}
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Seu nome completo"
        />
        {errors.name && <span className="rsvp__error">{errors.name}</span>}
      </div>

      {/* Email */}
      <div className="rsvp__field">
        <label className="rsvp__label" htmlFor="rsvp-email">Email</label>
        <input
          id="rsvp-email"
          type="email"
          className={`rsvp__input${errors.email ? " rsvp__input--error" : ""}`}
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="seu@email.com"
        />
        {errors.email && <span className="rsvp__error">{errors.email}</span>}
      </div>

      {/* Guest stepper */}
      <div className="rsvp__field">
        <span className="rsvp__label">Acompanhantes</span>
        <div className="rsvp__stepper">
          <button
            type="button"
            className="rsvp__stepper-btn"
            onClick={() => handleChange("guests", Math.max(1, formData.guests - 1))}
            aria-label="Diminuir acompanhantes"
          >
            −
          </button>
          <span className="rsvp__stepper-value">{formData.guests}</span>
          <button
            type="button"
            className="rsvp__stepper-btn"
            onClick={() => handleChange("guests", Math.min(10, formData.guests + 1))}
            aria-label="Aumentar acompanhantes"
          >
            +
          </button>
        </div>
      </div>

      {/* Dietary */}
      <div className="rsvp__field">
        <label className="rsvp__label" htmlFor="rsvp-dietary">Restrições Alimentares</label>
        <textarea
          id="rsvp-dietary"
          className="rsvp__input rsvp__textarea"
          value={formData.dietary}
          onChange={(e) => handleChange("dietary", e.target.value)}
          placeholder="Opcional"
          rows={2}
        />
      </div>

      {/* Attending toggle */}
      <div className="rsvp__field">
        <span className="rsvp__label">Presença</span>
        <div className="rsvp__toggle">
          <button
            type="button"
            className={`rsvp__toggle-option${formData.attending ? " rsvp__toggle-option--active" : ""}`}
            onClick={() => handleChange("attending", true)}
          >
            Sim
          </button>
          <button
            type="button"
            className={`rsvp__toggle-option${!formData.attending ? " rsvp__toggle-option--active" : ""}`}
            onClick={() => handleChange("attending", false)}
          >
            Não
          </button>
        </div>
      </div>

      {/* Submit */}
      <button type="submit" className="rsvp__submit">
        Confirmar
      </button>
    </form>
  );
}
