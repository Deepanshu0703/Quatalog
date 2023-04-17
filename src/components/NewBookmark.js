import React from "react";
import Loading from './Loading';
import {Link} from "react-router-dom";

export default function NewBookmark(props) {
  const rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * (192 - 64) + 64));
  }
  const rgbStr = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  const colorStyles = {
      color: rgbStr
  };
  const newQuoteBtnStyle = {
     background: rgbStr
  };
  const buttonBoxStyle = {
    borderTopColor: rgbStr
  };
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
  const[id,setId]=React.useState("");
  const [isVisible,setisVisible]=React.useState(true);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || url === "") {
      return;
    } else {
      let state = { title, url,id };
      console.log(state);
      props.onAddBookmark(state);
    }
  };
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReset = () => {
    setisVisible(false);
    fetch('https://api.quotable.io/random?tags='+selectedOption)
      .then(response => response.json())
      .then(data => {
        setTitle(data.content)
        setId(data._id)
        setUrl(data.author)
        setisVisible(true)
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <div style={styles}>
        <h1 className="left">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="right">
          <Link to="/bookmark">BookMarks</Link>
        </h1>
      </div>
    <div className="App">
    <div id="quote-box" style={colorStyles}>
        <>
          {isVisible && [
            <>
        <span id="text">{title}</span>
        <span id="author">{url}</span>
        </>
      ]}
      </>
        {!isVisible && <Loading key="loading" color={colorStyles} />}
        <div className="buttons" style={buttonBoxStyle}>
          <div className="left">
            <button
              id="new-quote"
              className="new-quote-btn"
              style={newQuoteBtnStyle}
              onClick={handleReset}>
              New Quote
            </button>
          </div>
          <div className="middle">
      <select id="options" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Tags</option>
        <option value="Inspirational">Inspirational</option>
        <option value="Film">Film</option>
        <option value="Famous Quotes">Famous Quotes</option>
        <option value="Motivational">Motivational</option>
        <option value="Wisdom">Wisdom</option>
        <option value="Love">Love</option>
      </select>
          </div>
          <div className="right" >
          <button
              id="new-quote"
              className="new-quote-btn"
              style={newQuoteBtnStyle}
              onClick={handleSubmit}>
              BookMark
            </button>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  }

