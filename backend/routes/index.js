const Router = require("express");

const { createUser, login } = require("../controllers");
const { createVoucher } = require("../controllers/Voucher/create");
const { deleteVoucher } = require("../controllers/Voucher/delete");
const { editVoucher } = require("../controllers/Voucher/edit");
const { retrieveAllVouchers } = require("../controllers/Voucher/retrieveAll");
const { retrieveVoucher } = require("../controllers/Voucher/retrieve");

const router = Router();
router.get("/", (req, res) => res.send("This is root!"));

// User routes
router.post("/user", createUser);
router.post("/login", login);

// Voucher routes
router.post("/vouchers/create_voucher", createVoucher);
router.get("/vouchers/all", retrieveAllVouchers);
router.get("/vouchers/view", retrieveVoucher);
router.put("/vouchers/edit_vouchers", editVoucher);
router.delete("/vouchers/delete_voucher", deleteVoucher);

module.exports = router;
