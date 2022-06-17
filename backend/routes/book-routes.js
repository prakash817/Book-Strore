const { Router } = require("express");
const router = Router();
const Book = require("../model/Book");
const {
  getAllBooks,
  addBook,
  getById,
  updateBook,
  deleteBook,
} = require("../controllers/Book-Controller");

//this will get all the books
router.get("/", getAllBooks);
router.get("/:id", getById);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;

// {
//   "name": "Rich Dad Poor Dad ",
//   "auther": "Prakash",
//   "description": "mindset about money earning",
//   "price": 500,
//   "avilable":true
//    "image" : ""
// }
