import * as chai from "chai";
import { app } from "../../src/app";
import { BookInterface, BookModel, BookSchema, Book } from "../../src/models/Book";
import * as mongoose from "mongoose";

describe("/book", () => {
    describe("GET", async () => {
        it("404", async () => {
            try {
                const response = await chai
                    .request(app)
                    .get("/book/1");

                chai.expect(response).to.be.null;
            }
            catch (error) {
                chai.expect(error).to.be.not.null;
                chai.expect(error.response).to.have.status(404);
            }
        });
    });
});
