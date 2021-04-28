export const calculateDays = (date: string) => {
  const today = new Date() as (number | any)
  const quit = new Date(date) as (number | any)
  const diffTime = Math.abs(quit - today)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const days = diffDays;
  return days;
}
