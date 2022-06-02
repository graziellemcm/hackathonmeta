import { ResponsibleDatabase } from "../data/ResponsibleDatabase";
import {
  LoginInputDTO,
  Responsibles,
  RoleInputDTO,
  SignupResponsibleInputDTO,
  stringToUserRole,
} from "../model/Responsible";
import { USER_ROLES } from "../model/User_Roles";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { Idgenerator } from "../services/IdGenerator";

const responsibleDatabase = new ResponsibleDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new Idgenerator();
export class ResponsibleBusiness {
  create = async (
    input: SignupResponsibleInputDTO,
    access_key: string | undefined
  ) => {
    if (!input.name) {
      throw new Error("Nome inválido");
    }

    if (!input.password || input.password.length < 6) {
      throw new Error("A senha deve conter no minimo 6 caracteres");
    }
    if (!input.email || input.email.indexOf("@") === -1) {
      throw new Error("Email invalido");
    }
    const user = await responsibleDatabase.findUserByEmail(input.email);

    if (user) {
      throw new Error("Email já cadastrado");
    }

    const id = idGenerator.generateId();

    const hashPassword = await hashManager.hash(input.password);
    const key = process.env.KEY;
    const role = stringToUserRole(input.role);
    if (role === USER_ROLES.ADMIN && !access_key) {
       throw new Error("Digite a 'access_key' para cadastrar-se como ADMIN.");
     }
    if (role === USER_ROLES.ADMIN && access_key !== key) {
       throw new Error("A 'access_key' está incorreta.");
    }
    await responsibleDatabase.create(
      id,
      input.name,
      input.email,
      hashPassword,
      role
    );

    const accessToken = authenticator.generateToken({
      id: id,
      role: role,
    });

    return accessToken;
  };

  login = async (input: LoginInputDTO) => {
    const userFromDB = await responsibleDatabase.findUserByEmail(input.email);

    const hashCompare = await hashManager.compare(
      input.password,
      userFromDB.password
    );

    const accessToken = authenticator.generateToken({
      id: userFromDB.id,
      role: userFromDB.role,
    });

    if (!hashCompare) {
      throw new Error("Senha inválida!");
    }

    return accessToken;
  };

  editRole = async (
    input: RoleInputDTO,
    tokenHeaders: string
  ): Promise<string> => {
    try {
      const { id, role } = input;

      if (!id || !role) {
        throw new Error("Esse endpoint requer um id e role como req.params .");
      }

      if (!tokenHeaders) {
        throw new Error(
          "Esse endpoint requer um token no headers authorization."
        );
      }

      const tokenData = authenticator.getTokenData(tokenHeaders);

      if (tokenData.role !== "ADMIN") {
        throw new Error("Somente ADMIN podem editar um leaguer.");
      }

      const accessToken = authenticator.generateToken({
        id: id,
        role: role,
      });

      await responsibleDatabase.editRole(id, role);

      return accessToken;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  async getAllResponsibles(
    token_headers: string
  ): Promise<Responsibles[] | undefined> {
    try {
      if (!token_headers) {
        throw new Error(
          "Esse endpoint requer um token no headers authorization."
        );
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token_headers);

      if (tokenData.role !== USER_ROLES.ADMIN) {
        throw new Error("Somente ADMIN pode ver avaliações.");
      }

      const responsiblesDatabase = new ResponsibleDatabase();
      const responsibles = await responsiblesDatabase.getAllResponsibles();
      if (!responsibles) {
        throw new Error("Ocorreu um erro, por favor tente novamente.");
      }
      return responsibles;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
