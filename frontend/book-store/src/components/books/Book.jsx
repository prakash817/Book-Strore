import { Button } from "@mui/material";
import React from "react";
import "./Book.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Book = (book) => {
  const { auther, avilable, description, image, name, price } = book;
  console.log(book, "props");
  return (
    <div className="card">
      <img src={image} alt="imageOfBook" />
      <h2> {name}</h2>
      <h3> by : {auther}</h3>
      <p> {description}</p>
      <h2> Price : {price}/-</h2>
      <h6> availablity : {avilable} true</h6>
      <div className="btn">
        <Button variant="contained">
          {" "}
          Delete <DeleteIcon />
        </Button>
        <Button variant="contained">
          {" "}
          Update <EditIcon />
        </Button>
      </div>
    </div>
  );
};

export default Book;
