class User {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      this.borrowedBooks = [];
    }
  
    borrowBook(book) {
      if (this.borrowedBooks.length >= 3) {
        console.log('Cannot borrow more than 3 books.');
        return false;
      }
      if (book.isBorrowed()) {
        console.log('This book is already borrowed.');
        return false;
      }
      this.borrowedBooks.push(book);
      book.borrowed = true;
      return true;
    }
  
    returnBook(ISBN) {
      const bookIndex = this.borrowedBooks.findIndex(book => book.ISBN === ISBN);
      if (bookIndex > -1) {
        const book = this.borrowedBooks[bookIndex];
        book.borrowed = false;
        this.borrowedBooks.splice(bookIndex, 1);
        console.log(`Book with ISBN ${ISBN} returned.`);
      } else {
        console.log(`Book with ISBN ${ISBN} not found in borrowed books.`);
      }
    }
  
    peekBook(ISBN) {
      return this.borrowedBooks.find(book => book.ISBN === ISBN);
    }
  }
  
  export default User;
  