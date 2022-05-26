import { Request, Response } from "express";
import { ResponsibleBusiness } from "../business/ResponsibleBusiness";
import { LoginInputDTO, SignupResponsibleInputDTO } from "../model/Responsible";

const responsibleBusiness = new ResponsibleBusiness()

export class ResponsibleController{
    
    async create  (req:Request, res:Response){

        try {
            
            const input: SignupResponsibleInputDTO ={
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                team: req.body.team
            }
            
            const token = await responsibleBusiness.create(input) 
            
            res.status(201).send({
                message:"Usuário cadastrado com sucesso!",
                token: token })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }
    async login (req: Request, res: Response){

        try {

            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await responsibleBusiness.login(input.email, input.password);

            res.status(200).send({message: "Usuário logado", token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}