export function emojiFlagToIso2(flag) {
  if (!flag) return null;
  const indicators = [...flag].filter((c) => {
    const cp = c.codePointAt(0);
    return cp >= 0x1f1e6 && cp <= 0x1f1ff;
  });
  if (indicators.length !== 2) return null;
  return indicators.map((c) => String.fromCharCode(c.codePointAt(0) - 0x1f1e6 + 65)).join('');
}

export function flagImageUrl(flagEmoji, widthPx = 48) {
  const iso2 = emojiFlagToIso2(flagEmoji);
  if (!iso2) return null;
  return `https://flagcdn.com/w${widthPx}/${iso2.toLowerCase()}.png`;
}
