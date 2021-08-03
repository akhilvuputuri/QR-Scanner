const { User } = require("../../models");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user == null) {
    return res.status(400).send("User does not exist");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("Incorrect Password");
    }
  } catch {
    res.status(500).send();
  }
};

module.exports = {
  login,
};
