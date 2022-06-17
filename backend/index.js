const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("server connected on port http://localhost:8080/");
});
