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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = signup;
const userService_1 = require("../../services/userService");
const userModel_1 = require("../../models/userModel");
const hashedPassword_1 = require("../../utility/hashedPassword");
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const { username, email, password } = req.body;
        const user = yield (0, userService_1.userService)({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        else {
            const hashed = (0, hashedPassword_1.hashedPassword)({ password });
            const newUser = yield userModel_1.UserModel.create({ username, email, password: hashed });
            return res.status(201).json({ message: "User created successfully", user: newUser });
        }
    });
}
