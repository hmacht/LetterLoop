
export function today() {
  const currentDatetime = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = currentDatetime.toLocaleDateString('en-US', options).replace(/\//g, '-');

  return formattedDate;
}

export function yesterday() {
  const currentDatetime = new Date();
  currentDatetime.setDate(currentDatetime.getDate() - 1);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = currentDatetime.toLocaleDateString('en-US', options).replace(/\//g, '-');

  return formattedDate;
}

export function secondsFormatted(seconds) {
  if (!seconds) { return "" }
  
  // Calculate hours, minutes, and seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);  // Round down seconds

  // Format the hours, minutes, and seconds to always be two digits
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(secs).padStart(2, '0');

  // Return the formatted time string
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}