export function getTimeFromDate(timestamp: number | Date) {
  const date = new Date(timestamp);
  // Adds 0 to minutes and hours < 10 to change times like 8:7 to 08:07
  let minutes: string | number = date.getMinutes();
  let hours: string | number = date.getHours();
  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours= `0${hours}`;
  return `${hours}:${minutes}`;
}
