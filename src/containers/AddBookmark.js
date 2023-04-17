import { connect } from "react-redux";
import { addBookmark } from "../actions";
import NewBookmark from "../components/NewBookmark";

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBookmark: (bookmark) => {
      dispatch(addBookmark(bookmark));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewBookmark);
