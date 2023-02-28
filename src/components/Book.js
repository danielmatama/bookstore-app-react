import React from 'react';

function Book() {
  return (
    <>
      <div className="books">
        <h2 className="book-title">Things Fall Apart</h2>
        <p className="book-author">Chinedu Ikedezi</p>
        <button type="button" className="remove-btn">Remove</button>
      </div>
    </>
  );
}
export default Book;
