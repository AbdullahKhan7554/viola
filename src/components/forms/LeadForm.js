"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/TrackedCTA";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { treatments } from "@/content/treatments";

const FIELD =
  "w-full rounded-md border border-line bg-bg px-4 py-3 text-text outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:bg-surface";

function Field({ label, htmlFor, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-text">
        {label}
        {required ? <span className="text-secondary"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-secondary">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Lead / booking form (PRD F13/F15/F24). Client-side inline validation +
 * honeypot, POSTs to /api/lead. On success shows a confirmation; on any
 * failure it gracefully falls back to WhatsApp (PRD reliability requirement).
 */
export default function LeadForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    datetime: "",
    message: "",
    company: "", // honeypot — must stay empty
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const update = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!isValidPhone(values.phone))
      next.phone = "Please enter a valid phone number.";
    if (!isValidEmail(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.treatment) next.treatment = "Please choose a treatment.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      track.formSubmit(values.treatment);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-line bg-surface p-8 text-center shadow-soft">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <Icon name="check" size={30} />
        </span>
        <h3 className="text-2xl">Thank you — we’ve got your request!</h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Our team will reach out shortly to confirm your appointment. For the
          fastest response, you can also message us directly on WhatsApp.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton location="form_success">
            Continue on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-line bg-surface p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={FIELD}
            placeholder="e.g. Ayesha Khan"
          />
        </Field>

        <Field label="Phone / WhatsApp" htmlFor="phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={FIELD}
            placeholder="03XX XXXXXXX"
          />
        </Field>

        <Field label="Email (optional)" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={FIELD}
            placeholder="you@email.com"
          />
        </Field>

        <Field label="Treatment of interest" htmlFor="treatment" required error={errors.treatment}>
          <select
            id="treatment"
            name="treatment"
            value={values.treatment}
            onChange={update}
            aria-invalid={!!errors.treatment}
            aria-describedby={errors.treatment ? "treatment-error" : undefined}
            className={FIELD}
          >
            <option value="">Select a treatment…</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
            <option value="Not sure / consultation">Not sure — I’d like advice</option>
          </select>
        </Field>

        <Field label="Preferred date & time" htmlFor="datetime">
          <input
            id="datetime"
            name="datetime"
            type="text"
            value={values.datetime}
            onChange={update}
            className={FIELD}
            placeholder="e.g. Saturday evening"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Message (optional)" htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={update}
              className={`${FIELD} resize-y`}
              placeholder="Tell us a little about your skin goals…"
            />
          </Field>
        </div>
      </div>

      {/* Honeypot — hidden from users & assistive tech, catches bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update}
        />
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="mt-5 flex flex-col gap-3 rounded-md border border-secondary/40 bg-secondary/10 p-4 text-sm text-primary-dark sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            Something went wrong sending your request. Please message us on
            WhatsApp — we’ll respond quickly.
          </span>
          <WhatsAppButton size="sm" location="form_error">
            WhatsApp us
          </WhatsAppButton>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Request my appointment"}
        </Button>
        <p className="text-xs text-muted">
          By submitting, you agree to be contacted about your enquiry. We never
          share your details.
        </p>
      </div>
    </form>
  );
}
