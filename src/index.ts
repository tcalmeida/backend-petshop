import express from "express";
import { mySqlConection } from "./database";

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server started");
  mySqlConection.hasConection();
});

export default app;
