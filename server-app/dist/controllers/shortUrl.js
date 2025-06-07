"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUrl = exports.getUrl = exports.getAllUrl = exports.createUrl = void 0;
const shortUrl_1 = require("../model/shortUrl");
const createUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullUrl } = req.body;
        if (!fullUrl) {
            res.status(400).json({ message: "Full URL is required" });
            return;
        }
        const urlExists = yield shortUrl_1.urlModel.findOne({ fullUrl });
        if (urlExists) {
            res.status(200).json(urlExists);
            return;
        }
        const shortUrl = yield shortUrl_1.urlModel.create({ fullUrl });
        res.status(201).json(shortUrl);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.createUrl = createUrl;
const getAllUrl = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const urls = yield shortUrl_1.urlModel.find();
        res.status(200).json(urls);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.getAllUrl = getAllUrl;
const getUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = yield shortUrl_1.urlModel.findById(req.params.id);
        if (!url) {
            res.status(404).json({ message: "URL not found" });
            return;
        }
        url.clicks++;
        yield url.save();
        res.status(200).json(url);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.getUrl = getUrl;
const deleteUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = yield shortUrl_1.urlModel.findById(req.params.id);
        if (!url) {
            res.status(404).json({ message: "URL not found" });
            return;
        }
        yield shortUrl_1.urlModel.deleteOne({ _id: req.params.id });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.deleteUrl = deleteUrl;
