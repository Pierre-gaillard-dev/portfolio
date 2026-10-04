export const urlFor = (...parts: (string | undefined)[]): string => {
  return parts.filter((part) => part !== undefined).join('/')
}
