import { Router } from "express";
import moodRouter from "./moodRouter.js";

function routerApi(app) {
  const router = Router();

  router.use("/mood", moodRouter);

  app.use("/api/v1", router);
}

export default routerApi;
