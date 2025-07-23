"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// clusterServer.ts
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const index_1 = __importDefault(require("./index")); // importing your app
const http_1 = __importDefault(require("http"));
const numCPUs = os_1.default.cpus().length;
const PORT = 3000;
if (cluster_1.default.isPrimary) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster_1.default.fork();
    }
    // Restart if any worker dies
    cluster_1.default.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`);
        cluster_1.default.fork();
    });
}
else {
    // Each worker shares the same server port
    const server = http_1.default.createServer(index_1.default);
    server.listen(PORT, () => {
        console.log(`Worker ${process.pid} started and listening on port ${PORT}`);
    });
}
