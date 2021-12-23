const express = require("express");
const path = require("path");

const app = express();

const publicPath=path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "./views/home.html")));
app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, "./views/register.html")));
app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "./views/login.html")));
app.get("/cart", (req,res) => res.sendFile(path.resolve(__dirname, "./views/inconstruction.html")));
app.get("/offers", (req,res) => res.sendFile(path.resolve(__dirname, "./views/inconstruction.html")));
app.get("/officialstores", (req,res) => res.sendFile(path.resolve(__dirname, "./views/inconstruction.html")));
app.get("/sell", (req,res) => res.sendFile(path.resolve(__dirname, "./views/inconstruction.html")));
app.get("/help", (req,res) => res.sendFile(path.resolve(__dirname, "./views/inconstruction.html")));
app.get("/*", (req,res) => res.sendFile(path.resolve(__dirname, "./views/404.html")));

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));