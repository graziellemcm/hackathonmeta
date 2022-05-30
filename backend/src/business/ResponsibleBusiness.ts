import { ResponsibleDatabase } from "../data/ResponsibleDatabase";
import {
  LoginInputDTO,
  SignupResponsibleInputDTO,
  stringToUserRole,
} from "../model/Responsible";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { Idgenerator } from "../services/IdGenerator";

const responsibleDatabase = new ResponsibleDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new Idgenerator();
export class ResponsibleBusiness {
  create = async (input: SignupResponsibleInputDTO) => {
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

    const role = stringToUserRole(input.role);

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
  
  login = async (input:LoginInputDTO) => {
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
}
