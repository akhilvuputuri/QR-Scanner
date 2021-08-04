const { User_Fav } = require("../../models");

const getFavourites = async (req, res) => {
  try {
    const fav = await User_Fav.findAll({
      where: { email: req.body.email },
    });

    return res.status(200).json({ fav });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getFavourites,
};
