"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Activity, Zap, Gauge, Settings2 } from "lucide-react";

const MACHINES = [
  {
    name: "Extrusora Doble Cabezal",
    code: "EXT-2400",
    description:
      "Tecnología de extrusión con control de espesor en tiempo real y capacidad para producir hasta 350 kg/hora.",
    image:
      "/images/machinery/extrusora.jpg",
    specs: [
      { icon: Activity, label: "Capacidad", value: "350 kg/h" },
      { icon: Gauge, label: "Calibre", value: "1.5 — 6" },
      { icon: Zap, label: "Voltaje", value: "440V" },
      { icon: Settings2, label: "Control", value: "PLC" },
    ],
  },
  {
    name: "Impresora Flexográfica",
    code: "FLX-6T",
    description:
      "Impresión flexográfica de hasta 6 tintas con registro de alta precisión y secado UV de última generación.",
    image:
      "/images/machinery/flexografica.jpg",
    specs: [
      { icon: Activity, label: "Velocidad", value: "300 m/min" },
      { icon: Gauge, label: "Tintas", value: "6 colores" },
      { icon: Zap, label: "Ancho", value: "1.2 m" },
      { icon: Settings2, label: "Registro", value: "±0.1mm" },
    ],
  },
  {
    name: "Selladora Industrial",
    code: "SLD-8X",
    description:
      "Sistema de sellado térmico de alta precisión con control de temperatura programable y conversión automática.",
    image:
      "/images/machinery/selladora.jpg",
    specs: [
      { icon: Activity, label: "Producción", value: "8K/h" },
      { icon: Gauge, label: "Temperatura", value: "300°C" },
      { icon: Zap, label: "Potencia", value: "12 kW" },
      { icon: Settings2, label: "Modo", value: "Auto" },
    ],
  },
];

export function Machinery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      id="maquinaria"
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-carbon-100"
    >
      {/* Background atmosphere */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-grid-industrial opacity-25 pointer-events-none"
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-glow-electric opacity-25 blur-3xl pointer-events-none" />

      <Container size="full" className="relative">
        <SectionHeader
          number="03"
          eyebrow="Maquinaria industrial"
          title={
            <>
              Tecnología que respalda{" "}
              <span className="text-gradient-electric">cada empaque</span>
            </>
          }
          description="Equipos industriales de última generación, mantenimiento preventivo permanente y operadores certificados para garantizar producción continua."
        />

        <div className="mt-20 space-y-16 lg:space-y-24">
          {MACHINES.map((machine, i) => (
            <motion.article
              key={machine.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:col-span-7 [direction:ltr]">
                <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-3xl overflow-hidden glass-industrial group">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    quality={85}
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-900/10 via-transparent to-transparent mix-blend-overlay" />

                  {/* Floating code badge */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 glass-industrial rounded-full px-3.5 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-glow animate-pulse" />
                    <span className="font-mono text-xs tracking-wider text-platinum">
                      {machine.code}
                    </span>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-5 right-5 inline-flex items-center gap-2 bg-electric/90 backdrop-blur-sm rounded-full px-3.5 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-xs font-semibold text-white">
                      Operativa
                    </span>
                  </div>

                  {/* Scan line decoration */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-carbon to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                    <div className="flex-1 h-px bg-gradient-to-r from-electric/0 via-electric to-electric/0" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-5 [direction:ltr]">
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-electric-glow">
                  Equipo / 0{i + 1}
                </span>
                <h3 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-platinum leading-[1.05] tracking-tightest">
                  {machine.name}
                </h3>
                <p className="mt-4 text-base text-steel-300 leading-relaxed">
                  {machine.description}
                </p>

                {/* Specs grid */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {machine.specs.map((spec) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={spec.label}
                        className="glass-card rounded-xl p-4 hover:border-electric/30 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={14} className="text-electric-glow" />
                          <span className="text-[10px] tracking-[0.2em] uppercase text-steel-400 font-medium">
                            {spec.label}
                          </span>
                        </div>
                        <p className="font-display font-bold text-xl text-platinum tracking-tight">
                          {spec.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
