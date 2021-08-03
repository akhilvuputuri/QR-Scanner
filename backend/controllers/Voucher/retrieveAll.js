const { Voucher } = require("../../models");

const retrieveAllVouchers = async (req, res) => {
 try {
  await Voucher.findAll();
  return res.status(200).send(`The vouchers have been successfully retrieved.`);
 } catch (error) {
  return res.status(500).json({ error: error.message });
 }
};

module.exports = {
 retrieveAllVouchers,
};