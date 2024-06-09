# Library Management System

This project is a simple library management system implemented in JavaScript, demonstrating basic object-oriented principles through classes for `Book`, `User`, and `Library`. Users can borrow and return books, and the library can register new users and add new books to its collection. Additionally, users can retrieve information about a specific book.

## Features

- **Book Class**:
  - Attributes: title, author, ISBN, borrowed status
  - Methods: `isBorrowed()`, `getInfo()`

- **User Class**:
  - Attributes: name, ID, list of borrowed books
  - Methods: `borrowBook(book)`, `returnBook(ISBN)`, `peekBook(ISBN)`, `getBookInfo(library, ISBN)`

- **Library Class**:
  - Attributes: list of books, list of members
  - Methods: `addNewBook(book)`, `registerMember(user)`, `borrowBook(userId, ISBN)`, `getBookInfo(ISBN)`

## Usage

```javascript
const library = new Library();

// Create books
const book1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
const book2 = new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593275846');
const book3 = new Book("You Don't Know JS", 'Kyle Simpson', '9781491904244');

library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);

// Create users
const user1 = new User('Alice', 'user-123');
const user2 = new User('Bob', 'user-456');

library.registerMember(user1);
library.registerMember(user2);

// Borrow books
library.borrowBook('user-123', '9780596517748');
library.borrowBook('user-123', '9781593275846');
library.borrowBook('user-123', '9781491904244');

// Return a book
user1.returnBook('9780596517748');

// Retrieve book information
console.log(user1.getBookInfo(library, '9780596517748'));
console.log(user1.getBookInfo(library, '1234567890'));  // Book not found
