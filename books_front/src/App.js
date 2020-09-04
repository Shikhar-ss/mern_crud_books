import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import BookCard from "./components/BookCard";
import ShowBookDetailes from "./components/ShowBookDetailes";
import ShowBookList from "./components/ShowBookList";
import UpdateBookInfo from "./components/UpdateBookInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <nav style={{margin: 10}}>
          <Link to="/" style={{padding: 5}}>
            HOME
          </Link>
          <Link to="/create-book" style={{padding: 5}}>
            CREATE BOOK
          </Link>
          <Link to="/edit-book/:id" style={{padding: 5}}>
          EDIT BOOK
          </Link>
          <Link to="/show-book/:id" style={{padding: 5}}>
          SHOW BOOK
          </Link>
        </nav>
        <div>
          <Route exact path="/" element={<ShowBookList />} />
          <Route exact path="create-book" element={<CreateBook />} />
          <Route exact path="edit-book/:id" element={<UpdateBookInfo />} />
          <Route exact path="show-book/:id" element={<ShowBookDetailes />} />
        </div>
      </Router>
    );
  }
}

export default App;
