const { model, Schema } = require("mongoose");

const AccountSchema = new Schema({
  userName: { type: String, require: true },
  funds: { type: Number },
});

module.exports = AccountSchema;
