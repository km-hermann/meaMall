export function formatPrice(amount: number) {
  const rounded = Math.round(amount);
  return `${rounded.toLocaleString("fr-FR").replace(/\u202f/g, " ")} €`;
}

export function formatEuro(amount: number) {
  return formatPrice(amount);
}

// Keep formatFcfa alias for existing components
export const formatFcfa = formatPrice;

export function pad(n: number) {
  return String(n).padStart(2, "0");
}

