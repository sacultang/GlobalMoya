import {
  differenceInDays,
  differenceInHours,
  format,
  parseISO,
  subMonths,
} from "date-fns";
export const dateFormat = (date) => {
  return format(parseISO(date), "yyyy.MM.dd");
};

export const differenceDayFunc = (date) => {
  const now = new Date(date);
  if (differenceInDays(new Date(), now) > 0) {
    return differenceInDays(new Date(), now) + " 일 전";
  } else {
    return differenceInHours(new Date(), now) + " 시간 전";
  }
};
export const differenceDayFuncTwo = (date) => {
  if (differenceInDays(new Date(), parseISO(date)) > 0) {
    return differenceInDays(new Date(), parseISO(date)) + " 일 전";
  } else {
    return differenceInHours(new Date(), parseISO(date)) + " 시간 전";
  }
};

export const subDate = (date) => {
  return format(subMonths(parseISO(date), 1), "yyyy.MM.dd");
};
