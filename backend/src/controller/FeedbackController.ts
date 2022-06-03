import { Request, Response } from "express";
import { FeedbackBusiness } from "../business/FeedbackBusiness";
import { FeedbackInputDTO } from "../model/Feedback";
import { transporter } from "../services/Transporter";

export class FeedbackController {
  async createFeedback(req: Request, res: Response) {
    try {
      //inputs req
      const input: FeedbackInputDTO = {
        email_leaguer: req.body.email_leaguer,
        email_creator: req.body.email_creator,
        email_evaluators: req.body.email_evaluators,
      };

      //creating feedback request in databank
      const feedbackBusiness = new FeedbackBusiness();
      await feedbackBusiness.createFeedback(input);
      await transporter(input.email_evaluators);
      res.status(201).send({
        message: "Avaliação criada!",
        email_creator: input.email_creator,
        email_leaguer: input.email_leaguer,
      });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
