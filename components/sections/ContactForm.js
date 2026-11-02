"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";

const serviceOptions = [
  { label: "Visa services", value: "visa" },
  { label: "Flight tickets", value: "flights" },
  { label: "Hotel booking", value: "hotels" },
  { label: "Car rental", value: "cars" },
];

const emptyForm = { name: "", email: "", service: "visa", message: "" };

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Write at least 10 characters.";
  return errors;
};

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setValues(emptyForm);
    }
  };

  if (sent) {
    return (
      <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
        <CheckCircle2 className="h-14 w-14 text-sky" />
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">Message sent</h3>
        <p className="mt-2 max-w-xs text-sm text-ink/70">An advisor will reply to your email within one working day.</p>
        <Button variant="dark" className="mt-6" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field name="name" label="Full name" placeholder="Your name" value={values.name} onChange={handleChange} error={errors.name} />
      <Field name="email" type="email" label="Email" placeholder="you@example.com" value={values.email} onChange={handleChange} error={errors.email} />
      <Field name="service" type="select" label="Service" options={serviceOptions} value={values.service} onChange={handleChange} className="sm:col-span-2" />
      <Field name="message" type="textarea" label="Message" placeholder="Where and when do you want to travel?" value={values.message} onChange={handleChange} error={errors.message} className="sm:col-span-2" />
      <Button type="submit" className="sm:col-span-2">
        <Send className="h-4 w-4" />
        Send message
      </Button>
    </form>
  );
}
