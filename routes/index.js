var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    message: "Welcome to the express js server",
    status: "success",
  });
});
router.post("/", (req, res) => {
  res.status(201).json({
    name: "Naim Biswas",
    email: "nayeembiswas30@gmail.com",
  });
});

module.exports = router;
