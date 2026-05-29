import { z } from "zod";

import { ROOM_TYPE_VALUES } from "@/lib/room-types";

const roomTypeEnum = z.enum([
  ROOM_TYPE_VALUES.gardenStandard,
  ROOM_TYPE_VALUES.highlandDeluxe,
  ROOM_TYPE_VALUES.twinComfort,
  ROOM_TYPE_VALUES.familySuite,
  ROOM_TYPE_VALUES.executiveRoom,
  ROOM_TYPE_VALUES.premiumSuite,
]);

export type BookingValidationMessages = {
  checkInRequired: string;
  checkOutRequired: string;
  guestsRequired: string;
  guestsInt: string;
  guestsMin: string;
  guestsMax: string;
  fullNameMin: string;
  fullNameMax: string;
  phoneMin: string;
  phoneMax: string;
  phoneInvalid: string;
  roomTypeRequired: string;
  checkOutAfterCheckIn: string;
};

export function createBookingSchema(messages: BookingValidationMessages) {
  return z
    .object({
      checkIn: z.string().min(1, messages.checkInRequired),
      checkOut: z.string().min(1, messages.checkOutRequired),
      guests: z
        .number({ error: messages.guestsRequired })
        .int(messages.guestsInt)
        .min(1, messages.guestsMin)
        .max(20, messages.guestsMax),
      fullName: z
        .string()
        .min(2, messages.fullNameMin)
        .max(120, messages.fullNameMax),
      phone: z
        .string()
        .min(8, messages.phoneMin)
        .max(24, messages.phoneMax)
        .regex(/^[\d\s+\-()]+$/, messages.phoneInvalid),
      roomType: roomTypeEnum,
    })
    .refine(
      (data) => {
        const checkIn = new Date(data.checkIn);
        const checkOut = new Date(data.checkOut);
        return checkOut > checkIn;
      },
      {
        message: messages.checkOutAfterCheckIn,
        path: ["checkOut"],
      }
    );
}

export type BookingFormValues = z.infer<ReturnType<typeof createBookingSchema>>;
