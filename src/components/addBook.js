import React from 'react';

function addBook() {
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form action="#">
        <input type="text" placeholder="Book Title .." />
        <input type="text" placeholder="Book Author .." />
        <select id="books" name="books">
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
        </select>
        <button type="button">ADD BOOK</button>
      </form>
    </>
  );
}
export default addBook;
