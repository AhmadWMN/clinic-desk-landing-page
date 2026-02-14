import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type { Direction, LandingContent } from "../lib/i18n";

interface ModalFormProps {
  isOpen: boolean;
  direction: Direction;
  content: LandingContent["form"];
  onClose: () => void;
}

interface FormData {
  fullName: string;
  clinicName: string;
  contact: string;
  message: string;
}

const initialForm: FormData = {
  fullName: "",
  clinicName: "",
  contact: "",
  message: "",
};

function isValidPhone(value: string) {
  const trimmed = value.trim();
  const phoneRegex = /^\+?[0-9()\-\s]{7,}$/;
  return phoneRegex.test(trimmed);
}

export default function ModalForm({
  isOpen,
  direction,
  content,
  onClose,
}: ModalFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  const requiredMissing = useMemo(() => {
    return !form.fullName.trim() || !form.contact.trim();
  }, [form]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setForm(initialForm);
    setError("");
    setSubmitted(false);
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 25);

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onEsc);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (requiredMissing) {
      setError(content.validationRequired);
      return;
    }

    if (!isValidPhone(form.contact)) {
      setError(content.validationContact);
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label={content.close}
        className="absolute inset-0 bg-slate-900/50"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-form-title"
        lang={direction === "rtl" ? "ar" : "en"}
        dir={direction}
        className={`relative z-10 w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-7 ${textAlign}`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          style={direction === "rtl" ? { left: "0.75rem" } : { right: "0.75rem" }}
          aria-label={content.close}
        >
          X
        </button>

        {!submitted ? (
          <>
            <h2 id="demo-form-title" className="text-2xl font-semibold text-slate-900">
              {content.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{content.subtitle}</p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="fullName">
                  {content.fullName} *
                </label>
                <input
                  ref={firstInputRef}
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, fullName: event.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="clinicName">
                  {content.clinicName}
                </label>
                <input
                  id="clinicName"
                  name="clinicName"
                  type="text"
                  value={form.clinicName}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, clinicName: event.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="contact">
                  {content.contact} *
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={form.contact}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, contact: event.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="message">
                  {content.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
              </div>

              {error ? (
                <p className="rounded-md bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-lg bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
              >
                {content.submit}
              </button>
            </form>
          </>
        ) : (
          <div className="py-4">
            <h2 className="text-2xl font-semibold text-slate-900">{content.successTitle}</h2>
            <p className="mt-3 text-sm text-slate-600">{content.successMessage}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setError("");
                  setSubmitted(false);
                  firstInputRef.current?.focus();
                }}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                {content.submitAnother}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
              >
                {content.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
