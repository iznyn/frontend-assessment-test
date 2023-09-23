/**
 * getNumberFormat
 */
export const getNumberFormat = (value: number): string => {
  return Intl.NumberFormat('en-US', {}).format(value);
}

/**
 * getNumberAbbr
 */
export const getNumberAbbr = (value: number): string => {
  return Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}