const express = require("express");
const homeRouter = require("./routes/homeRoute");
const gameRouter = require("./routes/gameRoute");
const userRouter = require("./routes/userRoute");
const loginRouter = require("./routes/loginRoute");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/public`));

app.use("/", homeRouter);
app.use("/games", gameRouter);
app.use("/api/v1/users", userRouter);
app.use("/login", loginRouter);

module.exports = app;
