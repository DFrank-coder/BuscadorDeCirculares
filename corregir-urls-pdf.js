import fs from 'fs';

const ruta = './circulars.json';

// Leer el archivo
const data = JSON.parse(fs.readFileSync(ruta, 'utf-8'));

// Revisar y corregir URLs
const corregido = data.map(c => {
  if (!c.url) {
    c.url = `/archivos/${c.id}.pdf`;
  } else if (!c.url.toLowerCase().endsWith('.pdf')) {
    c.url += '.pdf';
  }
  return c;
});

// Guardar archivo corregido
fs.writeFileSync(ruta, JSON.stringify(corregido, null, 2), 'utf-8');
console.log('✅ Todas las URLs fueron corregidas con extensión .pdf');
