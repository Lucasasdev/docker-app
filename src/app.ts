import express, { Request, Response } from "express";
import userRouter from "./routes";
const app = express();

app.use(express.json());
app.use("/api", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Project running on Docker Container!").status(200);
});

export default app;
