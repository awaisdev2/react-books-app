/* eslint-disable no-unused-vars */
import React from "react";

function Form() {

  let books = []
  let myNewBook = {}
  let isEdit = false
  let editBooksObj = {}

  let onSubmit = () => {
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const status = document.getElementById("status").value;
    const publishDate = document.getElementById("publishDate").value;
    const bookPages = document.getElementById("pages").value;
    const bookLanguage = document.getElementById("bookLanguage").value;
    if (
      bookName === "" ||
      authorName === "" ||
      status === "" ||
      bookLanguage === "" ||
      publishDate === "" ||
      bookPages === ""
    ) {
      return (document.getElementById("booksList").innerHTML =
        "Please fill the empty fields");
    }
    if (
      bookName.length < 2 ||
      authorName.length < 2 ||
      status.length < 2 ||
      publishDate.length < 4 ||
      bookPages.length < 2 ||
      bookLanguage.length < 3
    ) {
      return (document.getElementById("booksList").innerHTML =
        "Each field must require atleast 2 or 4 character");
    } else {
      const data = [bookName, authorName, status, bookLanguage, publishDate];
      document.getElementById("booksList").innerHTML = data;
    }
    myNewBook = {
      name: bookName,
      author: authorName,
      bookStatus: status,
      date: publishDate,
      bookPages: bookPages,
      language: bookLanguage,
    };
    if (isEdit) {
      const index = books.findIndex((item) => item.name === editBooksObj.name);
      if (index !== -1) {
        books[index] = myNewBook;
      }
      isEdit = false;
    } else {
      books.push(myNewBook);
    }
    showInfo(books);
    clearFields();
  };

  const clearFields = () => {
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("status").value = "";
    document.getElementById("publishDate").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("bookLanguage").value = "";
  };

  const showInfo = (booksList) => {
    document.getElementById("booksList").innerHTML = "";
    let bookList = "";
    window.books = booksList;
    booksList.forEach((book, index) => {
      bookList = bookList + "<h1>" + book.name + "</h1>";
      bookList = bookList + "<p>" + book.author + "</p>";
      bookList = bookList + "<p>" + book.bookStatus + "</p>";
      bookList = bookList + "<p>" + book.date + "</p>";
      bookList = bookList + "<p>" + book.bookPages + "</p>";
      bookList = bookList + "<p>" + book.language + "</p>";
     });
    document.getElementById("booksList").innerHTML = bookList;
  };

  const searchBook = () => {
    const searchInput = document.getElementById("searchBook").value;
    let bookList = "";
    const booksList = books;
    booksList.forEach((book, index) => {
      bookList = bookList + "<h1>" + book.name + "</h1>";
      bookList = bookList + "<p>" + book.author + "</p>";
      bookList = bookList + "<p>" + book.bookStatus + "</p>";
      bookList = bookList + "<p>" + book.date + "</p>";
      bookList = bookList + "<p>" + book.bookPages + "</p>";
      bookList = bookList + "<p>" + book.language + "</p>";
     });
    const filterbooks = books.filter((book) => {
      return book.name === searchInput;
    });
    if (searchInput === "") {
      return (document.getElementById("booksList").innerHTML = bookList);
    }
    showInfo(filterbooks);
  };

  const editBook = (index) => {
  const bookToEdit = books[index];
  document.getElementById("bookName").value = bookToEdit.name;
  document.getElementById("authorName").value = bookToEdit.author;
  document.getElementById("status").value = bookToEdit.bookStatus;
  document.getElementById("publishDate").value = bookToEdit.date;
  document.getElementById("pages").value = bookToEdit.bookPages;
  document.getElementById("bookLanguage").value = bookToEdit.language;
  isEdit = true;
  editBooksObj = bookToEdit;
};

const deleteBook = (index) => {
  books.splice(index, 1);
  showInfo(books);
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
            />
            <input
              style={{ width: "600px", border: "2px solid grey" }}
              className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
              type="text"
              placeholder="Enter the name of author"
              id="authorName"
            />
            <input
              style={{ width: "600px", border: "2px solid grey" }}
              className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
              type="number"
              placeholder="Enter the year of publication"
              id="publishDate"
            />
            <input
              style={{ width: "600px", border: "2px solid grey" }}
              className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
              type="text"
              placeholder="Enter the status of book"
              id="status"
            />
            <input
              style={{ width: "600px", border: "2px solid grey" }}
              className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
              type="number"
              placeholder="Enter the pages you wanna read"
              id="pages"
            />
            <input
              style={{ width: "600px", border: "2px solid grey" }}
              className="d-block text-light my-4 rounded-2 p-2 bg-transparent"
              placeholder="Enter a language you wanna read"
              type="text"
              id="bookLanguage"
            />
          </div>
          <div>
            <input
              style={{ width: "400px", border: "2px solid grey" }}
              className="d-block text-light rounded-2 p-2 bg-transparent"
              type="text"
              onInput={searchBook}
              placeholder="Search books"
              id="searchBook"
            />
            <div className="my-books overflow-scroll">
            <span id="booksList" className="text-light mx-2"></span>
          </div>
          </div>
        </div>
      <div className="container">
        <button
          onClick={onSubmit}
          id="submitBtn"
          className="btn w-100 my-2 btn-outline-light"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Form;
