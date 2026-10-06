import { BaseDAO } from "./BaseDAO";
import { Book } from "./Book";

export class BookDAO extends BaseDAO {
    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                author TEXT NOT NULL,
                isAvailable INTEGER NOT NULL DEFAULT 1
            )
        `);
    }

    public addBook(title: string, author: string): boolean {
        const stmt = this.db.prepare('INSERT INTO books (title, author, isAvailable) VALUES (?, ?, 1)');
        const result = stmt.run(title, author);
        return result.changes > 0;
    }

    public findBookById(id: number): Book | null {
        const stmt = this.db.prepare('SELECT * FROM books WHERE id = ?');
        const row = stmt.get(id) as { id: number; title: string; author: string; isAvailable: number } | undefined;

        if (!row) return null;

        const isAvailableBool = Boolean(row.isAvailable);
        return new Book(row.id, row.title, row.author, isAvailableBool);
    }

    public updateAvailability(id: number, isAvailable: boolean): boolean {
        const availabilityInt = isAvailable ? 1 : 0;
        const stmt = this.db.prepare('UPDATE books SET isAvailable = ? WHERE id = ?');
        const result = stmt.run(availabilityInt, id);
        return result.changes > 0;
    }
}