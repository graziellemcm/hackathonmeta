import { ResponsibleDatabase } from "../data/ResponsibleDatabase"
import { SignupResponsibleInputDTO } from "../model/Responsible"
import { USER_ROLES } from "../model/User_Roles"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { Idgenerator } from "../services/IdGenerator"
import { TokenGenerator } from "../services/TokenGenerator"


const responsibleDatabase = new ResponsibleDatabase()
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new Idgenerator();
export class ResponsibleBusiness {

    create = async (input: SignupResponsibleInputDTO) => {

        const { name, email, password } = input

        if (!name) {
            throw new Error("Nome inválido")
        }

        if (!password || input.password.length < 6) {
            throw new Error("A senha deve conter no minimo 6 caracteres")
        }
        if (!email || input.email.indexOf("@") === -1) {
            throw new Error("Email invalido");
        }
        const user = responsibleDatabase.findUserByEmail(email);

        if (await user) {
            throw new Error("Email já cadastrado")
        }

        const id = idGenerator.generateId();

        const hashPassword = await hashManager.hash(input.password);


        await responsibleDatabase.create(id, input.email, input.name, hashPassword, input.role, input.team);


        const accessToken = authenticator.generateToken({id});

        return accessToken
    }
    login = async (email:string, password: string) => {


        const userFromDB = await responsibleDatabase.loginUser(email);

        const hashCompare = await hashManager.compare(password, userFromDB.password);

        const accessToken = authenticator.generateToken({ id: userFromDB.id});

        if (!hashCompare) {
            throw new Error("Senha inválida!");
        }

        return accessToken;
    }
}