const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401); // 如果没有 token，返回 401
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403); // 如果 token 无效或过期，返回 403
    }
    req.user = user;
    next(); // token 验证通过，继续处理请求
  });
};

module.exports = authenticateToken;
