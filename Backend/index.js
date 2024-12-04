// import express from "express";
import dotenv from "dotenv";

dotenv.config();

// const app = express();

// app.get("/home", (req, res) => {
//     res.send(`hi from port ${process.env.PORT}`);
// });

// app.listen(process.env.PORT, () => {
//     console.log("listening on port 3001");
// });
// export { app };

import { connectDB } from "./db/connectDB.js";

connectDB();
