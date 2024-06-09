import Book from "./classes/book.class.js";
import User from "./classes/user.class.js";
import Library from "./classes/library.class.js";


// Example usage
const library = new Library();

const book1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
const book2 = new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593275846');
const book3 = new Book('You Don\'t Know JS', 'Kyle Simpson', '9781491904244');

library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);

const user1 = new User('Alice', 'user-123');
const user2 = new User('Bob', 'user-456');

library.registerMember(user1);
library.registerMember(user2);

library.borrowBook('user-123', '9780596517748');
library.borrowBook('user-123', '9781593275846');
library.borrowBook('user-123', '9781491904244');
library.borrowBook('user-123', '9780596517748');  // Should print 'Cannot borrow more than 3 books.'

user1.returnBook('9780596517748');
library.borrowBook('user-123', '9780596517748');  // Now it should succeed