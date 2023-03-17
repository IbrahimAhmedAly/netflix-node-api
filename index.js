const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const UserRoute = require("./routes/users");
const movieRoute = require("./routes/movies");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db Connection Successful!!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", UserRoute);
app.use("/api/movies", movieRoute);

app.listen(3000, () => {
  console.log("Backend server is running!");
});
