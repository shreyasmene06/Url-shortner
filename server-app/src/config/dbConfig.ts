import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected: ",
            connect.connection.host,
            connect.connection.name)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDb;