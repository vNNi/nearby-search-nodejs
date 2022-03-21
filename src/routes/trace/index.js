import express from "express";

import { TraceController } from "../../controllers/index.js";

const { Router } = express;
const app = Router();

app.get("/trace/:id", async (req, res) => {
  await TraceController.getTraceByOrderId(req, res);
});

export default app;
