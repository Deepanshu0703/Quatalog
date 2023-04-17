import React from "react";
import { connect } from "react-redux";
import { deleteBookmark } from "../actions";
import Bookmark from "../components/Bookmark";
import {Link } from "react-router-dom";
 
const BookmarkList = ({ bookmarks, onDelete }) => {
  const styles = {
    borderBottom: "2px solid #eee",
    background: "#fafafa",
    margin: ".75rem auto",
    maxWidth: "90%",
    borderRadius: "7px",
    padding:"1rem",
    display:"flex",
    justifyContent : 'space-between'
  };
  console.log("bookmark list");
  return (
    <div>
      <div style={styles}>
        <h1 className="left">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="right">
          <Link to="/bookmark">BookMarks</Link>
        </h1>
      </div>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} onDelete={onDelete} key={bookmark.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookmarks: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deleteBookmark(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
