import { Request, Response } from "express";
import { EvaluationBusiness } from "../business/EvaluationBusiness";
import { EvaluationInputDTO } from "../model/Evaluation";

export class EvaluationController {
  async createEvaluation(req: Request, res: Response) {
    try {
      //inputs req
      const token_headers = req.headers.authorization as string;
      const input: EvaluationInputDTO = {
        leaguer_email: req.body.leaguer_email,
        email_creator_feedback: req.body.email_creator_feedback,
        email_evaluator: req.body.email_evaluator,
        performance: req.body.performance,
        quality_on_delivery: req.body.quality_on_delivery,
        commitment: req.body.commitment,
        team_work: req.body.team_work,
        participation: req.body.participation,
        punctuality: req.body.punctuality,
        comment: req.body.comment,
      };

      //creating feedback request in databank
      const evaluationBusiness = new EvaluationBusiness();
      await evaluationBusiness.createEvaluation(input, token_headers);
      res.status(200).send({
        message: "Avaliação respondida, obrigada!",
        email_creator_feedback: input.email_creator_feedback,
      });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async getEvaluations(req: Request, res: Response) {
    try {
      //inputs req
      const token_headers = req.headers.authorization as string;
      const email_creator = req.params.email_creator;

      //getting evaluations from databank
      const evaluationBusiness = new EvaluationBusiness();
      const evaluations = await evaluationBusiness.getAllEvaluations(
        email_creator,
        token_headers
      );
      res.status(200).send(evaluations);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
