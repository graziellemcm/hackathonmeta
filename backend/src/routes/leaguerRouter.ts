import express from "express";
import { LeaguerContoller } from "../controller/LeaguerController";

export const leaguerRouter = express.Router();

const leaguerController = new LeaguerContoller();

//get all leaguers
leaguerRouter.get("/getAll", leaguerController.getAllLeaguers);

//edit leaguers
// leaguerRouter.put("/edit", leaguerController.editLeaguer)
leaguerRouter.post("/create", leaguerController.createLeaguer);
