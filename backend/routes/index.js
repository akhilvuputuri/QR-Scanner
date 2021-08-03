const Router = require("express");

const { createUser } = require("../controllers");

const router = Router();
router.get("/", (req, res) => res.send("This is root!"));

// User routes
router.post("/user", createUser);

module.exports = router;
