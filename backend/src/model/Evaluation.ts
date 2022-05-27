export class Evaluation {
  constructor(
    private id: string,
    private leaguer_email: string,
    private id_created_feedback: string,
    private created_at: Date | string,
    private performance: number,
    private quality_on_delivery: number,
    private commitment: number,
    private team_work: number,
    private participation: number,
    private punctuality: number,
    private comment: string
  ) {}
  getId() {
    return this.id;
  }

  getIdFeedbackCreated() {
    return this.id_created_feedback;
  }
  getCreatedAt() {
    return this.created_at;
  }

  getPerformance() {
    return this.performance;
  }

  getQualityOnDelivery() {
    return this.quality_on_delivery;
  }
  getCommitment() {
    return this.commitment;
  }
  getTeamWork() {
    return this.team_work;
  }
  getParticipation() {
    return this.participation;
  }
  getPunctuality() {
    return this.punctuality;
  }
  getComment() {
    return this.comment;
  }
  static toEvaluationModel(evaluation: any): Evaluation {
    return new Evaluation(
      evaluation.id,
      evaluation.leaguer_email,
      evaluation.id_created_feedback,
      evaluation.created_at,
      evaluation.performance,
      evaluation.quality_on_delivery,
      evaluation.commitment,
      evaluation.team_work,
      evaluation.participation,
      evaluation.punctuality,
      evaluation.comment
    );
  }
}
export interface EvaluationInputDTO {
  leaguer_email: string;
  email_creator_feedback: string;
  email_evaluator: string;
  performance: number;
  quality_on_delivery: number;
  commitment: number;
  team_work: number;
  participation: number;
  punctuality: number;
  comment: string;
}
