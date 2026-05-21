import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const PRODUCT_LINKS = [
  { label: "Bolsas plásticas", href: "#productos" },
  { label: "Rollos para corte", href: "#productos" },
  { label: "Empaques industriales", href: "#productos" },
  { label: "Empaques personalizados", href: "#productos" },
  { label: "Distribución mayorista", href: "#productos" },
];

const CONTACT_ITEMS = [
  { icon: MapPin, label: COMPANY.address },
  { icon: Phone, label: COMPANY.phone },
  { icon: Mail, label: COMPANY.email },
  { icon: Clock, label: COMPANY.hours },
];

export function Footer() {
  return (
    <footer className="relative bg-carbon overflow-hidden">
      {/* Top luminous border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-grid-industrial opacity-[0.15] pointer-events-none" />
      <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-glow-electric opacity-30 blur-3xl pointer-events-none" />

      <Container size="full" className="relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 text-steel-300 text-sm leading-relaxed max-w-sm">
              {COMPANY.description} Más de {new Date().getFullYear() - COMPANY.founded} años
              fabricando soluciones de empaque industriales en Colombia.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
                { Icon: Facebook, href: COMPANY.social.facebook, label: "Facebook" },
                { Icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-11 h-11 rounded-full glass-industrial flex items-center justify-center hover:border-electric/40 transition-all duration-300"
                >
                  <Icon
                    size={16}
                    className="text-steel-300 group-hover:text-electric-glow transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* Capacity badge */}
            <div className="mt-8 inline-flex items-center gap-3 glass-industrial rounded-full px-4 py-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-electric opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-electric-glow" />
              </span>
              <span className="text-xs font-medium text-steel-200">
                Producción activa 24/7
              </span>
            </div>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-electric-glow mb-5">
              Navega
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-300 hover:text-electric-glow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-electric-glow mb-5">
              Productos
            </h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-300 hover:text-electric-glow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-electric-glow mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon
                    size={16}
                    className="text-electric-glow shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-steel-300 leading-relaxed">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-400">
            © {new Date().getFullYear()} {COMPANY.fullName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-steel-400">
            <a href="#" className="hover:text-electric-glow transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-electric-glow transition-colors">
              Términos
            </a>
          </div>
        </div>

        {/* Brand wordmark */}
        <div className="mt-12 lg:mt-16 -mb-4 overflow-hidden">
          <div
            className="font-display font-black text-[18vw] leading-none tracking-tightest text-transparent text-center select-none"
            style={{
              WebkitTextStroke: "1px rgba(0, 102, 255, 0.12)",
            }}
            aria-hidden="true"
          >
            PLÁSTICOS NF
          </div>
        </div>
      </Container>
    </footer>
  );
}
