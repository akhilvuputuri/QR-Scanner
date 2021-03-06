const { createUser } = require("./User/create");
const { login } = require("./User/login");
const { favourite } = require("./Voucher_Fav/create");

// for vouchers
const { createVoucher } = require("./Voucher/create");
const { deleteVoucher } = require("./Voucher/delete");
const { editVoucher } = require("./Voucher/edit");
const { retrieveAllVouchers } = require("./Voucher/retrieveAll");
const { retrieveVoucher } = require("./Voucher/retrieve");
const { purchase } = require("./Voucher/purchase");
const { redeem } = require("./Voucher/redeem");
const { savings } = require("./User/savings");
const { totalRedeem } = require("./Voucher/totalRedeem");

module.exports = {
  createUser,
  login,
  createVoucher,
  retrieveAllVouchers,
  retrieveVoucher,
  editVoucher,
  deleteVoucher,
  favourite,
  purchase,
  redeem,
  savings,
  totalRedeem,
};
