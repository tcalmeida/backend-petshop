import { Sequelize, Options } from "sequelize";

export default class Connection {
  private instance: Sequelize;
  private db_name: string;
  private db_user: string;
  private db_pass: string;
  private db_config: Options;

  constructor(
    dbName: string,
    dbUser: string,
    dbPass: string,
    dbConfig: Options
  ) {
    try {
      this.db_name = dbName;
      this.db_user = dbUser;
      this.db_pass = dbPass;
      this.db_config = dbConfig;

      this.instance = new Sequelize(dbName, dbUser, dbPass, dbConfig); // constructor que cria uma nova conexao com o BD
      console.log(`Database: ${this.db_name} connected`);
    } catch (err) {
      console.error("Database connection error");
      throw err;
    }
  }
  getInstance() {
    return this.instance;
  }
  async hasConection() {
    try {
      await this.instance.authenticate();
      console.log(`Database: ${this.db_name} connected`);
    } catch (error) {
      console.error("Database connection error");
    }
  }
}