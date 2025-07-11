import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directorio = path.join(__dirname, 'circulares_drive');

const archivos = fs.readdirSync(directorio);

const circulares = archivos.map((nombre) => {
  const nombreSinExtension = nombre.replace(/\.[^/.]+$/, "");

  return {
    id: nombreSinExtension,
    titulo: nombreSinExtension,
    palabrasClave: nombreSinExtension
      .split(/[\s-_]+/)
      .map(p => p.toLowerCase()),
    url: `/archivos/${nombre}` // ← usa el nombre real del archivo
  };
});

fs.writeFileSync(
  path.join(__dirname, 'circulars.json'),
  JSON.stringify(circulares, null, 2),
  'utf-8'
);

console.log(`✅ Generado circulars.json con ${circulares.length} circulares.`);
