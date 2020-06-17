import * as actionTypes from '../actions/actionTypes';
import uuid from "uuid/v4";

const intialState = {
  books: undefined,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_BOOKS: {
      return {
        ...state,
        books: action.value.items
      }
    }
    case actionTypes.ADD_BOOK: {
      let newBook = {id: uuid()};
      newBook['volumeInfo'] = {
        ...action.value,
        authors: [action.value.author]
      }
      let updatedList = state.books;
      updatedList.push(newBook);
      return {
        ...state,
        books: updatedList
      }
    }
    // Returns State as it is when no case matched
    default: {
      return state;
    }
  }
};

export default reducer;