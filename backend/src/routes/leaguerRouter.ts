import express from "express";
import { LeaguerContoller } from "../controller/LeaguerController";

export const leaguerRouter = express.Router();

const leaguerController = new LeaguerContoller

leaguerRouter.post("/leaguer", leaguerController.createLeaguer)