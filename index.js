require('dotenv').config();

const app = require('./src/app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`ASISTMED corriendo en http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Error: el puerto ${PORT} ya está en uso.`);
    console.error('Cierra el otro servidor con Ctrl+C o ejecuta:');
    console.error('$env:PORT=3001; npm run dev');
    process.exit(1);
  }

  console.error('Error al iniciar el servidor:', err.message);
  process.exit(1);
});
