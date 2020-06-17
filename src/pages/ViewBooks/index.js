import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Card from '../../components/Card/Card';
import { connect } from 'react-redux';
import { fetchBooks, addBook } from '../../store/actions/bookstore';
import './styles.scss';

const ViewBooks = (props) => {
  const { fetchBooks, books } = props;
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState();
  const [filteredBooks, setFilteredBooks] = useState();

  useEffect(() => {
    if (!books) {
      fetchBooks();
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (books) {
      if (searchQuery) {
        const filteredData = books.filter(item => {
          return (item.volumeInfo.title.toLowerCase().includes(searchQuery)
            || item.volumeInfo.publisher?.toLowerCase().includes(searchQuery)
            || item.volumeInfo.authors?.join(',').toLowerCase().includes(searchQuery))
        });
        setFilteredBooks(filteredData)
      } else {
        setFilteredBooks(books)
      }
    }

  }, [searchQuery, books])

  const onChangeHandler = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  }

  //console.log(filteredBooks)

  return (
    <div>
      <div className={"header"}>
        <h1>
          List of Books
        </h1>
        <button className={"button"} onClick={() => { history.push('/add-book') }}>Add Book</button>
      </div>

      <div className="search-bar">
        <input id="searchQuery" type="text" onChange={onChangeHandler} placeholder="Search Books... "></input>
      </div>

      <div className={"list-books"}>
        {!books ? <div className="busy-message"> Loading </div> :
          filteredBooks?.length ? (
            filteredBooks.map((book) => {
              return (<Card key={book.id} book={book} />)
            })
          ) : (
              <div className="busy-message"> No Matching Results Found</div>
            )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.bookStore.books,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    addBook: (bookInfo) => dispatch(addBook(bookInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBooks);
