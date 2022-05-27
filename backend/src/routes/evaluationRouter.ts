import express from "express";
import { EvaluationController } from "../controller/EvaluationController";

export const evaluationRouter = express.Router();
const evaluationController = new EvaluationController();

//get evaluations
evaluationRouter.get(
  "/get/:email_creator",
  evaluationController.getEvaluations
);

//create evaluation

evaluationRouter.post("/create", evaluationController.createEvaluation);
