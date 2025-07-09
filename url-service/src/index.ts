import express from 'express';
import urlRoutes from './routes/urlRoutes';
import { url } from 'inspector';

const app = express();
app.use(express.json());
app.use(urlRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

