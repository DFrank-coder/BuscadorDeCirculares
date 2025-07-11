import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos (como buscar.js)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/archivos', express.static(path.join(__dirname, 'circulares_drive')));


// Ruta para mostrar la vista HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'buscar.html'));
});

// Ruta para buscar circulares desde circulars.json
app.get('/buscar', (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'circulars.json'), 'utf-8'));

  const resultados = data.filter(c =>
    c.id.toLowerCase().includes(query) ||
    c.titulo.toLowerCase().includes(query) ||
    c.palabrasClave.some(p => p.toLowerCase().includes(query))
  );

  res.json(resultados);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
