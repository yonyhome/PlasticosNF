"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  TrendingUp,
  HeadphonesIcon,
  Award,
  Recycle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Calidad certificada",
    description:
      "Materia prima certificada y control de calidad en cada lote. Cumplimos con estándares industriales rigurosos.",
    accent: "Confianza",
  },
  {
    icon: Clock,
    title: "Entregas a tiempo",
    description:
      "Producción planificada y logística propia para garantizar despachos puntuales en toda la Costa Caribe.",
    accent: "Puntualidad",
  },
  {
    icon: TrendingUp,
    title: "Capacidad industrial",
    description:
      "Más de 8 millones de unidades producidas por mes con líneas operando 24/7 para cubrir grandes volúmenes.",
    accent: "Escala",
  },
  {
    icon: HeadphonesIcon,
    title: "Asesoría especializada",
    description:
      "Equipo técnico que te acompaña desde la cotización hasta la entrega, con respuesta menor a 30 minutos.",
    accent: "Servicio",
  },
  {
    icon: Award,
    title: "Más de 15 años",
    description:
      "Trayectoria sólida en la industria del plástico colombiano con presencia en sectores estratégicos.",
    accent: "Experiencia",
  },
  {
    icon: Recycle,
    title: "Producción responsable",
    description:
      "Procesos optimizados para reducción de mermas y compromiso con prácticas industriales sostenibles.",
    accent: "Compromiso",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-carbon">
      <div className="absolute inset-0 bg-grid-industrial opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-electric opacity-20 blur-3xl pointer-events-none" />

      <Container size="full" className="relative">
        <SectionHeader
          number="04"
          eyebrow="Por qué elegirnos"
          title={
            <>
              Un socio industrial{" "}
              <span className="text-gradient-electric">en el que confiar</span>
            </>
          }
          description="Más que un proveedor: un aliado comprometido con el crecimiento de tu negocio y la calidad de cada empaque que producimos."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="relative h-full glass-industrial rounded-2xl p-7 transition-all duration-500 hover:border-electric/40 hover:-translate-y-1 overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Accent label */}
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-electric-glow">
                    / {reason.accent}
                  </span>

                  {/* Icon */}
                  <div className="mt-4 relative w-14 h-14">
                    <div className="absolute inset-0 bg-electric/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-2xl glass-card border border-electric/30 flex items-center justify-center group-hover:border-electric transition-colors">
                      <Icon size={24} className="text-electric-glow" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display font-bold text-xl text-platinum tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-steel-300 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
