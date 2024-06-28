
export function today() {
  const currentDatetime = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = currentDatetime.toLocaleDateString('en-US', options).replace(/\//g, '-');

  return formattedDate;
}