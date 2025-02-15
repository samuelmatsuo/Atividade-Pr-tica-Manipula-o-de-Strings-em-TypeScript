export function getLength(text: string): number {
  return text.length;
}

export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

export function getSubstring(text: string, start: string, end: string): string {
  const lowerText = text.toLowerCase();
  const lowerStart = start.toLowerCase();
  const lowerEnd = end.toLowerCase();

  const startIndex = lowerText.indexOf(lowerStart);

  if (startIndex === -1) {
    console.warn("Start string not found in text.");
    return "";
  }

  const adjustedStartIndex = startIndex + lowerStart.length;
  const endIndex = lowerText.indexOf(lowerEnd, adjustedStartIndex);

  if (endIndex === -1) {
    console.warn("End string not found in text.");
    return "";
  }

  return text.substring(adjustedStartIndex, endIndex);
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
  let textLeng = text.length;
  textLeng--;
  if (index >= text.length || index < 0) {
    return `O índice ${index} é inválido. O tamanho do texto é ${textLeng}.`;
  }

  return text.charAt(index);
}

export function includesText(text: string, search: string): boolean {
  return text.includes(search);
}
export function concatText(text1: string, text2: string): string {
  return text1.concat(text2);
}

export function startsWithText(text: string, prefix: string): boolean {
  return text.toLowerCase().startsWith(prefix.toLowerCase());
}

export function endsWithText(text: string, suffix: string): boolean {
  return text.toLowerCase().endsWith(suffix.toLowerCase());
}

export function repeatText(text: string, times: number): string {
  return text.repeat(times);
}

export function reverseText(text: string): string {
  return text.split("").reverse().join("");
}

export function countWordsWithA(text: string): number {
  let count = 0;
  const words = text.split(" ");

  for (const word of words) {
    if (word.trim().toLowerCase() !== "a") {
      const matches = word.match(/a/gi);
      if (matches) {
        count += matches.length;
        console.log(word + " " + count);
      }
    }
  }
  return count;
}
