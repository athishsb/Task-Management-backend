const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("🙋‍♂️ Welcome to Task Management app!");
});


const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl)
    .then((response) => {
        if (response) console.log("Database connection successful");
    })
    .catch((err) => console.log("Database connection failed", err));

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});