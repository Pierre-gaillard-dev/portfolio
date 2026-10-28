export const seededRandom = (seed: number): number => {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}
