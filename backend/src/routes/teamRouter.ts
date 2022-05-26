import express from "express";
import { TeamController } from "../controller/TeamController";

export const teamRouter = express.Router();

//sign up and login
const teamController = new TeamController();
teamRouter.post("/create", teamController.createTeam);
