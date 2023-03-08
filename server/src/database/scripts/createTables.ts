import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";
import { requireSQL } from "../requireSQL";
import { connectionConfig } from "../connectionConfig";
//import { databasePool } from "../databasePool";

async function createTables() {
  //const connection = await databasePool.getConnection();
  //const [fields] = await connection.query("select * from notepads");
  //console.log(fields);

  const createTablesSql = await requireSQL("createTables.sql");
  const connection = await mysql.createConnection(connectionConfig);

  await connection.query(createTablesSql);
  console.log("As tabelas foram criadas com sucesso!");
  connection.destroy();
}

createTables();
