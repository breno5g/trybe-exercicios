import mysql from "mysql2/promise"

const connection = mysql.createPool({
  host: 'localhost',
  user: "root",
  password: "docker",
  database: "TypeScriptExpress"
})

export class Connection {
  connection;
  constructor() {
    this.connection = connection
  }
}