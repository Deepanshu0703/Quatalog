import React from "react";
import "./styles.css";
import './styles/App.css';
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import AddBookmark from "./containers/AddBookmark";
import BookmarkList from "./containers/BookmarkList";

const App = React.memo(() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddBookmark/>}/>
        <Route path="/bookmark" element={<BookmarkList/>}/>
      </Routes>
      </Router>
  );
});

export default App;
