export function toCamelCase(text: string, currentSeparator = ' '): string {
  return text
    .split(currentSeparator)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }

      return word.slice(0, 1).toUpperCase() + word.slice(1);
    })
    .join('');
}
