import { Request, Response } from "express";
import { EvaluationBusiness } from "../business/EvaluationBusiness";
import { EvaluationInputDTO } from "../model/Evaluation";

const evaluationBusiness = new EvaluationBusiness();

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
        proactivity: req.body.proactivity,
        commitment: req.body.commitment,
        team_work: req.body.team_work,
        skillset_growth: req.body.skillset_growth,
        leadership: req.body.leadership,
        punctuality: req.body.punctuality,
        work_under_pressure: req.body.work_under_pressure,
        participation: req.body.participation,
        administrative_tasks: req.body.administrative_tasks,
        highlights_leaguer: req.body.highlights_leaguer,
        comment: req.body.comment,
      };

      //creating feedback request in databank
      await evaluationBusiness.createEvaluation(input, token_headers);
      res.status(201).send({
        message: "Avaliação respondida, obrigada!",
        email_creator_feedback: input.email_creator_feedback,
        leaguer_email: input.leaguer_email,
      });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async getEvaluationsByCreatorEmail(req: Request, res: Response) {
    try {
      //inputs req
      const token_headers = req.headers.authorization as string;
      const email_creator = req.params.email_creator;

      //getting evaluations from databank
      const evaluationBusiness = new EvaluationBusiness();
      const evaluations =
        await evaluationBusiness.getAllEvaluationsByEmailCreator(
          email_creator,
          token_headers
        );
      res.status(200).send(evaluations);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
  async getEvaluationsByLeaguerEmail(req: Request, res: Response) {
    try {
      //inputs req
      const token_headers = req.headers.authorization as string;
      const leaguer_email = req.params.leaguer_email;

      //getting evaluations from databank
      const evaluations = await evaluationBusiness.getEvaluationsByEmailLeaguer(
        leaguer_email,
        token_headers
      );
      res.status(200).send(evaluations);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  getCompiledEvaluationsById = async (req: Request, res: Response): Promise<any> => {
    try {
      const token_headers = req.headers.authorization as string;
      const idLeaguer = req.params.idLeaguer;      

      const compiled = await evaluationBusiness.getCompiledEvaluationsById(
        idLeaguer,
        token_headers
      );

      res.status(200).send(compiled);

    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  

  // async iniciateEvaluation(req: Request, res: Response):Promise<void> {
  //   try {
  //     const token_headers = req.headers.authorization as string;
  //     const idLeaguer = req.params.idLeaguer as string 
  //     const idCreator = req.params.idCreator as string
      
  //     const input:any = {
  //       email_evaluators: req.body.email_evaluators,
  //     };

  //     await evaluationBusiness.iniciateEvaluation(input, token_headers, idLeaguer, idCreator);

  //     res.status(201).send({
  //       message: "Avaliação criada!",
  //       email_evaluators: input.email_evaluators
  //     });

  //   } catch (error: any) {
  //     res.status(400).send({ error: error.message });
  //   }
  // }
}
