const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

modules.exports = app => {
  app.post("/api/stripe", (req, res) => {});
};
