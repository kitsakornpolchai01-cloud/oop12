import { BaseDAO } from "./BaseDAO";
import { BookDAO } from "./BookDAO";
import { BorrowRecord } from "./BorrowRecord";

export class BorrowRecordDAO extends BaseDAO {
    private bookDAO: BookDAO;

    constructor(bookDAO: BookDAO) {
        super();
        this.bookDAO = bookDAO;
    }

    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS borrow_records (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                bookId INTEGER NOT NULL,
                borrowerName TEXT NOT NULL,
                borrowDate TEXT NOT NULL,
                FOREIGN KEY (bookId) REFERENCES books (id)
            )
        `);
    }

    public borrowBook(bookId: number, borrowerName: string): BorrowRecord | null {
        const book = this.bookDAO.findBookById(bookId);
       
        if (!book) {
            console.log(`❌ Error: Book ID ${bookId} not found.`);
            return null;
        }

        if (!book.getIsAvailable()) {
            console.log(`❌ Error: "${book.getTitle()}" is currently unavailable for borrow.`);
            return null;
        }

        const borrowDate = new Date().toISOString().split('T')[0];

        const stmt = this.db.prepare(
            'INSERT INTO borrow_records (bookId, borrowerName, borrowDate) VALUES (?, ?, ?)'
        );
        const result = stmt.run(bookId, borrowerName, borrowDate);

        if (result.changes > 0) {
            this.bookDAO.updateAvailability(bookId, false);
            return new BorrowRecord(Number(result.lastInsertRowid), bookId, borrowerName, borrowDate);
        }

        return null;
    }
}