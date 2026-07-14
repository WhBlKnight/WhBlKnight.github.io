import { readFile, writeFile } from "node:fs/promises";

const [fragmentPath, destinationPath] = process.argv.slice(2);
if (!fragmentPath || !destinationPath) {
  throw new Error("Usage: node build-desktop-presentation.mjs <fragment> <destination>");
}

const fragment = await readFile(fragmentPath, "utf8");
const document = [
  "<!doctype html>",
  '<html lang="ko">',
  "<head>",
  '  <meta charset="utf-8">',
  '  <meta name="viewport" content="width=device-width, initial-scale=1">',
  '  <meta name="referrer" content="no-referrer">',
  '  <meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\'; style-src \'unsafe-inline\'; img-src \'self\' file: data: blob:; font-src \'self\' data:; media-src \'self\' file: data: blob: https://svs.gsfc.nasa.gov; base-uri \'none\'; form-action \'none\';">',
  "  <title>빛의 속도, 시간, 그리고 블랙홀</title>",
  "  <style>html,body{width:100%;height:100%;margin:0;overflow:hidden;background:#030817}body{min-height:100vh}</style>",
  "</head>",
  "<body>",
  fragment,
  "</body>",
  "</html>"
].join("\n");

await writeFile(destinationPath, document, "utf8");
