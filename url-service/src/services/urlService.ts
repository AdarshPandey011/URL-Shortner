import { nanoid } from "nanoid";
import UrlModel from "../models/urlModel";


export const urlService = async (originalUrl:string,baseurl:string)=>{
    // const { nanoid } = await import("nanoid"); // dynamic import
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

export default urlService;