
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//Routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

//Database import
import connectToMongoDB from "../bd/connectToMongoDB.js";




const app = express();
const PORT = process.env.PORT || 5500;
dotenv.config();
app.use(express.json()); // parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);



//app.get("/", (req, res) => {
    // root route http://localhost:5500/
    //res.send("Hello World!");
//});




app.listen(PORT,() => {
    
    
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);

});
