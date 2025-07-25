const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const coursesRoutes = require("./routes/courses");
app.use("/courses", coursesRoutes);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

// Run server
app.listen(3001, () => {
  console.log("🚀 Server running at http://localhost:3001");
});