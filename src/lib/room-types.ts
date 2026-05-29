export const ROOM_TYPE_KEYS = [
  "gardenStandard",
  "highlandDeluxe",
  "twinComfort",
  "familySuite",
  "executiveRoom",
  "premiumSuite",
] as const;

export type RoomTypeKey = (typeof ROOM_TYPE_KEYS)[number];

/** English values sent to EmailJS / stored in forms */
export const ROOM_TYPE_VALUES: Record<RoomTypeKey, string> = {
  gardenStandard: "Garden Standard",
  highlandDeluxe: "Highland Deluxe",
  twinComfort: "Twin Comfort",
  familySuite: "Family Suite",
  executiveRoom: "Executive Room",
  premiumSuite: "Premium Suite",
};

export const DEFAULT_ROOM_TYPE = ROOM_TYPE_VALUES.gardenStandard;
