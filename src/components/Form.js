/* eslint-disable no-unused-vars */
import React from "react";

function Form() {
  let [books, setBooks] = React.useState([]);
  let [myNewBook, setMyNewBook] = React.useState({});
  let [isEdit, setIsEdit] = React.useState(false);
  let [editBooksObj, setEditBooksObj]  = React.useState({});
  let [bookName, setBookName] = React.useState("");
  let [authorName, setAuthorName] = React.useState("");
  let [status, setStatus] = React.useState("");
  let [publishDate, setPublishDate] = React.useState("");
  let [bookPages, setBookPages] = React.useState("");
  let [bookLanguage, setBookLanguage] = React.useState("");

  const onSubmit = () => {
    const newBook = {
      name: bookName,
      author: authorName,
      status: status,
      publishDate: publishDate,
      pages: bookPages,
      language: bookLanguage,
    };
  
    if (isEdit) {
      const updatedBooks = books.map((book) =>
        book.name === editBooksObj.name ? newBook : book
      );
      setBooks(updatedBooks);
    } else {
      setBooks((prevBooks) => [...prevBooks, newBook]);
    }
  
    clearFields();
  };
  
  

  const clearFields = () => {
    setBookName("");
    setAuthorName("");
    setStatus("");
    setPublishDate("");
    setBookPages("");
    setBookLanguage("");
    setIsEdit(false); // Reset isEdit
    setEditBooksObj({});
  };

  // const searchBook = () => {
  //   const searchInput = document.getElementById("searchBook").value;
  //   let bookList = "";
  //   const filterbooks = books.filter((book) => {
  //     return book.name === searchInput;
  //   });
  //   if (searchInput === "") {
  //     return (document.getElementById("booksList").innerHTML = bookList);
  //   }
  // };

  const deleteBook = (i) => {
    const updatedBooks = books.filter((_, index) => index !== i);
    setBooks(updatedBooks);
  };

  const editBook = (book) => {
    setIsEdit(true);
    setEditBooksObj(book); // Store the book being edited
    setBookName(book.name);
    setAuthorName(book.author);
    setStatus(book.status);
    setBookPages(book.pages);
    setBookLanguage(book.language);
    setPublishDate(book.publishDate);
  };

  return (
    <>
      <div className="d-flex container justify-content-between py-4">
        <div>
          <input
            style={{ width: "600px", border: "2px solid grey" }}
            className="d-block text-light rounded-2 p-2 bg-transparent"
            type="text"
            placeholder="Enter a book name"
            id="bookName"
            value={bookName}
            onChange={(e) => {
              setBookName(e.target.value);
            }}
          />
          <input
            style={{ width: "600px", border: "2px solid grey" }}
            className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
            type="text"
            placeholder="Enter the name of author"
            id="authorName"
            value={authorName}
            onChange={(e) => {
              setAuthorName(e.target.value);
            }}
          />
          <input
            style={{ width: "600px", border: "2px solid grey" }}
            className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
            type="number"
            placeholder="Enter the year of publication"
            id="publishDate"
            value={publishDate}
            onChange={(e) => {
              setPublishDate(e.target.value);
            }}
          />
          <input
            style={{ width: "600px", border: "2px solid grey" }}
            className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
            type="text"
            placeholder="Enter the status of book"
            id="status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
          <input
            style={{ width: "600px", border: "2px solid grey" }}
            className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
            type="number"
            placeholder="Enter the pages you wanna read"
            id="pages"
            value={bookPages}
            onChange={(e) => {
              setBookPages(e.target.value);
            }}
          />
          <input
            style={{ width: "600px", border: "2px solid grey" }}
            className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
            placeholder="Enter a language you wanna read"
            type="text"
            id="bookLanguage"
            value={bookLanguage}
            onChange={(e) => {
              setBookLanguage(e.target.value);
            }}
          />
        </div>
        <div>
          {/* <input
            style={{ width: "400px", border: "2px solid grey" }}
            className="d-block text-light rounded-2 p-2 bg-transparent"
            type="text"
            onInput={searchBook}
            placeholder="Search books"
            id="searchBook"
          /> */}
          <div
            style={{ maxHeight: "328px" }}
            className="my-books overflow-scroll"
          >
            <span className="text-light mx-2">
              {books.map((book, index) => {
                return (
                  <div key={index}>
                    <h1>{book.name}</h1>
                    <p>{book.author}</p>
                    <p>{book.status}</p>
                    <p>{book.publishDate}</p>
                    <p>{book.pages}</p>
                    <p>{book.language}</p>
                    <button
                      onClick={() =>
                        editBook(book)
                      }
                      className="mx-2 btn btn-info"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBook(index)}
                      className="mx-2 btn btn-danger">
                      Delete
                    </button>
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <button onClick={onSubmit} className="btn w-100 my-2 btn-outline-light">
          Submit
        </button>
      </div>
    </>
  );
}

export default Form;
