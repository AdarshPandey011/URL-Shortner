import { Router } from "express";
import  createShortUrl  from "../controllers/url/urlController"
import { redirectShortUrl } from "../controllers/url/redirectShortUrl";
const router = Router();
router.post("/", createShortUrl);
router.get("/:shortUrl",redirectShortUrl)

export default router;

