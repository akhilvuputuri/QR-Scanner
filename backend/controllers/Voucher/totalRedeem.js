const { Voucher } = require("../../models");

const totalRedeem = async (req, res) => {
  try {
    const vouchers = await Voucher.findAll({
      where: { name: req.params.name },
    });
    let redeem = 0;
    const total = vouchers.length;
    vouchers.forEach((voucher) => {
      if (voucher.redeemed) {
        redeem += 1;
      }
    });
    return res.status(200).json({ redeem, total });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  totalRedeem,
};
