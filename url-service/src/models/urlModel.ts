import mongoose from "mongoose"

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
  urlCode: string;
  createdAt: Date;
}

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '7d' } 
    // expires after 7 days
})

const UrlModel = mongoose.model<IUrl>("Url", urlSchema);
export default UrlModel;