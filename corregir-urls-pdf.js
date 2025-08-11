import fs from 'fs';

const ruta = './circulars.json';

// leer el archivo
const data = JSON.parse(fs.readFileSync(ruta, 'utf-8'));

// revisar y corregir las URLs
const corregido = data.map(c => {
  if (!c.url) {
    c.url = `/archivos/${c.id}.pdf`;
  } else if (!c.url.toLowerCase().endsWith('.pdf')) {
    c.url += '.pdf';
  }
  return c;
});

// Guardar el archivo corregido
fs.writeFileSync(ruta, JSON.stringify(corregido, null, 2), 'utf-8');
console.log('✅ Todas las URLs fueron corregidas con exito.');
