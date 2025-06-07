import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import shortUrl from "./routes/shortUrl"
import connectDb from "./config/dbConfig"

dotenv.config();
connectDb();

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../../client-app/url-shortner-app/dist')));

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

// API routes
app.use("/api", shortUrl);

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../client-app/url-shortner-app/dist/index.html'));
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});