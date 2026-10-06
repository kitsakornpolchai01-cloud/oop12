import { BookDAO } from "./BookDAO";
import { BorrowRecordDAO } from "./BorrowRecordDAO";

const bookDAO = new BookDAO();
const borrowDAO = new BorrowRecordDAO(bookDAO);

bookDAO.addBook("Clean Code", "Robert C. Martin");
bookDAO.addBook("Design Patterns", "Erich Gamma");

const book1 = bookDAO.findBookById(1);
if (book1) {
    console.log(book1.getInfo());
}

console.log("\n--- Borrowing Book ---");
const record1 = borrowDAO.borrowBook(1, "Somchai");
if (record1) {
    console.log(`✅ Borrowed successfully by ${record1.getBorrowerName()}`);
}

console.log("\n--- Testing Business Rules (Repeat Borrow) ---");
borrowDAO.borrowBook(1, "Somying");

console.log("\n--- Testing Business Rules (Missing Book) ---");
borrowDAO.borrowBook(99, "Somchai");

console.log("\n--- Updated Status ---");
const updatedBook1 = bookDAO.findBookById(1);
if (updatedBook1) {
    console.log(updatedBook1.getInfo()); }