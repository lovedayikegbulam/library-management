// Library class
class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  addNewBook(book) {
    if (this.books.find((b) => b.ISBN === book.ISBN)) {
      console.log("Book with this ISBN already exists.");
      return false;
    }
    this.books.push(book);
    console.log("Book added successfully.");
    return true;
  }

  registerMember(user) {
    if (this.members.find((member) => member.id === user.id)) {
      console.log("User with this ID already registered.");
      return false;
    }
    this.members.push(user);
    console.log("User registered successfully.");
    return true;
  }

  borrowBook(userId, ISBN) {
    const user = this.members.find((member) => member.id === userId);
    const book = this.books.find((b) => b.ISBN === ISBN);
    if (!user || !book) {
      console.log("User or book not found.");
      return false;
    }
    return user.borrowBook(book);
  }

  getBookInfo(ISBN) {
    const book = this.books.find((b) => b.ISBN === ISBN);
    if (book) {
      return book.getInfo();
    } else {
      return "Book not found.";
    }
  }
}

export default Library;
