import { expect } from "chai";
import { BookInterface, BookModel, BookSchema } from "../src/models/Book";
import { connection } from "../src/connection";
import * as mongoose from "mongoose";

const Book: mongoose.Model<BookModel> = connection.model<BookModel>("Book", BookSchema);

describe("Book", () => {
    it("should create a book", async () => {
        let book: BookInterface = {
            title: "Some test title",
        }

        const result: BookModel = await (new Book(book)).save();

        expect(result._id).to.exist;
        expect(result.title).to.be.equal(book.title);

        return true;
    });
});
