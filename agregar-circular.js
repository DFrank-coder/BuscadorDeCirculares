import fs from 'fs';
import path from 'path';

// ruta al archivo JSON
const rutaJson = './circulars.json';

// NUEVO ARCHIVO PDF a agregar
const nuevoArchivo = 'Chaleco para Señalero Principal (Marshall)';

// preparar nueva entrada
const nombreSinExt = nuevoArchivo.replace(/\.[^/.]+$/, '');
const nuevaCircular = {
  id: nombreSinExt,
  titulo: nombreSinExt,
  palabrasClave: nombreSinExt.split(/[\s-_]+/).map(p => p.toLowerCase()),
  url: `/archivos/${nuevoArchivo}`
};

// cargar el JSON actual
let circulares = [];
if (fs.existsSync(rutaJson)) {
  circulares = JSON.parse(fs.readFileSync(rutaJson, 'utf-8'));
}

// Verifico si ya existe
const existe = circulares.some(c => c.id === nuevaCircular.id);

if (!existe) {
  circulares.push(nuevaCircular);
  fs.writeFileSync(rutaJson, JSON.stringify(circulares, null, 2));
  console.log(`✅ Circular agregada: ${nuevaCircular.id}`);
} else {
  console.log('⚠️ La circular ya exitse en el archivo.');
}
