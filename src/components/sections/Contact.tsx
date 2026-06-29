"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const CONTACT_METHODS = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: COMPANY.address,
    sub: "Planta principal",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: COMPANY.phone,
    sub: "Lun — Vie · 7am — 5pm",
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: Mail,
    label: "Correo",
    value: COMPANY.email,
    sub: "Respuesta en 24h",
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Clock,
    label: "Horario",
    value: COMPANY.hours,
    sub: "Producción 24/7",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "Bolsas plásticas",
    message: "",
    website: "", // honeypot — must stay empty
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({ ok: false }));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "No pudimos enviar tu solicitud");
      }

      // Fire Google Ads conversion (function is defined globally by GoogleAnalytics component)
      if (typeof window !== "undefined" && typeof (window as unknown as { gtag_report_conversion?: () => void }).gtag_report_conversion === "function") {
        (window as unknown as { gtag_report_conversion: () => void }).gtag_report_conversion();
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "Bolsas plásticas",
      message: "",
      website: "",
    });
    setStatus("idle");
    setErrorMsg("");
  };

  const inputCls =
    "w-full bg-carbon-100/50 border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-platinum placeholder:text-steel-500 focus:outline-none focus:border-electric/50 focus:ring-2 focus:ring-electric/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const isDisabled = status === "loading";

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden bg-carbon">
      <div className="absolute inset-0 bg-grid-industrial opacity-20" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-glow-electric opacity-25 blur-3xl pointer-events-none" />

      <Container size="full" className="relative">
        <SectionHeader
          number="08"
          eyebrow="Contacto directo"
          title={
            <>
              Hablemos de tu{" "}
              <span className="text-gradient-electric">próximo proyecto</span>
            </>
          }
          description="Resolvemos tus dudas, te asesoramos técnicamente y preparamos una propuesta a la medida de tu operación."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Form / Success state */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative glass-industrial rounded-3xl p-7 lg:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow-electric"
                    >
                      <CheckCircle2 size={40} className="text-white" strokeWidth={2.5} />
                    </motion.div>

                    <h3 className="mt-6 font-display font-bold text-3xl lg:text-4xl text-platinum tracking-tight">
                      ¡Solicitud recibida!
                    </h3>
                    <p className="mt-3 text-base text-steel-300 max-w-md mx-auto leading-relaxed">
                      Te enviamos un correo de confirmación. Nuestro equipo comercial te contactará en las{" "}
                      <span className="text-electric-glow font-semibold">próximas horas hábiles</span> con tu propuesta personalizada.
                    </p>

                    <div className="mt-8 inline-flex flex-col sm:flex-row gap-3">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                        style={{
                          background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
                        }}
                      >
                        <WhatsAppIcon size={18} className="text-white" />
                        ¿Es urgente? Continuar por WhatsApp
                      </a>
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-steel-300 border border-white/[0.08] hover:border-electric/40 hover:text-platinum transition-all"
                      >
                        Enviar otra solicitud
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="mb-7">
                      <h3 className="font-display font-bold text-2xl lg:text-3xl text-platinum tracking-tight">
                        Solicita una cotización
                      </h3>
                      <p className="mt-2 text-sm text-steel-300">
                        Completa el formulario. Te respondemos por correo en las próximas horas.
                      </p>
                    </div>

                    {/* Honeypot — hidden from real users */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        width: 1,
                        height: 1,
                        overflow: "hidden",
                      }}
                    >
                      <label>
                        Sitio web (no llenar)
                        <input
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={form.website}
                          onChange={(e) => setForm({ ...form, website: e.target.value })}
                        />
                      </label>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
                          disabled={isDisabled}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Juan Pérez"
                          className={inputCls}
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          disabled={isDisabled}
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Nombre de tu empresa"
                          className={inputCls}
                          maxLength={100}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          disabled={isDisabled}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="juan@empresa.com"
                          className={inputCls}
                          maxLength={150}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          required
                          disabled={isDisabled}
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+57 302 428 1733"
                          className={inputCls}
                          maxLength={25}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                        Producto de interés *
                      </label>
                      <select
                        required
                        disabled={isDisabled}
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        className={inputCls}
                      >
                        <option>Bolsas plásticas</option>
                        <option>Rollos para corte</option>
                        <option>Empaques industriales</option>
                        <option>Empaque personalizado</option>
                        <option>Distribución mayorista</option>
                        <option>Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                        Detalles del requerimiento
                      </label>
                      <textarea
                        rows={4}
                        disabled={isDisabled}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Volumen aproximado, dimensiones, calibre, frecuencia de pedido..."
                        className={`${inputCls} resize-none`}
                        maxLength={2000}
                      />
                    </div>

                    {/* Error message */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                        >
                          <AlertCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                          <div className="text-sm">
                            <p className="text-red-300 font-medium">No pudimos enviar tu solicitud</p>
                            <p className="text-red-300/80 text-xs mt-1">
                              {errorMsg}. Intenta de nuevo o contáctanos directamente por{" "}
                              <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline font-semibold"
                              >
                                WhatsApp
                              </a>
                              .
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="pt-3">
                      <Button
                        type="submit"
                        variant="electric"
                        size="lg"
                        fullWidth
                        disabled={isDisabled}
                        icon={
                          status === "loading" ? (
                            <Loader2 size={18} className="animate-spin" />
                          ) : (
                            <Send size={18} />
                          )
                        }
                      >
                        {status === "loading" ? "Enviando..." : "Enviar cotización"}
                      </Button>
                      <p className="mt-3 text-xs text-steel-400 text-center">
                        Te responderemos por correo. Tus datos son tratados con confidencialidad.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* WhatsApp featured card */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
              }}
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <WhatsAppIcon size={28} className="text-white" />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-medium">
                  Respuesta inmediata
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                ¿Necesitas respuesta urgente?
              </h3>
              <p className="mt-2 text-sm text-white/90 leading-relaxed">
                Escríbenos por WhatsApp y te atendemos al instante en horario laboral.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Iniciar conversación
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* Contact methods grid */}
            <div className="grid grid-cols-2 gap-3">
              {CONTACT_METHODS.map((method) => {
                const Icon = method.icon;
                const Wrapper = method.href ? "a" : "div";
                return (
                  <Wrapper
                    key={method.label}
                    href={method.href}
                    className="group glass-industrial rounded-2xl p-5 transition-all hover:border-electric/40 hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-electric-glow" />
                    </div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-steel-400 mb-1">
                      {method.label}
                    </p>
                    <p className="text-sm font-semibold text-platinum leading-tight line-clamp-2">
                      {method.value}
                    </p>
                    <p className="text-xs text-steel-400 mt-1">{method.sub}</p>
                  </Wrapper>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
