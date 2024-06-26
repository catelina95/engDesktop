const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const validMobile = "15521606956";
const validCode = "123456";
const secretKey = process.env.JWT_SECRET; // 使用环境变量中的密钥
console.log("secretKey", process.env.JWT_SECRET);

router.post("/login", (req, res) => {
  const { mobile, code } = req.body;

  if (mobile === validMobile && code === validCode) {
    const token = jwt.sign({ mobile }, secretKey, { expiresIn: "7d" });
    return res.status(200).json({
      data: { token },
      message: "ok",
    });
  }

  return res
    .status(401)
    .json({ data: null, message: "手机号或者验证码格式不正确" });
});

module.exports = router;
