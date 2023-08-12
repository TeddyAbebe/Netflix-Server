const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoute");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://teddyab729:netflix@netflix.mdnkaso.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully...");
  });

  app.use("/api/user", userRoutes)

app.listen(5000, console.log("Server Started..."));
