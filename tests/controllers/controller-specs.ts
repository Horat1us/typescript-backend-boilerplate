import * as chai from "chai";
import { app } from "../../src/app";
import { BookInterface, BookModel, BookSchema, Book } from "../../src/models/Book";
import * as mongoose from "mongoose";

describe("/book", () => {
    describe("GET", async () => {
        it("should return 404 if invalid id provided",async () => {
            await chai
                .request(app)
                .get("/book/1")
                .end((error, response) => {
                    chai.expect(error).to.be.null;
                    chai.expect(response).to.have.status(404);
                })
        });
    });
});
