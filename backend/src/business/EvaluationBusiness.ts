import { Authenticator } from "../services/Authenticator";
import { Idgenerator } from "../services/IdGenerator";
import { Evaluation, EvaluationInputDTO } from "../model/Evaluation";
import { EvaluationDatabase } from "../data/EvaluationDatabase";
import { ResponsibleDatabase } from "../data/ResponsibleDatabase";
import { LeaguerDatabase } from "../data/LeaguerDatabase";
import { USER_ROLES } from "../model/User_Roles";

const authenticator = new Authenticator();
const evaluationDatabase = new EvaluationDatabase();

export class EvaluationBusiness {
  async createEvaluation(
    input: EvaluationInputDTO,
    token_headers: string
  ): Promise<void> {
    try {
      //generating id
      const idGenerator = new Idgenerator();
      const id = idGenerator.generateId();

      //created at
      const created_at_ = new Date();

      //verifying input and token
      if (
        !input.email_creator_feedback ||
        !input.leaguer_email ||
        !input.email_evaluator ||
        !input.comment ||
        !input.participation ||
        !input.commitment ||
        !input.performance ||
        !input.punctuality ||
        !input.quality_on_delivery ||
        !input.team_work ||
        typeof input.participation !== "number" ||
        typeof input.performance !== "number" ||
        typeof input.punctuality !== "number" ||
        typeof input.commitment !== "number" ||
        typeof input.quality_on_delivery !== "number" ||
        typeof input.team_work !== "number" ||
        typeof input.comment !== "string"
      )
        throw new Error(
          "Um ou mais campos inválidos, certifique-se de que o campo 'comment' é uma string e os demais campos são 'numbers'."
        );

      if (
        input.email_creator_feedback.indexOf("@") === -1 ||
        input.email_evaluator.indexOf("@") === -1 ||
        input.leaguer_email.indexOf("@") === -1
      ) {
        throw new Error("Email inválido.");
      }
      if (!token_headers) {
        throw new Error(
          "Esse endpoint requer um token no headers authorization."
        );
      }

      //token authentication
      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token_headers);

      //validating user role
      if (
        tokenData.role !== USER_ROLES.ADMIN &&
        tokenData.role !== USER_ROLES.MENTOR
      ) {
        throw new Error(
          "Somente mentores e administradores podem criar novas avaliações."
        );
      }
      //validating user creator email
      const responsibleDatabase = new ResponsibleDatabase();
      const isRegisteredUser = await responsibleDatabase.findUserByEmail(
        input.email_creator_feedback
      );
      if (!isRegisteredUser) {
        throw new Error("Usuário não cadastrado.");
      }

      //validating leaguer name
      const leaguerDatabase = new LeaguerDatabase();
      const isRegisteredLeaguer = await leaguerDatabase.getLeaguerByEmail(
        input.leaguer_email
      );
      if (!isRegisteredLeaguer) {
        throw new Error("Leaguer não cadastrado.");
      }

      //creating feedback
      const evaluationDatabase = new EvaluationDatabase();
      await evaluationDatabase.createEvaluationFeedback(
        id,
        input.leaguer_email,
        input.email_creator_feedback,
        input.email_evaluator,
        created_at_,
        input.performance,
        input.quality_on_delivery,
        input.proactivity,
        input.commitment,
        input.team_work,
        input.skillset_growth,
        input.leadership,
        input.punctuality,
        input.work_under_pressure,
        input.participation,
        input.administrative_tasks,
        input.highlights_leaguer,
        input.comment
      );
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getAllEvaluationsByEmailCreator(
    email_creator: string,
    token_headers: string
  ): Promise<Evaluation[] | undefined> {
    try {
      //verifying params and token
      if (!email_creator || email_creator.indexOf("@") === -1) {
        throw new Error("Insira um email válido.");
      }

      if (!token_headers) {
        throw new Error(
          "Esse endpoint requer um token no headers authorization."
        );
      }
      //validating user creator email
      const responsibleDatabase = new ResponsibleDatabase();
      const isRegisteredUser = await responsibleDatabase.findUserByEmail(
        email_creator
      );
      if (!isRegisteredUser) {
        throw new Error("Acesso negado, usuário não cadastrado.");
      }

      //token authentication
      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token_headers);

      //validating user role
      if (tokenData.role !== "ADMIN" && tokenData.role !== "GESTOR") {
        throw new Error(
          "Somente gestores e administradores e gestores podem ver avaliações."
        );
      }
      //fecthing feedback
      const evaluationDatabase = new EvaluationDatabase();
      const evaluations = await evaluationDatabase.getEvaluationsByEmailCreator(
        email_creator
      );
      if (!evaluations) {
        throw new Error("Avaliação não cadastrada.");
      }
      return evaluations;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getEvaluationsByEmailLeaguer(
    leaguer_email: string,
    token_headers: string
  ): Promise<Evaluation[] | undefined> {
    try {
      //verifying params and token
      if (!leaguer_email || leaguer_email.indexOf("@") === -1) {
        throw new Error("Insira um email válido.");
      }

      if (!token_headers) {
        throw new Error(
          "Esse endpoint requer um token no headers authorization."
        );
      }
      //validating leaguer email
      const leaguerDatabase = new LeaguerDatabase();
      const isRegisteredLeaguer = await leaguerDatabase.getLeaguerByEmail(
        leaguer_email
      );
      if (!isRegisteredLeaguer) {
        throw new Error("Acesso negado, usuário não cadastrado.");
      }
      //token authentication

      const tokenData = authenticator.getTokenData(token_headers);

      //validating user role
      if (tokenData.role !== "ADMIN") {
        throw new Error("Somente administradores podem ver avaliações.");
      }
      //fetching feedback

      const evaluations = await evaluationDatabase.getEvaluationsByEmailLeaguer(
        leaguer_email
      );
      if (!evaluations) {
        throw new Error("Avaliação não cadastrada.");
      }
      return evaluations;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  getCompiledEvaluationsById = async (
    idLeaguer: string,
    token_headers: string
  ): Promise<any> => {
    try {
      if (!token_headers && !idLeaguer) {
        throw new Error(
          "Esse endpoint requer um token no headers authorization e o idLeaguer."
        );
      }

      const tokenData = authenticator.getTokenData(token_headers);

      if (
        tokenData.role !== "ADMIN" &&
        tokenData.role !== "MENTOR" &&
        tokenData.role !== "GESTOR"
      ) {
        throw new Error(
          "Somente ADMIN, MENTOR e GESTOR podem ver o compilado de avaliações."
        );
      }

      const compiled = await evaluationDatabase.getCompiledEvaluationsById(
        idLeaguer
      );

      return compiled;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
