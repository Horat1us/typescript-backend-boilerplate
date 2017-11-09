import { expect } from "chai";
import { BookInterface, BookModel, BookSchema, Book } from "../../src/models/Book";

describe("Book", () => {
    it("should create a book", async () => {
        let book: BookInterface = {
            title: "Some test title",
        }

        const result: BookModel = await (new Book(book)).save();

        expect(result._id).to.exist;
        expect(result.title).to.be.equal(book.title);

        return 2;
    });
});
