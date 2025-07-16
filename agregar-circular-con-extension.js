import fs from 'fs';

const ruta = './circulars.json';

// leer el archivo
const data = JSON.parse(fs.readFileSync(ruta, 'utf-8'));

// recorrer y corregir URLs por si falta ".pdf"
data.forEach(c => {
  if (!c.url.toLowerCase().endsWith('.pdf')) {
    c.url += '.pdf';
  }
});

// guarddar nuevamente
fs.writeFileSync(ruta, JSON.stringify(data, null, 2));
console.log('✅ Se agregaron ".pdf" a todas las URLs que lo necesitaban.');
