import express from "express";
import { mySqlConection } from "./database";
import { routes } from "./routes";
import "dotenv/config";


const APP_PORT:number = 3000;

const app = express();

app.use(express.json());
app.use(routes);

mySqlConection.hasConection();

app.listen(APP_PORT || 5000, () => {
  console.log(`Listening on Port: ${APP_PORT}`);
});

export default app;
