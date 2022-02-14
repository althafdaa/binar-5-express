const user = require("../db.json");

const signIn = (req, res) => {
  const email = req.body.email;
  console.log(typeof email);
  const password = req.body.password;

  const indexuser = user.findIndex((x) => x.email === email);
  const passwordCheck = user.findIndex((x) => x.password === password);

  console.log(indexuser);
  if (indexuser === -1)
    return res.status(400).json({
      status: false,
      message: "Email doesn't exist",
    });

  if (passwordCheck === -1)
    return res.status(400).json({
      status: false,
      message: "Wrong password!",
    });

  res.status(200).redirect("/games").json({
    status: true,
    message: "Succesfully logged in",
  });
};

const loginIndex = (req, res) => {
  res.render("login", { title: "Login" });
};

module.exports = { signIn, loginIndex };
