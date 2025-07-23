import {Request,Response} from "express"
import { analytics } from "../../services/analytics";

export async function redirectShortUrl(req:Request,res:Response){
    console.log(req.params);
    const shortUrl = req.params.shortUrl
    if(!shortUrl){
        return res.send("Short url is required")
    }
    const ip = req.ip || "unknown"
    const originalUrl = await analytics(shortUrl,ip!)
    console.log("REDIRECT URL",originalUrl)
    res.redirect(originalUrl)

}