const { Voucher } = require("../../models");

const deleteVoucher = async (req, res) => {
 try {
  const voucher = await Voucher.destroy({
   where: {
    id: req.body.id,
    name: req.body.name,
   }
  });
  let name = voucher.name;
  return res.status(200).send(`The ${name} Voucher has been successfully deleted.`);
 } catch (error) {
  return res.status(500).json({ error: error.message });
 }
};
module.exports = {
 deleteVoucher,
};