"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL, STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-carbon"
    >
      {/* Background image — industrial facility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Planta industrial Plásticos NF — extrusoras y rollos"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110"
          quality={90}
        />
        {/* Cinematic dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/85 to-carbon" />
        <div className="absolute inset-0 bg-gradient-to-tr from-carbon via-carbon/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-electric-900/30 via-transparent to-transparent mix-blend-overlay" />
      </div>

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 z-0 bg-grid-industrial opacity-30 mask-fade-b" />

      {/* Electric glow accents */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-glow-electric opacity-40 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-glow-electric opacity-30 blur-3xl pointer-events-none" />

      {/* Industrial scan line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-electric-glow/60 to-transparent opacity-50" />

      {/* Side decorations - vertical text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
        <span className="text-[10px] tracking-[0.4em] uppercase text-steel-400 writing-mode-vertical [writing-mode:vertical-rl] [transform:rotate(180deg)]">
          NF · 2008 — {new Date().getFullYear()}
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-electric to-transparent" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
        <div className="w-px h-16 bg-gradient-to-t from-electric to-transparent" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-steel-400 [writing-mode:vertical-rl]">
          BARRANQUILLA · COLOMBIA
        </span>
      </div>

      <Container size="full" className="relative z-10 flex-1 flex flex-col justify-center py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 glass-industrial rounded-full px-4 py-2 mb-8"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-electric opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-electric-glow" />
              </span>
              <span className="text-[11px] tracking-[0.25em] font-medium uppercase text-steel-100">
                Fabricación industrial · Barranquilla
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-extrabold text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] tracking-tightest text-platinum"
            >
              Soluciones en{" "}
              <span className="relative inline-block">
                <span className="text-gradient-electric">empaques</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 5C50 2 100 7 198 3"
                    stroke="url(#hero-line)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00A6FF" stopOpacity="0" />
                      <stop offset="50%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#00A6FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              <br className="hidden sm:block" />
              plásticos industriales
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-steel-200 max-w-2xl leading-relaxed"
            >
              Fabricación y distribución de bolsas plásticas, rollos industriales y soluciones de empaque{" "}
              <span className="text-platinum font-medium">al por mayor y detal</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="electric"
                  size="lg"
                  icon={<WhatsAppIcon size={20} />}
                  iconPosition="left"
                  fullWidth
                  className="w-full sm:w-auto"
                >
                  Cotizar por WhatsApp
                </Button>
              </a>
              <a href="#productos">
                <Button
                  variant="glass"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  fullWidth
                  className="w-full sm:w-auto"
                >
                  Ver productos
                </Button>
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 lg:mt-14 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-electric to-electric-700 ring-2 ring-carbon flex items-center justify-center"
                  >
                    <span className="text-[10px] font-bold text-white">
                      {["CO", "MA", "JS", "RP"][i - 1]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-platinum">
                  +500 empresas confían en nosotros
                </span>
                <span className="text-xs text-steel-400">
                  Sectores agroindustria, alimentos, retail y construcción
                </span>
              </div>
            </motion.div>
          </div>

          {/* Stats card - right */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative glass-industrial rounded-3xl p-6 industrial-scanline">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-electric-glow font-medium">
                    Capacidad industrial
                  </p>
                  <p className="text-xs text-steel-400 mt-1">
                    Tiempo real · Planta 01
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-electric-glow shadow-glow-sm animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="relative"
                  >
                    <p className="font-display font-extrabold text-3xl text-platinum leading-none tracking-tight">
                      {stat.value}
                      <span className="text-electric-glow">{stat.suffix}</span>
                    </p>
                    <p className="text-xs text-steel-300 mt-2 leading-tight">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Production indicator */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-steel-400">Línea de producción</span>
                  <span className="text-electric-glow font-mono font-medium">
                    98.4%
                  </span>
                </div>
                <div className="mt-2 h-1 bg-carbon-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "98.4%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-electric to-electric-glow"
                  />
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>

      {/* Mobile stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="lg:hidden relative z-10 mx-5 sm:mx-6 -mt-4 mb-8"
      >
        <div className="glass-industrial rounded-2xl p-5 grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-extrabold text-2xl text-platinum leading-none tracking-tight">
                {stat.value}
                <span className="text-electric-glow">{stat.suffix}</span>
              </p>
              <p className="text-[11px] text-steel-300 mt-2 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-steel-400"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Descubre</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
