import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/books/Books";
import About from "./components/About";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/aboutUs" element={<About />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
