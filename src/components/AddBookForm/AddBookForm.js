import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.scss';

const AddBookForm = (props) => {
  const [inputs, setInputs] = useState({
    title: '',
    author: '',
    publisher: '',
    publishedDate: ''
  })
  const history = useHistory();

  const { addBookHandler } = props;

  // onChange Handler for form input 
  const onChangeHandler = (event) => {
    event.persist && event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  // handle to submit the inputform
  const handleSubmit = (event) => {
    event.preventDefault();
    addBookHandler(inputs);
    history.push('/')
  }

  return (
    <form className={"form"} onSubmit={handleSubmit}>
      <div className={"formRow space-between"}>
        <label>Title</label>
        <input required type="text" name="title" value={inputs.title} onChange={onChangeHandler} placeholder="Title" />
      </div>
      <div className={"formRow space-between"}>
        <label>Author</label>
        <input required type="text" name="author" value={inputs.author} onChange={onChangeHandler} placeholder="Author" />
      </div>
      <div className={"formRow space-between"}>
        <label>Publisher</label>
        <input required type="text" name="publisher" value={inputs.publisher} onChange={onChangeHandler} placeholder="Publisher" />
      </div>
      <div className={"formRow space-between"}>
        <label>Published Date</label>
        <input required type="date" name="publishedDate" value={inputs.publishedDate} onChange={onChangeHandler} />
      </div>
      <div className={"formRow center"}>
        <button className={"button cancel-button"} onClick={() => { history.push('/') }} >Cancel</button>
        <button className={"button"} type="submit">Submit</button>
      </div>
    </form>
  )

}

export default AddBookForm;