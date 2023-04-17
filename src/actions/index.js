import { ADD_BOOKMARK, DELETE_BOOKMARK } from "./types";

export const addBookmark = ({ title, url ,id}) => ({
  type: ADD_BOOKMARK,
  payload: {
    id,
    title,
    url
  }
});

export const deleteBookmark = (id) => ({
  type: DELETE_BOOKMARK,
  payload: {
    id
  }
});
