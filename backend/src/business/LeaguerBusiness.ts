import { EvaluationDatabase } from "../data/EvaluationDatabase";
import { LeaguerDatabase } from "../data/LeaguerDatabase";
import { Evaluation } from "../model/Evaluation";
import { Leaguer } from "../model/Leaguer";
import { USER_ROLES } from "../model/User_Roles";
import { Authenticator } from "../services/Authenticator";
import { Idgenerator } from "../services/IdGenerator";
import { leaguerType } from "../types/leaguerType";
import { SignupLeaguerInputDTO } from "../types/signupLeaguerInputDTO";

const leaguerDatabase = new LeaguerDatabase();

export class LeaguerBusiness {
  createLeaguer = async (input: SignupLeaguerInputDTO): Promise<void> => {
    const { name, email, team, phase, tecnologies, languages } = input;

    if (!name || !email || !tecnologies) {
      throw new Error("Os campos name, email e technologies são obrigatórios.");
    }

    const registeredUser = await leaguerDatabase.findByEmail(email);
    if (registeredUser.length !== 0) {
      throw new Error("Email já cadastrado.");
    }

    if (!email.includes("@") || !email.includes(".com")) {
      throw new Error("Formato de email inválido.");
    }

    const idGenerator = new Idgenerator();
    const id = idGenerator.generateId();

    const leaguer: leaguerType = {
      id,
      name,
      email,
      team,
      phase,
      tecnologies,
      languages,
    };

    await leaguerDatabase.create(leaguer);
  };
  async getAllLeaguers(token_headers: string): Promise<Leaguer[] | undefined> {
    try {
      //verifying token
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
          "Somente gestores e administradores e gestores podem ver avaliações."
        );
      }
      //fecthing leaguers
      const leaguersDatabase = new LeaguerDatabase();
      const leaguers = await leaguersDatabase.getAllLeaguers();
      if (!leaguers) {
        throw new Error("Ocorreu um erro, por favor tente novamente.");
      }
      return leaguers;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
