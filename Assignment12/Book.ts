export class Book {
    private id: number;
    private title: string;
    private author: string;
    private isAvailable: boolean;

    constructor(id: number, title: string, author: string, isAvailable: boolean = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    // Getters & Setters
    public getId(): number { return this.id; }
    public setId(id: number): void { this.id = id; }

    public getTitle(): string { return this.title; }
    public setTitle(title: string): void { this.title = title; }

    public getAuthor(): string { return this.author; }
    public setAuthor(author: string): void { this.author = author; }

    public getIsAvailable(): boolean { return this.isAvailable; }
    public setIsAvailable(isAvailable: boolean): void { this.isAvailable = isAvailable; }

    // Format output
    public getInfo(): string {
        const status = this.isAvailable ? "Available" : "Borrowed";
        return `[Book #${this.id}] ${this.title} by ${this.author} (${status})`;
    }
}