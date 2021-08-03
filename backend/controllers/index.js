const { createUser } = require("./User/create");
const { login } = require("./User/login");

// for vouchers
const { createVoucher } = require("./Voucher/create");
const { deleteVoucher } = require("./Voucher/delete");
const { editVoucher } = require("./Voucher/edit");
const { retrieveAllVouchers } = require("./Voucher/retrieveAll");
const { retrieveVoucher } = require("./Voucher/retrieve");

module.exports = {
  createUser,
  login,
  createVoucher,
  retrieveAllVouchers,
  retrieveVoucher,
  editVoucher,
  deleteVoucher,
};
