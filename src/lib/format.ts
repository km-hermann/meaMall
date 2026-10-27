export function formatFcfa(amount: number) {
  const rounded = Math.round(amount);
  return `${rounded.toLocaleString("fr-FR").replace(/\u202f/g, " ")} FCFA`;
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}
