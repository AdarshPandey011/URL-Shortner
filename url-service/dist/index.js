"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const urlRoutes_1 = __importDefault(require("./routes/urlRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
dotenv_1.default.config(); // Load environment variables from .env file
mongoose_1.default.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/url-shortner').then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
app.use(express_1.default.json());
app.use(urlRoutes_1.default);
app.use('/user', userRouter_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
exports.default = app; // Export the app for use in other modules
