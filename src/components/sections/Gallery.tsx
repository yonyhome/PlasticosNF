"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const GALLERY_IMAGES = [
  {
    src: "/images/gallery/01.jpg",
    alt: "Extrusora industrial en operación",
    span: "col-span-2 row-span-2",
    label: "Extrusión",
  },
  {
    src: "/images/gallery/02.jpg",
    alt: "Rollos plásticos industriales",
    span: "col-span-1 row-span-1",
    label: "Bobinado",
  },
  {
    src: "/images/gallery/03.jpg",
    alt: "Impresión flexográfica industrial",
    span: "col-span-1 row-span-1",
    label: "Impresión",
  },
  {
    src: "/images/gallery/04.jpg",
    alt: "Bodega de distribución logística",
    span: "col-span-2 row-span-1",
    label: "Distribución",
  },
  {
    src: "/images/gallery/05.jpg",
    alt: "Empaques industriales terminados",
    span: "col-span-1 row-span-1",
    label: "Empaques",
  },
  {
    src: "/images/gallery/06.jpg",
    alt: "Planta industrial Plásticos NF",
    span: "col-span-1 row-span-1",
    label: "Planta",
  },
];

export function Gallery() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-carbon-100">
      <div className="absolute inset-0 bg-dots-industrial opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-glow-electric opacity-20 blur-3xl pointer-events-none" />

      <Container size="full" className="relative">
        <SectionHeader
          number="05"
          eyebrow="Galería industrial"
          title={
            <>
              Detrás de cada{" "}
              <span className="text-gradient-electric">producto</span>
            </>
          }
          description="Un vistazo a nuestras instalaciones, líneas de producción y procesos industriales que respaldan la calidad de cada entrega."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 grid-rows-[200px_200px_200px] sm:grid-rows-[280px_280px_280px] lg:grid-rows-[280px_280px] gap-3 lg:gap-4">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative ${image.span} group overflow-hidden rounded-2xl glass-industrial cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                quality={80}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Electric border on hover */}
              <div className="absolute inset-0 ring-1 ring-electric/0 group-hover:ring-electric/40 transition-all duration-500 rounded-2xl" />

              {/* Label */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-platinum tracking-wider uppercase">
                  {image.label}
                </span>
                <span className="font-mono text-[10px] text-electric-glow">
                  / 0{i + 1}
                </span>
              </div>

              {/* Scan line decoration on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
