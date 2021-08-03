const { User } = require("../../models");

const updateUser = async (req, res) => {
  try {
    await User.update(
      {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
      {
        where: { id: req.body.id },
      }
    );
    return res.status(200).send("Successfully updated User");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  updateUser,
};
