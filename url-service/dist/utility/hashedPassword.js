"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashedPassword = hashedPassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashedPassword({ password }) {
    console.log(typeof process.env.SALT_ROUNDS);
    const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || "10", 10);
    return bcrypt_1.default.hashSync(password, SALT_ROUNDS);
}
