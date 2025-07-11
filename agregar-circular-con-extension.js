import fs from 'fs';

const ruta = './circulars.json';

// Leer el archivo
const data = JSON.parse(fs.readFileSync(ruta, 'utf-8'));

// Recorrer y corregir URLs si falta ".pdf"
data.forEach(c => {
  if (!c.url.toLowerCase().endsWith('.pdf')) {
    c.url += '.pdf';
  }
});

// Guardar nuevamente
fs.writeFileSync(ruta, JSON.stringify(data, null, 2));
console.log('✅ Se agregaron ".pdf" a todas las URLs que lo necesitaban.');
