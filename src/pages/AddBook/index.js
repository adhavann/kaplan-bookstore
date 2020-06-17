import React from 'react';
import AddBookForm from '../../components/AddBookForm/AddBookForm';
import { connect } from 'react-redux';
import { addBook } from '../../store/actions/bookstore';
import './styles.scss';


const AddBook = (props) => {

  const { addBook } = props;

  return (
    <div className="container">
      <h1>Add Book</h1>
      <AddBookForm addBookHandler={addBook} />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (bookInfo) => dispatch(addBook(bookInfo)),
  };
};

export default connect(null, mapDispatchToProps)(AddBook);