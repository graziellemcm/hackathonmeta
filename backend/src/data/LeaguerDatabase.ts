import { Leaguer } from "../model/Leaguer";
import { leaguerType } from "../types/leaguerType";
import { User } from "../types/userType";
import { BaseDatabase } from "./BaseDatabase";

export class LeaguerDatabase extends BaseDatabase {
  private static TABLE_NAME = "leaguer_meta";

  findByEmail = async (email: string): Promise<any> => {
    const user = await this.connection.raw(`
        SELECT * FROM leaguer_meta
        WHERE email = "${email}";
    `);
  

    return user[0];
  };

  create = async (leaguer: leaguerType) => {
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
        `);
  };
  public async getLeaguerByEmail(email: string): Promise<Leaguer> {
    try {
      const result = await this.connection(LeaguerDatabase.TABLE_NAME)
        .select("*")
        .from(LeaguerDatabase.TABLE_NAME)
        .where({ email: email });
      return result[0] && Leaguer.toLeaguerModel(result[0]);
    } catch (err: any) {
      throw new Error(err.sqlMessage || err.message);
    }
  }
}
