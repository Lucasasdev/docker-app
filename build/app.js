import express from "express";
import userRouter from "./routes";
const app = express();
app.use("/appdocker", userRouter);
app.get("/", (req, res) => {
    res.send("Project running on Docker Container!").status(200);
});
export default app;
