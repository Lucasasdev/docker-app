import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Project running on Docker Container!").status(200);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
