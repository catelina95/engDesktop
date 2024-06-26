const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth");

// 获取用户信息的接口
router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    data: {
      username: "catelina",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/004/899/833/non_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg",
    },
    message: "ok",
  });
});

module.exports = router;
