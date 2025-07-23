import cors from 'cors';
import express from 'express';
import userRouter from './routes/userRouter';
import urlRoutes from './routes/urlRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
app.use(cors()); 

dotenv.config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/url-shortner').then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


app.use(express.json());
app.use(urlRoutes);
app.use('/user', userRouter);
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

export default app; // Export the app for use in other modules
