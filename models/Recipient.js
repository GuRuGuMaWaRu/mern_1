const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  clicked: Boolean
});

mongoose.model("recipients", recipientSchema);
