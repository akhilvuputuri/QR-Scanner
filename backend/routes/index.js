const Router = require("express");

const { createUser, login, purchase, redeem } = require("../controllers");
const { createVoucher } = require("../controllers/Voucher/create");
const { deleteVoucher } = require("../controllers/Voucher/delete");
const { editVoucher } = require("../controllers/Voucher/edit");
const { retrieveAllVouchers } = require("../controllers/Voucher/retrieveAll");
const { retrieveVoucher } = require("../controllers/Voucher/retrieve");
const { favourite } = require("../controllers/Voucher_Fav/create");

const router = Router();
router.get("/", (req, res) => res.send("This is root!"));

// User routes
router.post("/user", createUser);
router.post("/login", login);

// Voucher routes
router.post("/vouchers", createVoucher);
router.get("/vouchers/all", retrieveAllVouchers);
router.get("/vouchers/view", retrieveVoucher);
router.put("/vouchers", editVoucher);
router.delete("/vouchers", deleteVoucher);
router.put("/purchase", purchase);
router.put("/redeem", redeem);

// User Fav
router.post("/favourite", favourite);

module.exports = router;
