function trimTrailingZeros(value: string) {
  return value.replace(/\.0+$|(\.\d*[1-9])0+$/, "$1");
}

export function formatCompactPrice(value: number) {
  if (value >= 1_000_000_000) {
    return `₦${trimTrailingZeros((value / 1_000_000_000).toFixed(2))}B`;
  }

  if (value >= 1_000_000) {
    return `₦${trimTrailingZeros((value / 1_000_000).toFixed(2))}M`;
  }

  return `₦${value.toLocaleString("en-NG")}`;
}

export function formatPriceLabel(value: number, qualifier?: string) {
  return qualifier ? `${formatCompactPrice(value)} ${qualifier}` : formatCompactPrice(value);
}

export function formatArea(areaSqm: number) {
  return `${areaSqm.toLocaleString("en-NG")} sqm`;
}
