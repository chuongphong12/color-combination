import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getContrastColor(hexColor: string) {
  // Convert hex color to RGB
  const r = parseInt(hexColor.slice(1, 3), 16) / 255;
  const g = parseInt(hexColor.slice(3, 5), 16) / 255;
  const b = parseInt(hexColor.slice(5, 7), 16) / 255;

  // Calculate the relative luminance
  const [R, G, B] = [r, g, b].map((c) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  // Calculate the contrast ratios for black and white text
  const whiteContrast = 1.05 / (luminance + 0.05);
  const blackContrast = (luminance + 0.05) / 0.05;

  // Return black or white depending on which contrast ratio is greater
  return whiteContrast > blackContrast ? "text-white" : "text-black";
}
