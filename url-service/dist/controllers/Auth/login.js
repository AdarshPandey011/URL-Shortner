"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const userService_1 = require("../../services/userService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyPassword_1 = require("../../utility/verifyPassword");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield (0, userService_1.userService)({ email });
        console.log(req.body);
        if (user) {
            const isMatch = yield (0, verifyPassword_1.verifyPassword)({ password, hashedPassword: user.password });
            if (isMatch) {
                const token = jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
                return res.status(200).json({ token, message: "Login successful" });
            }
            else {
                return res.status(400).json({ message: "Invalid credentials" });
            }
        }
    });
}
