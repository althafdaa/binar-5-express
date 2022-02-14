const fs = require("fs");

const users = JSON.parse(fs.readFileSync(`${__dirname}/../db.json`));

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users: users,
    },
  });
};

const createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;

  const newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);

  fs.writeFile(`${__dirname}/../db.json`, JSON.stringify(users), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        users: newUser,
      },
    });
  });
};

const getUser = (req, res) => {
  const id = req.params.id * 1;

  const user = users.find((el) => el.id === id);
  if (!user)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  res.status(200).json({
    status: "success",
    data: {
      users: user,
    },
  });
};

const deleteUser = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};

module.exports = { getAllUsers, createUser, getUser, deleteUser };
