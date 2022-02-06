const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`${__dirname}/../db.json`));

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users: users,
    },
  });
};

module.exports = { getAllUsers };
