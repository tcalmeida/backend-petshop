import express from "express";
import { mySqlConection } from "./database";

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log("Server running on port: 3000");
  mySqlConection.hasConection()
});

export default app;