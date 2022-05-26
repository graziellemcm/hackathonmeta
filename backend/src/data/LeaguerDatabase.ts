import { leaguerType } from "../types/leaguerType";
import { User } from "../types/userType";
import { BaseDatabase } from "./BaseDatabase";


export class LeaguerDatabase extends BaseDatabase {

    findByEmail = async(email:string):Promise<any>=>{
        const user = await this.connection.raw(`
        SELECT * FROM leaguer_meta
        WHERE email = "${email}";
    `)
    console.log(user);
    
        return user[0]
    }

    create = async(leaguer:leaguerType)=>{

        await this.connection.raw(`
        INSERT INTO leaguer_meta (id, name, email, class, phase, tecnologies, languages)
            VALUES (
                "${leaguer.id}",
                "${leaguer.name}",
                "${leaguer.email}",
                "${leaguer.team}",
                "${leaguer.phase}",
                "${leaguer.tecnologies}",
                "${leaguer.languages}"
                );
        `)
    }    
}