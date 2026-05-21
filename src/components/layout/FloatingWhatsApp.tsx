"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 1200);
    const t2 = setTimeout(() => setShowLabel(false), 6000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cotizar por WhatsApp"
          initial={{ scale: 0, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group"
          onMouseEnter={() => setShowLabel(true)}
          onMouseLeave={() => setShowLabel(false)}
        >
          {/* Outer pulse glow */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-20 blur-md animate-pulse-glow" />

          <div className="relative flex items-center gap-3">
            <AnimatePresence>
              {showLabel && (
                <motion.span
                  initial={{ opacity: 0, x: 10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: 10, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden sm:block whitespace-nowrap glass-industrial px-4 py-2.5 rounded-full text-sm font-semibold text-platinum"
                >
                  Cotiza ahora
                </motion.span>
              )}
            </AnimatePresence>

            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-[#25D366]/40 ring-2 ring-white/10">
              <WhatsAppIcon className="text-white" size={26} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-electric rounded-full ring-2 ring-carbon flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </span>
            </div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
