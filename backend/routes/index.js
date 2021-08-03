const Router = require("express");

const { createUser, login } = require("../controllers");

const router = Router();
router.get("/", (req, res) => res.send("This is root!"));

// User routes
router.post("/user", createUser);
router.post("/login", login);

module.exports = router;
