import { LeaguerDatabase } from "../data/LeaguerDatabase"
import { Idgenerator } from "../services/IdGenerator"
import { leaguerType } from "../types/leaguerType"
import { SignupLeaguerInputDTO } from "../types/signupLeaguerInputDTO"

const leaguerDatabase = new LeaguerDatabase

export class LeaguerBusiness{

    createLeaguer = async (input:SignupLeaguerInputDTO):Promise<void>=>{

        const {name, email, team, phase, tecnologies, languages} = input

        if(!name || !email || !tecnologies){
            throw new Error("Os campos name, email e technologies são obrigatórios.")
        }

        const registeredUser = await leaguerDatabase.findByEmail(email)
        if(registeredUser.length!==0){
            throw new Error("Email já cadastrado.")
        }

        if (!email.includes('@') || !email.includes('.com')) {
            throw new Error ("Formato de email inválido." )
        }

        const idGenerator = new Idgenerator
        const id = idGenerator.generateId()

        const leaguer:leaguerType = {id, name, email, team, phase, tecnologies, languages}

        await leaguerDatabase.create(leaguer)
    }
}