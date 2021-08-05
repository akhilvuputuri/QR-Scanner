const { Voucher } = require("../../models");

const redeem = async (req, res) => {
  try {
    const voucher = await Voucher.update(
      {
        redeemed: req.body.redeemed,
      },
      {
        where: { id: req.body.id },
      }
    );
    let name = voucher.name;
    return res
      .status(200)
      .send(`The ${name} Voucher has been successfully redeemed.`);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  redeem,
};
