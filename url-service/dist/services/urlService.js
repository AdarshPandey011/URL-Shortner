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
exports.urlService = void 0;
const nanoid_1 = require("nanoid");
const urlModel_1 = __importDefault(require("../models/urlModel"));
const urlService = (originalUrl, baseurl) => __awaiter(void 0, void 0, void 0, function* () {
    // const { nanoid } = await import("nanoid"); // dynamic import
    const shortCode = (0, nanoid_1.nanoid)(6);
    const existing = yield urlModel_1.default.findOne({ originalUrl });
    if (existing) {
        return `${baseurl}/${existing.shortUrl}`;
    }
    const url = new urlModel_1.default({
        originalUrl,
        shortUrl: `${baseurl}/${shortCode}`,
    });
    yield url.save();
    return `${baseurl}/${shortCode}`;
});
exports.urlService = urlService;
exports.default = exports.urlService;
