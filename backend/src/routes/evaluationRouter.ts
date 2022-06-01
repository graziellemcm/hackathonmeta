import express from "express";
import { EvaluationController } from "../controller/EvaluationController";

export const evaluationRouter = express.Router();
const evaluationController = new EvaluationController();

//get evaluations by creator
evaluationRouter.get(
  "/creator/:email_creator",
  evaluationController.getEvaluationsByCreatorEmail
);

//get evaluations by leaguer /
evaluationRouter.get(
  "/leaguer/:leaguer_email",
  evaluationController.getEvaluationsByLeaguerEmail
);
evaluationRouter.get(
  "/leaguer/compiled/:idLeaguer",
  evaluationController.getCompiledEvaluationsById
);

//create evaluation
evaluationRouter.post("/create", evaluationController.createEvaluation);
evaluationRouter.post("/iniciate/:idLeaguer/:idCreator", evaluationController.iniciateEvaluation);

