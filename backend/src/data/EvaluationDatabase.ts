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
    proactivity: number,
    commitment: number,
    team_work: number,
    skillset_growth: number,
    leadership: number,
    punctuality: number,
    work_under_pressure: number,
    participation: number,
    administrative_tasks: number,
    highlights_leaguer: string,
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
          proactivity,
          commitment,
          team_work,
          skillset_growth,
          leadership,
          punctuality,
          work_under_pressure,
          participation,
          administrative_tasks,
          highlights_leaguer,
          comment,
        })
        .into(EvaluationDatabase.TABLE_NAME);
    } catch (err: any) {
      throw new Error(err.sqlMessage || err.message);
    }
  }

  public async getEvaluationsByEmailCreator(email_creator: string) {
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

  public async getEvaluationsByEmailLeaguer(email_leaguer: string) {
    try {
      const result = await this.connection(EvaluationDatabase.TABLE_NAME)
        .select("*")
        .from(EvaluationDatabase.TABLE_NAME)
        .where({ leaguer_email: email_leaguer });

      return result.map((evaluations) =>
        Evaluation.toEvaluationModel(evaluations)
      );
    } catch (err: any) {
      throw new Error(err.sqlMessage || err.message);
    }
  }
}
