let accounts = require("./accounts");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const accountsRoutes = require("./api/accounts/accounts.routes");
const connectDb = require("./database");
connectDb();

app.use(express.json());
app.use("/accounts", accountsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`The application is running on ${process.env.PORT}`);
});
