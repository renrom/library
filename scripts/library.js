

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
  var read = document.getElementById("read").value;
  var book = new Book(title, author, pages, genre, read, book);

  myLibrary.push(book);

  addBookToPlacement();

  document.getElementById("newbook-form").reset();
  console.log(myLibrary)

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


  bookTitle.appendChild(document.createTextNode(myLibrary[indexnumber].title));
  bookTitle.className = "book-title";

  bookAuthor.appendChild(document.createTextNode(myLibrary[indexnumber].author));
  bookAuthor.className = "author";

  bookPages.appendChild(document.createTextNode(myLibrary[indexnumber].pages));
  bookPages.className = "pages";

  bookGenre.appendChild(document.createTextNode(myLibrary[indexnumber].genre));
  bookGenre.className = "genre";

  bookRead.appendChild(document.createTextNode(myLibrary[indexnumber].read));
  bookRead.className = "read";

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

  });
}

function addBookToPlacement() {

  lastBook = myLibrary.length - 1;
  displayBook(lastBook);



}

