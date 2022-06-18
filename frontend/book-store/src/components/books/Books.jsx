import { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";

const url = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(url).then((res) => res.data);
};
const Books = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setData(data.books));
  }, []);

  console.log("All Data", data);
  //   console.log("All Data", data.books);
  return (
    <>
      <ul className="book">
        {data &&
          data.map((book, index) => (
            <li key={index}>
              <Book {...book} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Books;
