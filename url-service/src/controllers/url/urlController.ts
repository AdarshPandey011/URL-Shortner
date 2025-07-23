import { Request, Response } from "express";
import UrlModel from "../../models/urlModel";
import urlService from "../../services/urlService";

async function createShortUrl(req:Request,res:Response)
{
    const { originalUrl } = req.body;
    
    // Validate the input
    if (!originalUrl) {
        res.status(400).send({
            error: "Original URL is required."
        });
        return
    }

     const isExist = await UrlModel.findOne({ originalUrl })

    if (isExist) {
         res.status(400).send({
            error: "This URL already exists in the database."
        });
        return;
    }

    const shortUrl:string = await urlService(originalUrl, process.env.BASE_URL||"http://localhost:3000");




    res.send({
        message: "Short URL created successfully",
        shortUrl
    })


}

export default createShortUrl;