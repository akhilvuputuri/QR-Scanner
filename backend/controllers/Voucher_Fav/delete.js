const { User_Fav } = require("../../models");

const unfavourite = async (req, res) => {
  try {
    const deleted = await User_Fav.destory({
      where: { email: req.body.email, voucher_name: req.body.voucher_name },
    });

    return res
      .status(200)
      .json({ message: "Successfully deleted voucher", deleted });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  unfavourite,
};
