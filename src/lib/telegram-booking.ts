import type { BookingFormValues } from "@/lib/booking-schema";

export const TELEGRAM_BOOKING_USERNAME = "axiomaticad";

export function buildBookingTelegramMessage(
  data: BookingFormValues,
  roomLabel: string
): string {
  const dates = `${data.checkIn} → ${data.checkOut}`;

  return [
    "Hello! New Booking Request from Mintesnot Hotel Website:",
    `- Name: ${data.fullName.trim()}`,
    `- Phone: ${data.phone.trim()}`,
    `- Room Type: ${roomLabel}`,
    `- Dates: ${dates}`,
  ].join("\n");
}

export function getTelegramBookingUrl(message: string): string {
  return `https://t.me/${TELEGRAM_BOOKING_USERNAME}?text=${encodeURIComponent(message)}`;
}

/** Opens Telegram in a new tab. Returns false if blocked by the browser. */
export function openTelegramBooking(message: string): boolean {
  const url = getTelegramBookingUrl(message);
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  return opened !== null;
}
