import path from "path";
import { fileURLToPath } from "url";
import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import mongoose, { mongo } from "mongoose";
import studentRoute from "./routes/student.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()
const app = express()
const port = process.env.NODE_ENV || 5000 
app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("/student",studentRoute);

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology :true
}).then(()=>{    
    app.listen(port,()=>{

        console.log(`Server is running on port ${port}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    }) 
}).catch((err)=>{
    console.log({"An Error Occured..":err});
})

