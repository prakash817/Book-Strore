import { Button } from "@mui/material";
import React from "react";
import "./Book.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = (book) => {
  const history = useNavigate();
  const { _id, auther, avilable, description, image, name, price } = book;
  // console.log(book, "props");

  const handleDelete = async () => {
    console.log("click delete");
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() =>
        setTimeout(() => {
          history("/books");
        }, 1)
      );
  };

  return (
    <div className="card">
      <img src={image} alt="imageOfBook" />
      <h2> {name}</h2>
      <h3> by : {auther}</h3>
      <p> {description}</p>
      <h2> Price : {price}/-</h2>
      <h6> availablity : {avilable} true</h6>
      <div className="btn">
        <Button variant="contained" onClick={handleDelete}>
          {" "}
          Delete <DeleteIcon />
        </Button>
        <Button variant="contained" LinkComponent={Link} to={`/books/${_id}`}>
          {" "}
          Update <EditIcon />
        </Button>
      </div>
    </div>
  );
};

export default Book;
