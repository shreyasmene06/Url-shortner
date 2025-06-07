import { Request, Response } from "express";
import { urlModel } from "../model/shortUrl";

export const createUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const {fullUrl} = req.body;
        const urlFound = await urlModel.find({fullUrl: fullUrl});
        if (urlFound.length > 0) {
            res.status(200).json(urlFound[0]);
            return;
        } else {
            const shortUrl = await urlModel.create({fullUrl});
            res.status(201).json(shortUrl);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAllUrl = async (_req: Request, res: Response): Promise<void> => {
    try {
        const shortUrls=await urlModel.find();
        if(shortUrls.length<0){
            res.status(404).send({message:"ShortUrl not found"});
        }else{
            res.status(200).send(shortUrls);
        }
    } catch (error) {
        res.status(500).send({message:"Something went wrong"})
    }
};

export const getUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const shortUrl= await urlModel.findOne({shortUrl:req.params.id});
        if(!shortUrl){
            res.status(404).send({message:"Fullurl not found!"});
        }else{
            shortUrl.clicks++;
            shortUrl.save()
            res.redirect(`${shortUrl.fullUrl}`)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const shortUrl= await urlModel.findByIdAndDelete({_id:req.params.id});
        if(shortUrl){
            res.status(200).send({message:"Requested Url successfully deleted"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};