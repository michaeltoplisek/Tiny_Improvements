const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudoSchema = new Schema({
  title: String,
  body: String,
  Sender: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  Receiver: [
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  ]
});

const Kudo = mongoose.model("Kudo", KudoSchema);

module.exports = Kudo;