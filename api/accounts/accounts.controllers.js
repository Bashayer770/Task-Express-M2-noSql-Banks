let accounts = require("../../accounts");
const Account = require("./db/model/Account");

exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.accountDelete = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findOneAndDelete({
      _id: accountId,
    });

    res.status(204).end(foundAccount);
  } catch (error) {
    res.status(404).json({ message: "Account not found" });
  }
};

exports.accountUpdate = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findOneAndUpdate(
      { _id: accountId },
      req.body
    );

    res.status(204).end(foundAccount);
  } catch (error) {
    res.status(404).json({ message: "Account not found" });
  }
};

exports.accountsGet = async (req, res) => {
  try {
    const getAccounts = await Account.find();
    res.json(getAccounts);
  } catch (error) {
    res.status(404).json({ message: "Account not found" });
  }
};

exports.getAccountByUsername = async (req, res) => {
  try {
    const { accountuser } = req.params;
    const foundAccount = await Account.findOne({ _username: accountuser });

    res.status(204).end(foundAccount);
  } catch (error) {
    res.status(404).json({ message: "Account not found" });
  }
};
