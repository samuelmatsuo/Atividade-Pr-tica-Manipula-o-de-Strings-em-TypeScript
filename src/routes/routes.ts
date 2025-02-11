import express from "express";
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

const app = express();

app.use(express.json());

app.get("/length/:text", (req, res) => {
  const { text } = req.params;
  const length = getLength(text);
  res.json({ length });
});

app.get("/uppercase/:text", (req, res) => {
  const { text } = req.params;
  const uppercased = toUpperCase(text);
  res.json({ uppercased });
});

app.get("/lowercase/:text", (req, res) => {
  const { text } = req.params;
  const lowercased = toLowerCase(text);
  res.json({ lowercased });
});

app.get("/substring/:text/:start/:end", (req, res) => {
  const { text, start, end } = req.params;
  const substring = getSubstring(text, parseInt(start), parseInt(end));
  res.json({ substring });
});

app.get("/replace/:text/:old/:new", (req, res) => {
  const { text, old, new: newText } = req.params;
  const replaced = replaceText(text, old, newText);
  res.json({ replaced });
});

app.get("/split/:text/:separator", (req, res) => {
  const { text, separator } = req.params;
  const splitted = splitText(text, separator);
  res.json({ splitted });
});

app.get("/trim/:text", (req, res) => {
  const { text } = req.params;
  const trimmed = trimText(text);
  res.json({ trimmed });
});

app.get("/charAt/:text/:index", (req, res) => {
  const { text, index } = req.params;
  const char = getCharAt(text, parseInt(index));
  res.json({ char });
});

app.get("/includes/:text/:search", (req, res) => {
  const { text, search } = req.params;
  const includes = includesText(text, search);
  res.json({ includes });
});

app.get("/concat/:text1/:text2", (req, res) => {
  const { text1, text2 } = req.params;
  const concatenated = concatText(text1, text2);
  res.json({ concatenated });
});

app.get("/startswith/:text/:prefix", (req, res) => {
  const { text, prefix } = req.params;
  const startsWith = startsWithText(text, prefix);
  res.json({ startsWith });
});

app.get("/endswith/:text/:suffix", (req, res) => {
  const { text, suffix } = req.params;
  const endsWith = endsWithText(text, suffix);
  res.json({ endsWith });
});

app.get("/repeat/:text/:times", (req, res) => {
  const { text, times } = req.params;
  const repeated = repeatText(text, parseInt(times));
  res.json({ repeated });
});

app.get("/reverse/:text", (req, res) => {
  const { text } = req.params;
  const reversed = reverseText(text);
  res.json({ reversed });
});

app.get("/count-a/:text", (req, res) => {
  const { text } = req.params;
  const count = countWordsWithA(text);
  res.json({ count });
});

export default app;
