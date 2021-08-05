const { Voucher } = require("../../models");

const purchase = async (req, res) => {
  try {
    const voucher = await Voucher.update(
      {
        UserId: req.body.userId,
      },
      {
        where: { id: req.body.voucherId },
      }
    );
    return res.status(200).send(`Voucher has been bought.`);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  purchase,
};
