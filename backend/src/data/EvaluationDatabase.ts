import { Evaluation } from "../model/Evaluation";
import { BaseDatabase } from "./BaseDatabase";

export class EvaluationDatabase extends BaseDatabase {
  private static TABLE_NAME = "received_feedbacks_meta";

  public async createEvaluationFeedback(
    id: string,
    leaguer_email: string,
    email_creator_feedback: string,
    email_evaluator: string,
    created_at_: Date | string,
    performance: number,
    quality_on_delivery: number,
    commitment: number,
    team_work: number,
    participation: number,
    punctuality: number,
    comment: string
  ): Promise<void> {
    try {
      await this.connection(EvaluationDatabase.TABLE_NAME)
        .insert({
          id,
          leaguer_email,
          email_creator_feedback,
          email_evaluator,
          created_at_,
          performance,
          quality_on_delivery,
          commitment,
          team_work,
          participation,
          punctuality,
          comment,
        })
        .into(EvaluationDatabase.TABLE_NAME);
    } catch (err: any) {
      throw new Error(err.sqlMessage || err.message);
    }
  }

  public async getEvaluationsByEmail(email_creator: string) {
    try {
      const result = await this.connection(EvaluationDatabase.TABLE_NAME)
        .select("*")
        .from(EvaluationDatabase.TABLE_NAME)
        .where({ email_creator_feedback: email_creator });

      return result.map((evaluations) =>
        Evaluation.toEvaluationModel(evaluations)
      );
    } catch (err: any) {
      throw new Error(err.sqlMessage || err.message);
    }
  }
}
