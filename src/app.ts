import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("First project using Docker!").status(200);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
