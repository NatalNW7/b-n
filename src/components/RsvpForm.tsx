"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
}

interface FormErrors {
  name?: string;
  submit?: string;
}

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
}

function sanitizeName(value: string): string {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "").slice(0, 50);
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name || data.name.trim().length < 10) {
    errors.name = "Por favor, insira seu nome completo.";
  }
  return errors;
}

export default function RsvpForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(field: keyof FormData, value: string | number | boolean) {
    const sanitized = field === "name" ? sanitizeName(value as string) : value;
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (field in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: toTitleCase(formData.name.trim()),
          attending: true,
        }),
      });

      if (!res.ok) {
        throw new Error("Falha ao enviar confirmação.");
      }

      setSubmitted(true);
    } catch {
      setErrors({ submit: "Erro ao enviar. Tente novamente." });
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rsvp__confirmation">
        <span className="rsvp__confirmation-icon">💛</span>
        <h3 className="rsvp__confirmation-title">Obrigado!</h3>
        <p className="rsvp__confirmation-text">
          Sua presença foi confirmada. Mal podemos esperar!
          <br />
          Atualize a página para confirmar a presença de mais alguém.
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
          maxLength={50}
          disabled={loading}
        />
        {errors.name && <span className="rsvp__error">{errors.name}</span>}
      </div>


      {/* Submit error */}
      {errors.submit && (
        <p className="rsvp__error rsvp__error--submit">{errors.submit}</p>
      )}

      {/* Submit */}
      <button type="submit" className="rsvp__submit" disabled={loading}>
        {loading ? "Enviando..." : "Confirmar"}
      </button>
    </form>
  );
}

