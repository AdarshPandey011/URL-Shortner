import UrlModel from "../models/urlModel";
import analyticsModel from "../models/analyticsModel";
export async function analytics(shortUrl:String,ip:String){
    const BASE_URL = process.env.BASE_URL
    const user = await UrlModel.findOne({shortUrl:`${BASE_URL}/${shortUrl}`})
    console.log(user)
    if(user){
        await analyticsModel.create({
            shortUrl,
            ip
        })
       
        return user.originalUrl
    }
    else{
        return ""
    }
}