import express, { Application, Request, Response } from "express";
import sequelize from "sequelize";
import { Sequelize, DataTypes, QueryInterface } from "sequelize";
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 環境変数
const mysqlDatabase = process.env.MYSQL_DATABASE; // データベース名
const mysqlRootPassword = process.env.MYSQL_ROOT_PASSWORD; // ROOTパスワード
const dbHost = process.env.DB_CONTAINER_IPV4; // DBコンテナIPv4
const dbPort = process.env.DB_CONTAINER_PORT; // DBコンテナポート番号
const apiHost = process.env.API_CONTAINER_IPV4; // APIコンテナIPv4
const apiPort = process.env.API_CONTAINER_PORT; // APIコンテナポート番号
const modelName = "User"; // モデル名

app.get("/", async (_req: Request, res: Response) => {
  return res.status(200).json("OK");
});

// サーバーを起動する処理
try {
  app.listen(apiPort, () => {
    console.log("server running at: http://" + apiHost + ":" + apiPort);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
