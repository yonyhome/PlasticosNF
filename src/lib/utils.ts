import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappLink(message: string, phone = "573024281733") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
