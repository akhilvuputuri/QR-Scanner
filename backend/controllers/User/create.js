const { User } = require("../../models");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const [user, created] = await User.findOrCreate({
      where: { username: req.body.username },
      defaults: {
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });
    let name;
    if (created) {
      name = user.username;
      return res.status(201).json({ name });
    }
    name = user.username;
    return res.status(201).json({
      name,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createUser,
};
