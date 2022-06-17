const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

// app.use(cors());
app.use(express.json()); // it coversts  all file into json file which to be added

app.use("/books", router); // http://localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:PHIuXkHo48MfkWlx@cluster0.prksi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database on http://localhost:5000/");
  })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log("connection error", err));

// password = >PHIuXkHo48MfkWlx

// app.listen(8080, () => {
//   console.log("server connected on port http://localhost:5000/");
// });
