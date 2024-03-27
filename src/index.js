import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from "morgan";
import helmet from "helmet";
import connectDB from './config/index.js';
import usersRoutes from "./routes/users.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
//
import { createAdmin, createRoles } from "./libs/initialSetup.js";

const app = express();

app.use(express.json()); 
dotenv.config();
connectDB();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;



app.listen(4000, () => {
    console.log(`servidor en el puerto ${PORT}`);
})