"use client";

import { useState } from "react";
import { contact } from "../data/contact";

const industries = [
  "Dairy",
  "Food & Beverage",
  "Starch",
  "Sugar",
  "Effluent / Waste Water",
  "Distillery",
  "Pulp & Paper",
  "Chemical",
  "Pharmaceutical",
  "Textile",
  "Other",
];

const inputClass =
  "peer w-full rounded-[12px] border border-[#dfe3ea] bg-white px-4 pb-2.5 pt-6 text-[15px] text-[#262d3b] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-transparent focus:border-brand focus:shadow-[0_0_0_4px_rgba(229,43,47,0.1)]";

const labelClass =
  "pointer-events-none absolute left-4 top-4 origin-left text-[14px] text-[#7a8292] transition-all duration-200 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]";

function Field({ name, label, type = "text", required, autoComplete }) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={label}
        className={inputClass}
      />
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
    </div>
  );
}

function InfoRow({ icon, title, children }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">{title}</span>
        <span className="mt-1 block text-[15px] leading-relaxed text-white">{children}</span>
      </span>
    </li>
  );
}

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  // No backend yet: hand the enquiry to the visitor's mail app, addressed to SVAAR.
  // Swap this for an API route / form service when one is available.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company || "-"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Industry: ${data.industry || "-"}`,
      "",
      data.message,
    ].join("\n");
    const subject = `Project enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f3f5f8] py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(#e6e9ef_1px,transparent_1px),linear-gradient(90deg,#e6e9ef_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        <div
          className="grid overflow-hidden rounded-[24px] bg-white shadow-[0_30px_60px_-30px_rgba(20,28,45,0.25)] lg:grid-cols-[0.85fr_1.15fr]"
          data-aos="fade-up"
        >
          {/* ---------- Left: red info panel ---------- */}
          <div className="relative overflow-hidden bg-[linear-gradient(140deg,#ec3a3e_0%,#d9252a_55%,#b81b20_100%)] px-7 py-10 md:px-12 md:py-14">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(-60deg,#fff_0_1px,transparent_1px_26px)]" />
            <span className="pointer-events-none absolute -right-6 top-0 h-full w-[160px] bg-white/10 [clip-path:polygon(60%_0,100%_0,40%_100%,0_100%)]" />

            <div className="relative flex h-full flex-col">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">Have a project in mind?</p>
              <h2 className="mt-3 text-[30px] font-bold leading-[1.15] text-white sm:text-[36px] lg:text-[40px]">
                Let&apos;s engineer your next plant.
              </h2>
              <p className="mt-4 max-w-[380px] text-[15px] leading-[1.7] text-white/85">
                Share a few details about your process and our engineers will get back to you within one working day.
              </p>

              <ul className="mt-10 space-y-6 lg:mt-auto lg:pt-10">
                <InfoRow title="Call Us" icon={<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />}>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:underline">{contact.phone}</a>
                </InfoRow>
                <InfoRow title="Email Us" icon={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>}>
                  <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
                </InfoRow>
                <InfoRow title="Visit Us" icon={<><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></>}>
                  {contact.address}
                </InfoRow>
              </ul>
            </div>
          </div>

          {/* ---------- Right: form ---------- */}
          <div className="px-7 py-10 md:px-12 md:py-14">
            <h3 className="text-[22px] font-bold text-[#262d3b] sm:text-[26px]">Send us an enquiry</h3>
            <span className="mt-3 block h-[2px] w-10 bg-brand" />

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Full Name" required autoComplete="name" />
              <Field name="company" label="Company" autoComplete="organization" />
              <Field name="email" label="Email Address" type="email" required autoComplete="email" />
              <Field name="phone" label="Phone Number" type="tel" autoComplete="tel" />

              <div className="relative sm:col-span-2">
                <select
                  id="industry"
                  name="industry"
                  defaultValue=""
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="">Select…</option>
                  {industries.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
                <label htmlFor="industry" className="pointer-events-none absolute left-4 top-2 text-[11px] text-[#7a8292]">
                  Industry
                </label>
                <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7a8292]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project"
                  className={`${inputClass} resize-none`}
                />
                <label htmlFor="message" className={labelClass}>
                  Tell us about your project<span className="text-brand"> *</span>
                </label>
              </div>

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] text-[#7a8292]" aria-live="polite">
                  {sent ? (
                    <span className="font-medium text-[#1f8a4c]">Thanks! Your mail app should open with the enquiry ready to send.</span>
                  ) : (
                    "Fields marked * are required."
                  )}
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 self-start rounded-full bg-brand py-2 pl-7 pr-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_-12px_rgba(229,43,47,0.7)] transition-colors hover:bg-brand-dark sm:self-auto"
                >
                  Send Enquiry
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
