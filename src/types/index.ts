export function getLength(text: string): number {
  return text.length;
}

export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

export function getSubstring(text: string, start: number, end: number): string {
  return text.substring(start, end);
}

export function replaceText(
  text: string,
  oldPart: string,
  newPart: string
): string {
  return text.replace(oldPart, newPart);
}

export function splitText(text: string, separator: string): string[] {
  return text.split(separator);
}

export function trimText(text: string): string {
  return text.trim();
}

export function getCharAt(text: string, index: number): string {
  return text.charAt(index);
}

export function includesText(text: string, search: string): boolean {
  return text.includes(search);
}
export function concatText(text1: string, text2: string): string {
  return text1.concat(text2);
}

export function startsWithText(text: string, prefix: string): boolean {
  return text.startsWith(prefix);
}

export function endsWithText(text: string, suffix: string): boolean {
  return text.endsWith(suffix);
}

export function repeatText(text: string, times: number): string {
  return text.repeat(times);
}

export function reverseText(text: string): string {
  return text.split("").reverse().join("");
}

export function countWordsWithA(text: string): number {
  const regex = /a/gi;
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}
