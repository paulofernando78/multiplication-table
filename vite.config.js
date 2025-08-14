import materias from "./src/config/materias.json";
import materiaSublinks from "./src/config/materia-sublinks.json";
import path from "path";
import { defineConfig } from "vite";

// mainInputs como array de pares
const mainInputs = Object.entries(materias).map(([name, filePath]) => [
  name,
  path.resolve(__dirname, filePath),
]);

// subInputs também como array de pares
const subInputs = Object.entries(materiaSublinks).flatMap(([materia, links]) =>
  Object.entries(links).map(([name, filePath]) => [
    `${materia}-${name}`,
    path.resolve(__dirname, filePath),
  ])
);

// junta os dois arrays e só depois converte em objeto
const input = Object.fromEntries([...mainInputs, ...subInputs]);

export default defineConfig({
  build: {
    rollupOptions: {
      input,
    },
    outDir: "dist",
  },
});