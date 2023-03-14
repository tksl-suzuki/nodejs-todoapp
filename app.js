const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");

const connectDB = require("./db/connect");

require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));


//過去のエラー
//勝手にexpress と nodemonがuninstallされてしまう⇒再インストールで解決
//全角の文字が紛れていた　⇒解決：エラー内容をよく見るとどの行が怪しいかヒントあり

const PORT = 5000;
//ルーティング設計
app.use("/api/v1/tasks", taskRoute);


//データベースと接続
const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT,console.log("サーバが起動しました。"));
    }catch(err){
        console.log(err);
    }

};

start();

