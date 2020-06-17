import React from 'react';
import './styles.scss';

const Card = (props) => {
  const { book } = props;

  return (
    <div className="card">
      <div className="card-content">
        <p>
          {book.volumeInfo.title}
        </p>
        <p>{book.volumeInfo.authors.join(',')}</p>
        <p>{book.volumeInfo.publisher}</p>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
    </div>
  )
}

export default Card;