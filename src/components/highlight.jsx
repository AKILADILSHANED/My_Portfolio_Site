import { Fragment } from "react";

// A tiny syntax highlighter, just enough for JS / Java / SQL-looking snippets.
const KEYWORDS = new Set([
  "const", "let", "var", "function", "return", "export", "default", "import", "from",
  "class", "public", "private", "new", "if", "else", "await", "async", "true", "false",
  "null", "void", "static", "final", "this", "throw", "try", "catch",
  "SELECT", "FROM", "WHERE", "JOIN", "ON", "AS", "GROUP", "BY", "ORDER", "AND",
]);

const TOKEN =
  /(\/\/[^\n]*|--[^\n]*)|("(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?)|(\b\d+(?:\.\d+)?\b)|(@[A-Za-z]\w*)|([A-Za-z_$][\w$]*)|([\s\S])/g;

export function highlight(code) {
  const out = [];
  let m;
  let k = 0;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(code)) !== null) {
    const [text, comment, string, number, annotation, word] = m;
    let cls = null;
    if (comment) cls = "cm";
    else if (string) cls = "str";
    else if (number) cls = "num";
    else if (annotation) cls = "ann";
    else if (word) {
      const next = code.slice(TOKEN.lastIndex).match(/^\s*(\(|:(?!:))/);
      if (KEYWORDS.has(word)) cls = "kw";
      else if (next && next[1] === "(") cls = "fn";
      else if (next && next[1] === ":") cls = "prop";
      else if (/^[A-Z]/.test(word)) cls = "type";
    } else if (!/\s/.test(text)) cls = "op";
    out.push(
      cls ? (
        <span key={k++} className={`t-${cls}`}>
          {text}
        </span>
      ) : (
        <Fragment key={k++}>{text}</Fragment>
      )
    );
  }
  return out;
}
