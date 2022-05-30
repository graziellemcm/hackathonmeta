import { Request, Response } from "express";
import { LeaguerBusiness } from "../business/LeaguerBusiness";
import { Leaguer } from "../model/Leaguer";
import { SignupLeaguerInputDTO } from "../types/signupLeaguerInputDTO";

const leaguerBusiness = new LeaguerBusiness();

export class LeaguerContoller {
  createLeaguer = async (req: Request, res: Response): Promise<any> => {
    try {
      const { name, email, team, phase, tecnologies, languages } = req.body; //não aceita o termo class, usei team

      const input: SignupLeaguerInputDTO = {
        name,
        email,
        team,
        phase,
        tecnologies,
        languages,
      };

      await leaguerBusiness.createLeaguer(input);

      res.status(201).send({ message: "Leaguer cadastrado com sucesso!" });
    } catch (error: any) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no cadastro");
    }
  };

  async getAllLeaguers(req: Request, res: Response): Promise<void> {
    try {
      //input req
      const token_headers = req.headers.authorization as string;

      //getting leaguers from databank
      const leaguersBusiness = new LeaguerBusiness();
      const leaguers = await leaguersBusiness.getAllLeaguers(token_headers);
      res.status(200).send(leaguers);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
