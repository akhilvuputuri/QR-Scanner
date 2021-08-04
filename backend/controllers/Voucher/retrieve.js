const { Voucher } = require("../../models");

const retrieveVoucher = async (req, res) => {
 try {
  const voucher = await Voucher.findAll({
   where: {
    id: req.body.id,
    name: req.body.name,
   }
  });
  let name = voucher.name;
  console.log(`The ${name} voucher has been successfully retrieved.`)
  return res.status(200).json({ voucher });
 } catch (error) {
  return res.status(500).json({ error: error.message });
 }
};

module.exports = {
 retrieveVoucher,
};