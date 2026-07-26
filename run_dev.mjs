import { createServer } from 'vite';

async function startServer() {
  try {
    const server = await createServer({
      configFile: './vite.config.js',
      server: {
        port: 5173,
        host: true
      }
    });
    await server.listen();
    console.log('Tadbeer Dev Server is running at: http://localhost:5173/');
  } catch (err) {
    console.error('Error starting dev server:', err);
    process.exit(1);
  }
}

startServer();
