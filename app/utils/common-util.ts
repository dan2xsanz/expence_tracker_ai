export const getRandomDarkColor = () => {
  const h = Math.floor(Math.random() * 360); // Hue: 0-359
  const s = Math.floor(Math.random() * 30) + 60; // Saturation: 60–89%
  const l = Math.floor(Math.random() * 20) + 20; // Lightness: 20–39% (darker)

  return hslToHex(h, s, l);
};

const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    Math.round(
      255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))))
    );

  return `#${[f(0), f(8), f(4)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("")}`;
};
export const getRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
