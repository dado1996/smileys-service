import { Router } from "express";
import validatorHandler from "../middlewares/validatorHandler.js";
import { createMoodSchema } from "../schemas/moodSchema.js";
import MoodServices from "../services/moodServices.js";

const router = Router();
const service = new MoodServices();

router.post(
  "/",
  validatorHandler(createMoodSchema, "body"),
  (request, response) => {
    try {
      const { body } = request;
      const result = service.store(body);

      if (!result) {
        throw new Error("Ha ocurrido un error");
      }

      response.json({
        status: "success",
        message: "Data saved successfully",
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({
        status: "error",
        message: "Error on request",
      });
    }
  }
);

export default router;
