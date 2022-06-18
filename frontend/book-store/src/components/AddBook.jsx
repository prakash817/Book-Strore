import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import "./AddBook.css";

import { useNavigate } from "react-router-dom";

//main component of addbook
const AddBook = () => {
  const history = useNavigate();

  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  //input taking by change
  const handleChange = (e) => {
    setBookData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  //input taking by submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/books", {
      name: String(bookData.name),
      author: String(bookData.author),
      description: String(bookData.description),
      price: Number(bookData.price),
      image: String(bookData.image),
      available: Boolean(checked),
    });
    await history("/books");

    // console.log(bookData);
  };

  return (
    <div className="AddBook">
      <form onSubmit={handleSubmit}>
        <Box
          className="box"
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <TextField
            fullWidth
            label="Name Of Book"
            className="fullWidth"
            value={bookData.name}
            name="name"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Enter Auther Name"
            className="fullWidth"
            value={bookData.author}
            name="author"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Enter Book Description"
            className="fullWidth"
            value={bookData.description}
            name="description"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Enter Book Price"
            type="number"
            className="fullWidth"
            value={bookData.price}
            name="price"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Enter Image Link"
            className="fullWidth"
            value={bookData.image}
            name="image"
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />
          <Button
            type="submit"
            variant="contained"
            className="fullWidth"
            sx={{ margin: "auto" }}
          >
            Add Book
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBook;
