class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.id = `book-${ISBN}`;
      this.borrowed = false;
    }
  
    isBorrowed() {
      return this.borrowed;
    }
  }
  
  export default Book;
  