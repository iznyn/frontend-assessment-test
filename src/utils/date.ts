/**
 * formatDate
 */
export const formatDate = (dateStr: string) => {
  const dateObj  = new Date(dateStr);
  return dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}