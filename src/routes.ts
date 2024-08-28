import * as controller from "./controllers/controller";
import express from "express";
const router = express.Router();

router.post("/insert", controller.postUser);

export default router;
