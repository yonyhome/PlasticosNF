"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  Apple,
  ShoppingBag,
  Construction,
  Beef,
  Pill,
  Factory,
  Fish,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SECTORS = [
  { icon: Wheat, name: "Agroindustria", clients: "120+" },
  { icon: Apple, name: "Alimentos", clients: "85+" },
  { icon: ShoppingBag, name: "Retail", clients: "150+" },
  { icon: Construction, name: "Construcción", clients: "40+" },
  { icon: Beef, name: "Cárnicos", clients: "30+" },
  { icon: Pill, name: "Farmacéutico", clients: "25+" },
  { icon: Factory, name: "Manufactura", clients: "60+" },
  { icon: Fish, name: "Pesquero", clients: "35+" },
];

const CLIENT_LOGOS = [
  "AGROCAR",
  "ALIMENTOS DEL CARIBE",
  "EMPACOR",
  "INDUSTRIAS DEL NORTE",
  "DISTRIBUCIONES NF",
  "GRUPO TROPICAL",
  "POSTOBÓN",
  "INDUSTRIAS COSTA",
  "BARRANQUILLA AGRO",
  "DEL CARIBE FOODS",
];

export function Sectors() {
  return (
    <section id="sectores" className="relative py-24 lg:py-32 overflow-hidden bg-carbon">
      <div className="absolute inset-0 bg-grid-industrial opacity-15" />

      <Container size="full" className="relative">
        <SectionHeader
          number="06"
          eyebrow="Sectores que servimos"
          title={
            <>
              Confianza en{" "}
              <span className="text-gradient-electric">cada industria</span>
            </>
          }
          description="Soluciones de empaque adaptadas para los sectores más exigentes del país. Más de 500 empresas confían en nuestros productos."
        />

        {/* Sectors grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {SECTORS.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="glass-industrial rounded-2xl p-6 lg:p-7 text-center transition-all duration-500 hover:border-electric/40 hover:-translate-y-1">
                  <div className="relative mx-auto w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-electric/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl glass-card border border-electric/20 flex items-center justify-center group-hover:border-electric/60 transition-colors">
                      <Icon size={28} className="text-electric-glow" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-platinum">
                    {sector.name}
                  </h3>
                  <p className="mt-1 text-xs text-steel-400">
                    <span className="text-electric-glow font-semibold">
                      {sector.clients}
                    </span>{" "}
                    clientes
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-center text-xs tracking-[0.3em] uppercase text-steel-400 mb-8">
            — Empresas que confían en nosotros —
          </p>
          <div className="relative mask-fade-r overflow-hidden">
            <div className="flex gap-12 animate-scroll-x w-max">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="flex items-center justify-center px-8 py-4 whitespace-nowrap"
                >
                  <span className="font-display font-bold text-lg lg:text-2xl tracking-wider text-steel-400 hover:text-platinum transition-colors duration-300 cursor-default">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
