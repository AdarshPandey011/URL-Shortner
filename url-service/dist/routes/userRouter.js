"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_1 = require("../controllers/Auth/signup");
const login_1 = require("../controllers/Auth/login");
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', signup_1.signup);
userRouter.post('/login', login_1.login);
exports.default = userRouter;
