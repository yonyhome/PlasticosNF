"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-carbon/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "py-5 bg-transparent"
        )}
      >
        <Container size="full">
          <nav className="flex items-center justify-between">
            <a
              href="#inicio"
              className="relative z-10 flex items-center group"
              aria-label="Plásticos NF — Inicio"
            >
              <Logo />
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-steel-300 hover:text-platinum transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-electric group-hover:w-6 transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <Button
                  variant="electric"
                  size="md"
                  icon={<MessageCircle size={16} />}
                >
                  Cotizar
                </Button>
              </a>

              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden relative z-10 w-11 h-11 flex items-center justify-center rounded-full glass-industrial"
                aria-label="Abrir menú"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-carbon/95 backdrop-blur-2xl lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-carbon-100 border-l border-white/[0.06] lg:hidden flex flex-col"
            >
              {/* Mesh grid bg */}
              <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-glow-electric opacity-50 blur-3xl pointer-events-none" />

              <div className="relative flex items-center justify-between p-5 border-b border-white/[0.06]">
                <Logo />
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-11 h-11 flex items-center justify-center rounded-full glass-industrial"
                  aria-label="Cerrar menú"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="relative flex-1 px-6 py-8">
                <div className="mb-6">
                  <span className="text-[10px] tracking-[0.3em] font-medium uppercase text-electric-glow">
                    Navegación
                  </span>
                </div>
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-white/[0.04] text-platinum"
                      >
                        <span className="font-display font-semibold text-2xl tracking-tight">
                          {link.label}
                        </span>
                        <span className="text-electric-glow text-xs font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                          0{i + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="relative p-6 border-t border-white/[0.06] space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="electric"
                    size="lg"
                    fullWidth
                    icon={<MessageCircle size={18} />}
                  >
                    Cotizar por WhatsApp
                  </Button>
                </a>
                <p className="text-xs text-steel-400 text-center">
                  Respuesta en menos de 30 minutos
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
