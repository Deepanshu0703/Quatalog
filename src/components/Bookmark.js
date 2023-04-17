import React from "react";
import { Button } from "react-bulma-components";

const styles = {
  borderBottom: "2px solid #eee",
  background: "#fafafa",
  margin: ".75rem auto",
  padding: ".6rem 1rem",
  maxWidth: "500px",
  borderRadius: "7px"
};

export default function BookMark ({ bookmark: { title, url, id }, onDelete }) {
  return (
    <div className="Apps">
    <div style={styles}>
      <h2>{title}</h2>
      <p>_____{url}</p>
      <Button
        id="new-quote"
        className="new-quote-btn"
        style={{background: 'Red'}}
        onClick={() => onDelete(id)}>
        Remove
      </Button>
    </div>
    </div>
    
  );
}
