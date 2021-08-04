const { User_Fav } = require("../../models");

const favourite = async (req, res) => {
  try {
    const [fav, created] = await User_Fav.findOrCreate({
      where: { email: req.body.email, voucher_name: req.body.voucher_name },
      defaults: {
        email: req.body.email,
        voucher_name: req.body.voucher_name,
      },
    });

    if (created) {
      return res.status(200).json({ fav: true });
    }

    return res.status(201).json({ fav });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  favourite,
};
