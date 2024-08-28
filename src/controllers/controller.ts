import * as repository from "../repositories/repository";
import { Response, Request } from "express";

export const postUser = async (req: Request, res: Response) => {
  const body = req.body;
  const result = await repository.createUser(body);
  if (result) {
    res.sendStatus(200);
  }
  res.sendStatus(400);
};
