require("dotenv").config(); // 加载环境变量

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user"); // 引入用户路由

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes); // 添加用户路由

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
