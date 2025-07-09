import { Request, Response } from "express";
import UrlModel from "../models/urlModel";

function createShortUrl(req:Request,res:Response)
{
    const { originalUrl, shortUrl, urlCode } = req.body;
    

    res.send({
        message: "Short URL created successfully",})


}

export default createShortUrl;