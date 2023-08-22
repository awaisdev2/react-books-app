import React from "react";

const BookEntry = ({ book, onEdit, onDelete }) => (
  <div>
    <h1>{book.name}</h1>
    <p>{book.author}</p>
    <p>{book.bookStatus}</p>
    <p>{book.date}</p>
    <p>{book.bookPages}</p>
    <p>{book.language}</p>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default BookEntry;
