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
const urlModel_1 = __importDefault(require("../models/urlModel"));
const urlService_1 = __importDefault(require("../services/urlService"));
function createShortUrl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { originalUrl } = req.body;
        // Validate the input
        if (!originalUrl) {
            res.status(400).send({
                error: "Original URL is required."
            });
            return;
        }
        const isExist = yield urlModel_1.default.findOne({ originalUrl });
        if (isExist) {
            res.status(400).send({
                error: "This URL already exists in the database."
            });
            return;
        }
        const shortUrl = yield (0, urlService_1.default)(originalUrl, process.env.BASE_URL || "http://localhost:3000");
        res.send({
            message: "Short URL created successfully",
            shortUrl
        });
    });
}
exports.default = createShortUrl;
