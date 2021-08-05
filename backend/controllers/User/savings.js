const { Voucher } = require("../../models");
const { User } = require("../../models");

const savings = async (req, res) => {
  try {
    const vouchers = await Voucher.findAll();

    let saved = 0;
    vouchers.forEach((voucher) => {
      saved += parseInt(voucher.value) - parseInt(voucher.cost);
    });

    return res.status(200).json({ saved, count: vouchers.length });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  savings,
};
