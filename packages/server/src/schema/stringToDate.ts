export function stringToDate(date: string | Date): Date {
  if (typeof date === "string") {
    return new Date(date);
  }
  return date;
}
