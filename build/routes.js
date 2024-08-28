import * as controller from "./controllers/controller";
import express from "express";
const router = express.Router();
router.post("/insert", controller.createUser);
export default router;
