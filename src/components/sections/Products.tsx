"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Package,
  Scissors,
  Boxes,
  Truck,
  ArrowUpRight,
  Layers,
  Factory,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/utils";

const PRODUCTS = [
  {
    icon: Package,
    name: "Bolsas plásticas",
    description:
      "Bolsas de polietileno de alta y baja densidad, transparentes o impresas, en todos los calibres y dimensiones.",
    image:
      "/images/products/bolsas.jpg",
    features: ["Calibre 1.5 — 6", "Impresión hasta 6 tintas", "Sellado térmico"],
    category: "FABRICACIÓN",
    accent: "from-electric to-electric-glow",
  },
  {
    icon: Scissors,
    name: "Rollos para corte",
    description:
      "Rollos plásticos industriales para corte automático con bobinado uniforme y tensión controlada.",
    image:
      "/images/products/rollos.jpg",
    features: ["Anchos personalizados", "Núcleo reforzado", "Bobinado preciso"],
    category: "INDUSTRIAL",
    accent: "from-electric-glow to-electric",
  },
  {
    icon: Boxes,
    name: "Empaques industriales",
    description:
      "Soluciones de empaque para alimentos, agroindustria, manufactura y exportación con grado alimenticio.",
    image:
      "/images/products/empaques.jpg",
    features: ["Grado alimenticio", "Alta resistencia", "Personalización total"],
    category: "PROFESIONAL",
    accent: "from-electric to-electric-glow",
  },
  {
    icon: Truck,
    name: "Distribución mayorista",
    description:
      "Logística directa al cliente final con flotas propias en toda la Costa Caribe y centro del país.",
    image:
      "/images/products/distribucion.jpg",
    features: ["Entregas en 24h", "Costa Caribe", "Pedidos al por mayor"],
    category: "LOGÍSTICA",
    accent: "from-electric-glow to-electric",
  },
  {
    icon: Layers,
    name: "Empaque personalizado",
    description:
      "Diseño y producción de empaques con tu marca, hasta 6 tintas con impresión flexográfica de alta definición.",
    image:
      "/images/products/personalizado.png",
    features: ["Diseño con tu marca", "6 tintas", "Producción a medida"],
    category: "BRANDING",
    accent: "from-electric to-electric-glow",
  },
  {
    icon: Factory,
    name: "Producción a medida",
    description:
      "Fabricamos según especificación: medida, calibre, color, material y volumen para industria y comercio.",
    image:
      "/images/products/medidas.jpg",
    features: ["Especificación a medida", "Material certificado", "Volúmenes altos"],
    category: "OEM",
    accent: "from-electric-glow to-electric",
  },
];

export function Products() {
  return (
    <section id="productos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon-100 to-carbon" />
      <div className="absolute inset-0 bg-grid-industrial opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow-electric opacity-20 blur-3xl pointer-events-none" />

      <Container size="full" className="relative">
        <SectionHeader
          number="01"
          eyebrow="Líneas de producto"
          title={
            <>
              Catálogo industrial{" "}
              <span className="text-gradient-electric">completo</span>
            </>
          }
          description="Producción y distribución de soluciones plásticas para industria, comercio y agroindustria — con capacidad para cubrir grandes volúmenes y pedidos personalizados."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <a
                  href={whatsappLink(
                    `Hola, me interesa cotizar: ${product.name}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-full glass-industrial rounded-2xl overflow-hidden transition-all duration-500 hover:border-electric/40 hover:-translate-y-1"
                >
                  {/* Product image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${product.accent} opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500`}
                    />

                    {/* Category tag */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 glass-industrial rounded-full px-3 py-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-glow animate-pulse" />
                      <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-platinum">
                        {product.category}
                      </span>
                    </div>

                    {/* Hover CTA */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-industrial flex items-center justify-center transition-all duration-500 group-hover:bg-electric group-hover:border-electric group-hover:scale-110">
                      <ArrowUpRight
                        size={16}
                        className="text-platinum transition-transform group-hover:rotate-12"
                      />
                    </div>

                    {/* Bottom icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-carbon/80 backdrop-blur-xl border border-electric/30 flex items-center justify-center shadow-glow-sm">
                      <Icon size={22} className="text-electric-glow" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl lg:text-2xl text-platinum tracking-tight">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-steel-300 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-electric/10 text-electric-glow border border-electric/20 font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-glow">
                        <WhatsAppIcon size={14} />
                        Cotizar
                      </span>
                      <span className="font-mono text-[10px] text-steel-500">
                        NF-0{i + 1}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-steel-300 text-sm mb-4">
            ¿Necesitas algo específico? Fabricamos a medida.
          </p>
          <a
            href={whatsappLink(
              "Hola, necesito un producto a medida. Quisiera asesoría."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-platinum font-semibold border-b border-electric pb-1 hover:gap-3 transition-all"
          >
            Habla con un especialista
            <ArrowUpRight size={16} className="text-electric-glow" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
