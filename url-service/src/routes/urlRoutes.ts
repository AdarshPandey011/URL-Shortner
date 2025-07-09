import { Router } from "express";
import  createShortUrl  from "../controllers/urlController"
const router = Router();
router.post("/", createShortUrl);

export default router;

