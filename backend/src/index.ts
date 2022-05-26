import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import cors from "cors";
import { teamRouter } from "./routes/teamRouter";
import { responsibleRouter } from "./routes/userRouter";
import { leaguerRouter } from "./routes/leaguerRouter";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/team", teamRouter);
app.use("/responsible", responsibleRouter);
app.use("/create", leaguerRouter)


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
