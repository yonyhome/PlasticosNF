"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL, COMPANY } from "@/lib/constants";

const BENEFITS = [
  "Respuesta en menos de 30 minutos",
  "Asesoría técnica especializada",
  "Cotización personalizada según tu volumen",
  "Muestras y catálogo disponibles",
];

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-carbon">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/85 to-carbon" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-transparent to-carbon" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-electric opacity-40 blur-3xl pointer-events-none animate-pulse-glow" />

      <Container size="full" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-industrial rounded-[2rem] lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Inner background mesh */}
          <div className="absolute inset-0 bg-grid-industrial opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/30 rounded-full blur-3xl pointer-events-none" />

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-electric/30" />
          <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-electric/30" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-electric/30" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-electric/30" />

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 glass-card rounded-full px-4 py-2 mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-electric opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-electric-glow" />
                </span>
                <span className="text-[11px] tracking-[0.25em] font-medium uppercase text-platinum">
                  Listos para producir
                </span>
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-platinum leading-[0.95] tracking-tightest">
                Cotiza tu próximo{" "}
                <span className="text-gradient-electric">empaque</span> en minutos
              </h2>

              <p className="mt-5 lg:mt-6 text-base lg:text-lg text-steel-200 leading-relaxed max-w-xl">
                Cuéntanos qué necesitas. Un asesor te contactará para ofrecerte la mejor solución industrial, con la calidad y los tiempos que tu operación necesita.
              </p>

              <ul className="mt-8 space-y-3">
                {BENEFITS.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-steel-100"
                  >
                    <span className="w-5 h-5 rounded-full bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="#00A6FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="electric"
                    size="lg"
                    icon={<WhatsAppIcon size={20} />}
                    iconPosition="left"
                    fullWidth
                    className="w-full sm:w-auto"
                  >
                    Cotizar ahora por WhatsApp
                  </Button>
                </a>
                <a href={`tel:${COMPANY.phone}`}>
                  <Button
                    variant="glass"
                    size="lg"
                    icon={<Phone size={18} />}
                    iconPosition="left"
                    fullWidth
                    className="w-full sm:w-auto"
                  >
                    Llamar ahora
                  </Button>
                </a>
              </div>
            </div>

            {/* Stats card */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Floating cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative glass-industrial rounded-2xl p-6 industrial-scanline overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-electric-glow font-medium">
                        Tiempo promedio
                      </p>
                      <p className="text-xs text-steel-400 mt-1">de respuesta</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-electric/10 border border-electric/30 flex items-center justify-center">
                      <WhatsAppIcon size={20} className="text-electric-glow" />
                    </div>
                  </div>

                  <p className="font-display font-extrabold text-7xl text-platinum leading-none tracking-tightest">
                    {"<"}30
                    <span className="text-3xl text-electric-glow ml-1">min</span>
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="glass-card rounded-xl p-4">
                      <p className="font-display font-bold text-2xl text-platinum">
                        24h
                      </p>
                      <p className="text-[10px] text-steel-400 mt-1 uppercase tracking-wider">
                        Entrega muestras
                      </p>
                    </div>
                    <div className="glass-card rounded-xl p-4">
                      <p className="font-display font-bold text-2xl text-platinum">
                        500+
                      </p>
                      <p className="text-[10px] text-steel-400 mt-1 uppercase tracking-wider">
                        Clientes activos
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 hidden sm:block"
                >
                  <div className="glass-industrial rounded-2xl p-4 flex items-center gap-3 shadow-cinematic">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-electric-700 flex items-center justify-center">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-platinum">
                        Soporte directo
                      </p>
                      <p className="text-[10px] text-steel-400">
                        Lun — Vie · 7am — 5pm
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
