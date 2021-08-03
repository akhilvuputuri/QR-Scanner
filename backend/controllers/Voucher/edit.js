const { Voucher } = require("../../models");

const editVoucher = async (req, res) => {
 try {
  const voucher = await Voucher.update({
   name: req.body.name,
   claimable: req.body.claimable,
   value: req.body.value,
   cost: req.body.cost,
   expiry: req.body.expiry,
   redeemed: req.body.redeemed,
   qrCodeText: req.body.qrCodeText,
  }, {
   where: { id: req.body.id }
  });
  let name = voucher.name;
  return res.status(200).send(`The ${name} Voucher has been successfully edited.`);
 } catch (error) {
  return res.status(500).json({ error: error.message });
 }
};
module.exports = {
 editVoucher,
};