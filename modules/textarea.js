const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const textschema = new Schema(
    {
        uuid: { type: String, required: true },
        text: {type: String,require: true}
    },
    { timestamps: true }
  );
module.exports = mongoose.model("Text", textschema);