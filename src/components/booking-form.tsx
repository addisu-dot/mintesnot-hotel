"use client";

import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/language-context";
import {
  createBookingSchema,
  type BookingFormValues,
} from "@/lib/booking-schema";
import {
  DEFAULT_ROOM_TYPE,
  ROOM_TYPE_KEYS,
  ROOM_TYPE_VALUES,
  type RoomTypeKey,
} from "@/lib/room-types";
import {
  buildBookingTelegramMessage,
  openTelegramBooking,
} from "@/lib/telegram-booking";
import { cn } from "@/lib/utils";

function getRoomLabel(
  roomTypeValue: string,
  t: (key: string) => string
): string {
  const key = ROOM_TYPE_KEYS.find(
    (k) => ROOM_TYPE_VALUES[k] === roomTypeValue
  );
  return key ? t(`rooms.types.${key}`) : roomTypeValue;
}

export function BookingForm({ className }: { className?: string }) {
  const { t } = useLanguage();
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const bookingSchema = useMemo(
    () =>
      createBookingSchema({
        checkInRequired: t("booking.validation.checkInRequired"),
        checkOutRequired: t("booking.validation.checkOutRequired"),
        guestsRequired: t("booking.validation.guestsRequired"),
        guestsInt: t("booking.validation.guestsInt"),
        guestsMin: t("booking.validation.guestsMin"),
        guestsMax: t("booking.validation.guestsMax"),
        fullNameMin: t("booking.validation.fullNameMin"),
        fullNameMax: t("booking.validation.fullNameMax"),
        phoneMin: t("booking.validation.phoneMin"),
        phoneMax: t("booking.validation.phoneMax"),
        phoneInvalid: t("booking.validation.phoneInvalid"),
        roomTypeRequired: t("booking.validation.roomTypeRequired"),
        checkOutAfterCheckIn: t("booking.validation.checkOutAfterCheckIn"),
      }),
    [t]
  );

  const defaultValues: BookingFormValues = useMemo(
    () => ({
      checkIn: "",
      checkOut: "",
      guests: 1,
      fullName: "",
      phone: "",
      roomType: DEFAULT_ROOM_TYPE,
    }),
    []
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues,
  });

  function onSubmit(data: BookingFormValues) {
    const phone = data.phone.trim();
    if (!phone) {
      toast.error(t("booking.validation.phoneMin"));
      return;
    }

    const roomLabel = getRoomLabel(data.roomType, t);
    const message = buildBookingTelegramMessage(data, roomLabel);

    const opened = openTelegramBooking(message);
    if (!opened) {
      toast.error(t("booking.errorTitle"), {
        description: t("booking.errorDescription"),
      });
      return;
    }

    toast.success(t("booking.successTitle"), {
      description: t("booking.successDescription"),
    });
    reset(defaultValues);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-2xl border border-border/80 bg-card p-6 shadow-sm md:p-8",
        className
      )}
      noValidate
    >
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!errors.checkIn}>
            <FieldLabel htmlFor="checkIn">{t("booking.checkIn")}</FieldLabel>
            <Input
              id="checkIn"
              type="date"
              min={today}
              aria-invalid={!!errors.checkIn}
              {...register("checkIn")}
            />
            <FieldError errors={[errors.checkIn]} />
          </Field>

          <Field data-invalid={!!errors.checkOut}>
            <FieldLabel htmlFor="checkOut">{t("booking.checkOut")}</FieldLabel>
            <Input
              id="checkOut"
              type="date"
              min={today}
              aria-invalid={!!errors.checkOut}
              {...register("checkOut")}
            />
            <FieldError errors={[errors.checkOut]} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!errors.guests}>
            <FieldLabel htmlFor="guests">{t("booking.guests")}</FieldLabel>
            <Input
              id="guests"
              type="number"
              min={1}
              max={20}
              aria-invalid={!!errors.guests}
              {...register("guests", { valueAsNumber: true })}
            />
            <FieldError errors={[errors.guests]} />
          </Field>

          <Field data-invalid={!!errors.roomType}>
            <FieldLabel htmlFor="roomType">{t("booking.roomType")}</FieldLabel>
            <Controller
              name="roomType"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="roomType"
                    className="w-full"
                    aria-invalid={!!errors.roomType}
                  >
                    <SelectValue placeholder={t("booking.selectRoom")} />
                  </SelectTrigger>
                  <SelectContent>
                    {ROOM_TYPE_KEYS.map((key: RoomTypeKey) => (
                      <SelectItem
                        key={key}
                        value={ROOM_TYPE_VALUES[key]}
                      >
                        {t(`rooms.types.${key}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError errors={[errors.roomType]} />
          </Field>
        </div>

        <Field data-invalid={!!errors.fullName}>
          <FieldLabel htmlFor="fullName">{t("booking.fullName")}</FieldLabel>
          <Input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder={t("booking.fullNamePlaceholder")}
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
          <FieldError errors={[errors.fullName]} />
        </Field>

        <Field data-invalid={!!errors.phone}>
          <FieldLabel htmlFor="phone">{t("booking.phone")}</FieldLabel>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t("booking.phonePlaceholder")}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          <FieldError errors={[errors.phone]} />
        </Field>

        <Button
          type="submit"
          className="btn-cta mt-2 h-11 w-full rounded-full text-base sm:w-auto sm:min-w-[200px]"
        >
          {t("bookNow")}
        </Button>
      </FieldGroup>
    </form>
  );
}
