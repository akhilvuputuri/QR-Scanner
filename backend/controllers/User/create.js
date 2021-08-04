const { User } = require("../../models");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const [user, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        email: req.body.email,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });
    let email;
    if (created) {
      email = user.email;
      return res.status(201).json({ email });
    }
    email = user.email;
    return res.status(201).json({
      email,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createUser,
};
