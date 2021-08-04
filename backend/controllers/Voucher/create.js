const { Voucher } = require("../../models");

const createVoucher = async (req, res) => {
 try {
  const voucher = await Voucher.create({
   id: req.body.id,
   name: req.body.name,
   claimable: req.body.claimable,
   value: req.body.value,
   cost: req.body.cost,
   expiry: req.body.expiry,
   redeemed: req.body.redeemed,
   description: req.body.description,
   rating: req.body.rating,
   imageUrl: req.body.imageUrl,
   shopName: req.body.shopName,
   qrCodeText: req.body.qrCodeText,
  });
  let name = voucher.name;
  return res.status(200).send(`The ${name} Voucher has been successfully created.`);
 } catch (error) {
  return res.status(500).json({ error: error.message });
 }
};
module.exports = {
 createVoucher,
};