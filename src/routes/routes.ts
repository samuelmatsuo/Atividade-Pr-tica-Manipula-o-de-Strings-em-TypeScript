import express, { text } from "express";
import {
  getLength,
  toUpperCase,
  toLowerCase,
  getSubstring,
  replaceText,
  splitText,
  trimText,
  getCharAt,
  includesText,
  concatText,
  startsWithText,
  endsWithText,
  repeatText,
  reverseText,
  countWordsWithA,
} from "../types/";
import { formatUrl, maxLength } from "../types/standard";

const app = express();

app.use(express.json());

app.get("/length/*", (req, res) => {
  const length = getLength(formatUrl(req));
  res.json({ length });
});

app.get("/uppercase/*", (req, res) => {
  const uppercased = toUpperCase(formatUrl(req));
  maxLength(uppercased, res);
  res.json({ uppercased });
});

app.get("/lowercase/*", (req, res) => {
  const lowercased = toLowerCase(formatUrl(req));
  res.json({ lowercased });
});

app.get("/substring/*/:start/:end", (req, res) => {
  const { start, end } = req.params;
  const substring = getSubstring(formatUrl(req), start, end);
  res.json({ substring });
});

app.get("/replace/*/:old/:new", (req, res) => {
  const { old, new: newText } = req.params;
  const replaced = replaceText(formatUrl(req), old, newText);
  res.json({ replaced });
});

app.get("/split/*/:separator", (req, res) => {
  const { separator } = req.params;
  const splitted = splitText(formatUrl(req), separator);
  res.json({ splitted });
});

app.get("/trim/*", (req, res) => {
  const trimmed = trimText(formatUrl(req));
  res.json({ trimmed });
});

app.get("/charAt/*/:index", (req, res) => {
  const { index } = req.params;
  const char = getCharAt(formatUrl(req), parseInt(index));
  res.json({ char });
});

app.get("/includes/*/:search", (req, res) => {
  const { search } = req.params;
  const includes = includesText(formatUrl(req), search);
  res.json({ includes });
});

app.get("/concat/*/:text2", (req, res) => {
  const { text2 } = req.params;
  const concatenated = concatText(formatUrl(req), text2);
  res.json({ concatenated });
});

app.get("/startswith/*/:prefix", (req, res) => {
  const { prefix } = req.params;
  const startsWith = startsWithText(formatUrl(req), prefix);

  res.json({ startsWith });
});

app.get("/endswith/*/:suffix", (req, res) => {
  const { suffix } = req.params;
  const endsWith = endsWithText(formatUrl(req), suffix);
  res.json({ endsWith });
});

app.get("/repeat/*/:times", (req, res) => {
  const { times } = req.params;
  const repeated = repeatText(formatUrl(req), parseInt(times));
  maxLength(repeated, res);
  res.json({ repeated });
});

app.get("/reverse/*", (req, res) => {
  const reversed = reverseText(formatUrl(req));
  res.json({ reversed });
});

app.get("/count-a/:text", (req, res) => {
  const { text } = req.params;
  const count = countWordsWithA(text);
  res.json({ count });
});

export default app;
