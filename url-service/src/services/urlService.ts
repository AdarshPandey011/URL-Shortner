import { nanoid } from "nanoid";
import UrlModel from "../models/urlModel";

export const shortUrl = async (originalUrl:string,baseurl:string)=>{

    const shortCode = nanoid(6);

    const existing = await UrlModel.findOne({ originalUrl });

    if (existing) {
        return `${baseurl}/${existing.shortUrl}`;
    }   
    const url = new UrlModel({
        originalUrl,
        shortUrl: `${baseurl}/${shortCode}`,
    });
    
    await url.save();
    return `${baseurl}/${shortCode}`;




}