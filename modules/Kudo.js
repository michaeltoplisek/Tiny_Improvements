const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudoSchema = new Schema({
  body: String,
  Sender: [
    {
      type: Schema.Types.ObjectId,
      ref: "Kudo"
    }
  ],
  Receiver: [
    {
        type: Schema.Types.ObjectId,
        ref: "Kudo"
    }
  ]
});

const Kudo = mongoose.model("Kudo", KudoSchema);

module.exports = User;