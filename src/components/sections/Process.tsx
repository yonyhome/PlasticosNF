"use client";

import { motion } from "framer-motion";
import {
  Beaker,
  Cog,
  Printer,
  PackageCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STEPS = [
  {
    number: "01",
    icon: Beaker,
    title: "Selección de materia prima",
    description:
      "Polietileno de alta calidad seleccionado y certificado según norma técnica de cada aplicación industrial.",
    metric: "100%",
    metricLabel: "Materia certificada",
  },
  {
    number: "02",
    icon: Cog,
    title: "Extrusión industrial",
    description:
      "Extrusoras de última generación con control de calibre milimétrico y monitoreo en tiempo real de cada parámetro.",
    metric: "24/7",
    metricLabel: "Producción continua",
  },
  {
    number: "03",
    icon: Printer,
    title: "Impresión flexográfica",
    description:
      "Hasta 6 tintas con registro de alta precisión. Personalización completa del empaque con la imagen de tu marca.",
    metric: "6",
    metricLabel: "Tintas máximas",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Sellado y conversión",
    description:
      "Sellado térmico de precisión, troquelado, perforación y formato según la necesidad del cliente.",
    metric: "±1mm",
    metricLabel: "Tolerancia",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Control de calidad",
    description:
      "Inspección automatizada y muestreo por lote. Cada rollo y empaque cumple con estándares industriales rigurosos.",
    metric: "99.8%",
    metricLabel: "Aprobación",
  },
  {
    number: "06",
    icon: Truck,
    title: "Distribución logística",
    description:
      "Empaquetado para protección durante transporte y entrega directa con flota propia o socios logísticos.",
    metric: "24h",
    metricLabel: "Tiempo entrega",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-24 lg:py-32 overflow-hidden bg-carbon">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-industrial opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-electric opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-electric opacity-15 blur-3xl pointer-events-none" />

      <Container size="full" className="relative">
        <SectionHeader
          number="02"
          eyebrow="Proceso de fabricación"
          title={
            <>
              De materia prima a{" "}
              <span className="text-gradient-electric">producto final</span>
            </>
          }
          description="Un proceso industrial integrado, automatizado y supervisado en cada etapa para garantizar calidad consistente en cada lote."
        />

        <div className="mt-20 relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-[88px] left-1/2 -translate-x-1/2 w-full max-w-5xl h-px">
            <svg
              viewBox="0 0 1000 4"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="2"
                x2="1000"
                y2="2"
                stroke="url(#process-line)"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient id="process-line">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#00A6FF" />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative group"
                >
                  <div className="relative glass-industrial rounded-2xl p-6 lg:p-7 h-full transition-all duration-500 hover:border-electric/40 hover:-translate-y-1 hover:shadow-cinematic">
                    {/* Icon + number */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-electric/20 blur-xl rounded-full" />
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-electric to-electric-700 flex items-center justify-center shadow-glow-sm">
                          <Icon size={24} className="text-white" />
                        </div>
                      </div>
                      <span className="font-display font-extrabold text-5xl text-transparent leading-none tracking-tightest"
                        style={{ WebkitTextStroke: "1px rgba(0, 102, 255, 0.4)" }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-xl lg:text-2xl text-platinum tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-steel-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Metric */}
                    <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-xs text-steel-400">{step.metricLabel}</span>
                      <span className="font-display font-extrabold text-2xl text-electric-glow tracking-tight">
                        {step.metric}
                      </span>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
