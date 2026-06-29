export const COMPANY = {
  name: "Plásticos NF",
  fullName: "Plásticos NF S.A.S.",
  tagline: "Soluciones en empaques plásticos",
  description:
    "Fabricación y distribución de bolsas plásticas, rollos industriales y soluciones de empaque al por mayor y detal.",
  location: "Barranquilla, Atlántico, Colombia",
  address: "Vía 40, Zona Industrial, Barranquilla, Colombia",
  phone: "+57 302 428 1733",
  whatsapp: "573000000000",
  email: "ventas@plasticosnf.com",
  hours: "Lunes a Viernes 7:00 AM — 5:00 PM",
  founded: 2008,
  social: {
    instagram: "https://instagram.com/plasticosnf",
    facebook: "https://facebook.com/plasticosnf",
    linkedin: "https://linkedin.com/company/plasticosnf",
  },
} as const;

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  "Hola, estoy interesado en cotizar productos de Plásticos NF."
)}`;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Maquinaria", href: "#maquinaria" },
  { label: "Sectores", href: "#sectores" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const STATS = [
  { value: "15+", label: "Años de experiencia", suffix: "" },
  { value: "500", label: "Clientes activos", suffix: "+" },
  { value: "12", label: "Sectores industriales", suffix: "" },
  { value: "8M", label: "Unidades producidas/mes", suffix: "" },
] as const;
