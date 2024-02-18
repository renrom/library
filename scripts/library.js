

const dialog = document.querySelector("dialog");
const newBook = document.querySelector(".btn-newbook");

const cancelNewBook = document.querySelector(".cancel-newbook");
const saveNewBook = document.querySelector(".save-newbook");


newBook.addEventListener("click", () => {
  dialog.showModal();
});

cancelNewBook.addEventListener("click", () => {
  dialog.close();
});

saveNewBook.addEventListener("click", () => {
  addBookToLibary();
  dialog.close();
});

const myLibrary = [];

function Book(title, author, pages, genre, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.read = read;
}

Book.prototype.readBook = function () {

  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
};

function addBookToLibary() {
  var title = document.getElementById("booktitle").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var genre = document.getElementById("genre").value;
  var read = document.getElementById("read").checked;

  var book = new Book(title, author, pages, genre, read, book);

  myLibrary.push(book);

  addBookToPlacement();

  document.getElementById("newbook-form").reset();

}


function displayBook(indexnumber) {

  var bookItem = document.createElement("div");
  var bookTitle = document.createElement("div");
  var bookAuthor = document.createElement("div");
  var bookPages = document.createElement("div");
  var bookGenre = document.createElement("div");
  var bookRead = document.createElement("div");
  var bookItemButtons = document.createElement("div");
  var bookBtnRemove = document.createElement("button");
  var bookBtnRead = document.createElement("button");


  bookTitle.appendChild(document.createTextNode("Title: " + myLibrary[indexnumber].title));
  bookTitle.className = "book-title";

  bookAuthor.appendChild(document.createTextNode("Author: " + myLibrary[indexnumber].author));
  bookAuthor.className = "author";

  bookPages.appendChild(document.createTextNode("# of Pages: " + myLibrary[indexnumber].pages));
  bookPages.className = "pages";

  bookGenre.appendChild(document.createTextNode("Genre: " + myLibrary[indexnumber].genre));
  bookGenre.className = "genre";



  if (myLibrary[indexnumber].read) { 

    bookRead.appendChild(document.createTextNode("Read"));
    bookRead.className = "book-isread";
  } else {
    bookRead.appendChild(document.createTextNode("Not read yet"));
    bookRead.className = "book-isnotread";

  };



  //bookRead.appendChild(document.createTextNode("Read: "+myLibrary[indexnumber].read));
  //bookRead.className = "read";

  bookItemButtons.className = "book-item-buttons";
  bookBtnRemove.textContent = "Remove";
  bookBtnRemove.className = "btn-remove-book";

  bookBtnRead.textContent = "Read status";
  bookBtnRead.className = "btn-readstatus";

  bookItemButtons.appendChild(bookBtnRemove);
  bookItemButtons.appendChild(bookBtnRead);

  bookItem.className = "book-item";
  bookItem.appendChild(bookTitle);
  bookItem.appendChild(bookAuthor);
  bookItem.appendChild(bookPages);
  bookItem.appendChild(bookGenre);
  bookItem.appendChild(bookRead);
  bookItem.appendChild(bookItemButtons);
  bookItem.setAttribute("data-index", indexnumber);

  document.querySelector(".book-placement").appendChild(bookItem);


  bookBtnRemove.addEventListener("click", () => {
    indexToRemove = bookItem.dataset.index;
    myLibrary.splice(indexToRemove, 1);

    const books = document.querySelector(".book-placement")
    books.innerHTML = '';

    for (let i = 0; i <= myLibrary.length; i++) {
      displayBook(i)
    }
  });

  bookBtnRead.addEventListener("click", () => {
    indexToUpdateReadStatus = bookItem.dataset.index;
    
    if (myLibrary[indexToUpdateReadStatus].read) {
      myLibrary[indexToUpdateReadStatus].read = false;
    } else {
      myLibrary[indexToUpdateReadStatus].read = true;
    }
    const books = document.querySelector(".book-placement")
    books.innerHTML = '';

    for (let i = 0; i <= myLibrary.length; i++) {
      displayBook(i)
    }
  });
}

function addBookToPlacement() {

  lastBook = myLibrary.length - 1;
  displayBook(lastBook);
}


var book = new Book(
  "One Flew Over the Cuckoo's Nest",
  "Ken Kesey",
  320,
  "Tragedy",
  false);

myLibrary.push(book);
addBookToPlacement();

var book = new Book(
  "The Lord of the Rings",
  "J. R. R. Tolkien",
  420,
  "Fantasy",
  true);

myLibrary.push(book);
addBookToPlacement();

var book = new Book(
  "IT",
  "Stephen King",
  1138,
  "Horror",
  true);

myLibrary.push(book);
addBookToPlacement();