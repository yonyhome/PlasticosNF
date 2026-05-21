"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TESTIMONIALS = [
  {
    quote:
      "Plásticos NF se ha convertido en un proveedor estratégico. La calidad de sus rollos para corte y la puntualidad en las entregas nos permite mantener nuestra línea de producción sin interrupciones.",
    name: "Carlos Andrés Pérez",
    role: "Director de Operaciones",
    company: "Alimentos del Caribe",
    initials: "CP",
    rating: 5,
  },
  {
    quote:
      "Su capacidad para producir empaques personalizados con nuestra marca, en grandes volúmenes y con calidad consistente, ha sido clave para el crecimiento de nuestra distribución regional.",
    name: "María Fernanda Ríos",
    role: "Gerente de Compras",
    company: "Distribuciones Tropical",
    initials: "MR",
    rating: 5,
  },
  {
    quote:
      "Llevamos más de 8 años trabajando juntos. Su asesoría técnica y la flexibilidad para ajustar la producción a nuestras necesidades específicas los hace únicos en el mercado.",
    name: "Juan Sebastián Mejía",
    role: "Director Industrial",
    company: "Agrocar S.A.S.",
    initials: "JM",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-carbon-100">
      <div className="absolute inset-0 bg-dots-industrial opacity-25" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px] bg-glow-electric opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-glow-electric opacity-20 blur-3xl pointer-events-none" />

      <Container size="full" className="relative">
        <SectionHeader
          number="07"
          eyebrow="Testimonios"
          title={
            <>
              La voz de{" "}
              <span className="text-gradient-electric">nuestros clientes</span>
            </>
          }
          description="Empresas líderes confían en Plásticos NF para sus operaciones de empaque industrial. Estas son sus experiencias."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="relative h-full glass-industrial rounded-2xl p-7 lg:p-8 transition-all duration-500 hover:border-electric/30 hover:-translate-y-1">
                {/* Quote icon */}
                <Quote
                  size={36}
                  className="text-electric/30 mb-4"
                  strokeWidth={1.5}
                />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-electric-glow"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm lg:text-base text-steel-200 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-electric to-electric-700 flex items-center justify-center shadow-glow-sm shrink-0">
                    <span className="text-sm font-bold text-white">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-sm text-platinum truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-steel-400 truncate">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-electric opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
