import { Response } from "express";

export function formatUrl(
  req: { params: { [key: string]: string } } = { params: { "0": "" } }
): string {
  const text = req.params[0];
  return text.replace(/\//g, "");
}

export function maxLength(text: string, res: Response): string | null {
  const maxLength = 10000000;
  if (text.length > maxLength) {
    res
      .status(400)
      .send(
        "A string está muito grande. O tamanho máximo permitido é " +
          maxLength +
          " caracteres."
      );
    return null;
  }
  return text;
}
