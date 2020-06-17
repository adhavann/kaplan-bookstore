import * as actionTypes from './actionTypes';

export const loadBooks = (booksPayload) => {
  return {
    type: actionTypes.LOAD_BOOKS,
    value: { ...booksPayload }
  }
}

export const addBook = (bookInfo) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_BOOK,
      value: bookInfo
    })
  }
}


export const fetchBooks = () => {
  return async (dispatch, getState) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep"

    try {
      const booksSearchResponse = await (await fetch(url, { 'content-type': 'application/json' }, { method: 'get' })).json()
      dispatch(loadBooks(booksSearchResponse));
    } catch{
      console.error(`Error in fetching books, try again later`);
    }
  }
}
