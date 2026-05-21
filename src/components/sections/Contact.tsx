"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { useState } from "react";
import { whatsappLink } from "@/lib/utils";

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
    phone: "",
    product: "Bolsas plásticas",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.name}${
      form.company ? ` de ${form.company}` : ""
    }.
Teléfono: ${form.phone}
Producto: ${form.product}
${form.message ? `Detalles: ${form.message}` : ""}`;
    window.open(whatsappLink(msg), "_blank");
  };

  const inputCls =
    "w-full bg-carbon-100/50 border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-platinum placeholder:text-steel-500 focus:outline-none focus:border-electric/50 focus:ring-2 focus:ring-electric/20 transition-all";

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
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative glass-industrial rounded-3xl p-7 lg:p-10">
              <div className="mb-7">
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-platinum tracking-tight">
                  Solicita una cotización
                </h3>
                <p className="mt-2 text-sm text-steel-300">
                  Completa el formulario y recibe tu cotización por WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Juan Pérez"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Nombre de tu empresa"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+57 300 000 0000"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                      Producto de interés *
                    </label>
                    <select
                      required
                      value={form.product}
                      onChange={(e) =>
                        setForm({ ...form, product: e.target.value })
                      }
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
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-steel-400 mb-2">
                    Detalles del requerimiento
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Volumen aproximado, dimensiones, calibre, frecuencia de pedido..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    variant="electric"
                    size="lg"
                    fullWidth
                    icon={<Send size={18} />}
                  >
                    Enviar por WhatsApp
                  </Button>
                  <p className="mt-3 text-xs text-steel-400 text-center">
                    Al enviar, serás redirigido a WhatsApp para confirmar tu cotización.
                  </p>
                </div>
              </form>
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
                background:
                  "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
              }}
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <WhatsAppIcon size={28} className="text-white" />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-medium">
                  Recomendado
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                Cotiza por WhatsApp
              </h3>
              <p className="mt-2 text-sm text-white/90 leading-relaxed">
                La forma más rápida. Respuesta inmediata en horario laboral.
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
