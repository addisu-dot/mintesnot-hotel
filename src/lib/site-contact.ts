export const SITE_CONTACT = {
  address: "On the right side of Abune Teklehaimanot Church, Durame",
  phones: ["0978392777", "0934814220"] as const,
  facebookUrl:
    "https://www.facebook.com/profile.php?id=61588035984758",
  /** Mintesnot Hotel — Durame (embed uses lat/lng in map-embed.tsx) */
  mapQuery: "7.248297,37.902343",
} as const;

export function formatPhoneDisplay(phone: string) {
  if (phone.length === 10) {
    return `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`;
  }
  return phone;
}
