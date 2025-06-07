"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
dotenv_1.default.config();
(0, dbConfig_1.default)();
const port = process.env.PORT || 5001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true
}));
// Serve static files from the React app
app.use(express_1.default.static(path_1.default.join(__dirname, '../../../client-app/url-shortner-app/dist')));
// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});
// API routes
app.use("/api", shortUrl_1.default);
// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../../client-app/url-shortner-app/dist/index.html'));
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
