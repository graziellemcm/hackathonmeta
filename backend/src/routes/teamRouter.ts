import express from "express";
import { TeamController } from "../controller/TeamController";

export const teamRouter = express.Router();

//create team
const teamController = new TeamController();
teamRouter.post("/create", teamController.createTeam);
