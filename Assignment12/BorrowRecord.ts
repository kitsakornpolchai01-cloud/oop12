export class BorrowRecord {
    private id: number;
    private bookId: number;
    private borrowerName: string;
    private borrowDate: string;

    constructor(id: number, bookId: number, borrowerName: string, borrowDate: string) {
        this.id = id;
        this.bookId = bookId;
        this.borrowerName = borrowerName;
        this.borrowDate = borrowDate;
    }

    public getId(): number { return this.id; }
    public setId(id: number): void { this.id = id; }

    public getBookId(): number { return this.bookId; }
    public setBookId(bookId: number): void { this.bookId = bookId; }

    public getBorrowerName(): string { return this.borrowerName; }
    public setBorrowerName(borrowerName: string): void { this.borrowerName = borrowerName; }

    public getBorrowDate(): string { return this.borrowDate; }
    public setBorrowDate(borrowDate: string): void { this.borrowDate = borrowDate; }
}