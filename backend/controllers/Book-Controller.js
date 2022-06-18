const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find(); // if no arguments then it returns all books
  } catch (err) {
    console.log("fetch err", err);
  }

  //   validation
  if (!books) {
    return res.status(404).json({ massage: "No Product Found" });
  }
  return res.status(200).json({ books, info: "Books get Successfully" });
};

const getById = async (req, res, next) => {
  let id = req.params.id;
  let book;
  try {
    book = await Book.findById(id); // if arguments matches then it returns book
  } catch (err) {
    console.log("fetch err", err);
  }

  //   validation
  if (!book) {
    return res.status(404).json({ massage: "No Book Found" });
  }
  return res.status(200).json({ book, info: "Book Get Successfully" });
};

const addBook = async (req, res, next) => {
  let book;
  try {
    book = new Book({ ...req.body });
    book.save();
  } catch (err) {
    console.log("fetch err", err);
  }
  //   validation
  if (!book) {
    return res.status(500).json({ massage: "Unable to Add" }); //500 server error
  }
  return res.status(201).json({ message: "Book Added Successfully" }); //201=created status
};

const updateBook = async (req, res, next) => {
  let id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, req.body); // if arguments matches then it returns book and update it
    await book.save();
  } catch (err) {
    console.log("fetch err", err);
  }

  //   validation
  if (!book) {
    return res
      .status(404)
      .json({ massage: "No Book Found of this id to update" });
  }
  return res.status(200).json(book);
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "book not found by this id" });
  }
  return res.status(200).json({ message: "Book Deleted Successfully" });
};
module.exports = { getAllBooks, addBook, getById, updateBook, deleteBook };
