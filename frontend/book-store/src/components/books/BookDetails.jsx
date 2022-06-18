import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const id = useParams().id;
  const history = useNavigate();

  const [bookData, setBookData] = useState();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const updatehandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setBookData(data.book));
    };

    updatehandler();
  }, [id]);

  const handleChange = (e) => {
    setBookData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(bookData.name),
        author: String(bookData.author),
        description: String(bookData.description),
        price: Number(bookData.price),
        image: String(bookData.image),
        available: Boolean(checked),
      })
      .then(() => history("/books"));
  };

  return (
    <div>
      {" "}
      {bookData && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
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
              fullWidth
              variant="contained"
              className="fullWidth"
              sx={{ margin: "auto" }}
            >
              Add Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetails;
