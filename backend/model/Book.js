const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: { type: String, required: true },
  auther: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  avilable: { type: Boolean, required: true },
  image: { type: String, required: true },
});

const Book = model("Book", bookSchema);

module.exports = Book;
