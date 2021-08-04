const { Voucher } = require("../../models");

const retrieveAllVouchers = async (req, res) => {
 try {
  const vouchers = await Voucher.findAll();
  console.log('The vouchers have been successfully retrieved.');
  return res.status(200).json({ vouchers });
 } catch (error) {
  return res.status(500).json({ error: error.message });
 }
};

module.exports = {
 retrieveAllVouchers,
};