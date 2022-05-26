import { Responsibles } from "../model/Responsible";
import { BaseDatabase } from "./BaseDatabase";


export class ResponsibleDatabase extends BaseDatabase {

  private static TABLE_NAME = "responsible_meta";

  public async create(

    id: string,
    email: string,
    name: string,
    password: string,
    role: string,
    team: string
  ): Promise<void> {
    try {

      await this.connection(ResponsibleDatabase.TABLE_NAME)
        .insert({
          id,
          email,
          name,
          password,
          role,
          team
        });

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findUserByEmail(email: string
  ) {
    try {
      const user = await this.connection('responsible_meta').select('*').where({ email })
      return user[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);

    }
  }

  public async  loginUser  (
    email: string
  ){
    try {
      const result = await this.connection('responsible_meta')
        .select("*")
        .where({ email })
      return {
        id: result[0].id,
        email: result[0].email,
        name: result[0].name,
        password: result[0].password
      }
    } catch (error: any) {
      throw new Error(error.slqMessage || error.message);

    }
  }
}