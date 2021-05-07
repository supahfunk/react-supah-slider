export const lerp = (a, b, n) => (1 - n) * a + n * b
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
