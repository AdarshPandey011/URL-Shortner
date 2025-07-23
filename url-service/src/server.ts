// clusterServer.ts
import cluster from 'cluster';
import os from 'os';
import app from './index'; // importing your app
import http from 'http';

const numCPUs = os.cpus().length;
const PORT = 3000;

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart if any worker dies
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
  // Each worker shares the same server port
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Worker ${process.pid} started and listening on port ${PORT}`);
  });
}
