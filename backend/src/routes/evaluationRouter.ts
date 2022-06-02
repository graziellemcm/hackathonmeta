import express from "express";
import { EvaluationController } from "../controller/EvaluationController";

export const evaluationRouter = express.Router();
const evaluationController = new EvaluationController();

//get evaluations by creator
evaluationRouter.get(
  "/creator",
  evaluationController.getEvaluationsByCreatorEmail
);

//get evaluations by leaguer /
evaluationRouter.get(
  "/leaguer",
  evaluationController.getEvaluationsByLeaguerEmail
);
evaluationRouter.get(
  "/leaguer/averaged/:idLeaguer",
  evaluationController.getAveragedEvaluationsById
);

//create evaluation
evaluationRouter.post("/create", evaluationController.createEvaluation);
